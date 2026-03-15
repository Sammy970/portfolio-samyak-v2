import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-start mb-2">
                  {post.metadata?.icon && (
                    <Image
                      src={post.metadata.icon}
                      alt={post.metadata.title}
                      width={30}
                      height={30}
                      className="object-cover rounded mr-1"
                    />
                  )}
                  <p className="tracking-tight">{post.metadata.title}</p>
                </div>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
              {/* Add tags */}
              <div className="flex flex-wrap gap-2">
                {post.metadata?.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs text-white bg-black border-white border-[1px] px-2 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
