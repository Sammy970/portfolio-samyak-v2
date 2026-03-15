import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeRaw from "rehype-raw";

const GITHUB_REPO = "Sammy970/portfolio-samyak-v2";
const CONTENT_PATH = "content";
const GITHUB_API = "https://api.github.com";

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      theme: {
        light: "github-dark",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const url = `${GITHUB_API}/repos/${GITHUB_REPO}/contents/${CONTENT_PATH}/${slug}.mdx`;
  const res = await fetch(url, {
    headers: githubHeaders(),
    next: { revalidate: 0 }, // always fresh
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch post "${slug}" from GitHub: ${res.status}`);
  }

  const data = await res.json();
  // GitHub returns base64-encoded content
  const raw = Buffer.from(data.content, "base64").toString("utf-8");
  const { content: rawContent, data: metadata } = matter(raw);
  const source = await markdownToHTML(rawContent);

  return { source, metadata, slug };
}

export async function getBlogPosts() {
  const url = `${GITHUB_API}/repos/${GITHUB_REPO}/contents/${CONTENT_PATH}`;
  const res = await fetch(url, {
    headers: githubHeaders(),
    next: { revalidate: 0 }, // always fresh
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog posts from GitHub: ${res.status}`);
  }

  const files: any[] = await res.json();
  const mdxFiles = files.filter((f) => f.name.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.name.replace(/\.mdx$/, "");
      const { metadata, source } = await getPost(slug);
      return { metadata, slug, source };
    })
  );

  return posts;
}
