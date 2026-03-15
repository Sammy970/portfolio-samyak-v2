import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { client } from "@/sanity/lib/client";
import {
  profileQuery,
  workQuery,
  educationQuery,
  projectsQuery,
  certificationsQuery,
  hackathonsQuery,
} from "@/sanity/lib/queries";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export const revalidate = 60;

export default async function Page() {
  const [profile, work, education, projects, certifications, hackathons] =
    await Promise.all([
      client.fetch(profileQuery),
      client.fetch(workQuery),
      client.fetch(educationQuery),
      client.fetch(projectsQuery),
      client.fetch(certificationsQuery),
      client.fetch(hackathonsQuery),
    ]);

  if (!profile) {
    return (
      <main className="flex flex-col min-h-[100dvh] items-center justify-center">
        <p className="text-muted-foreground">
          No profile found. Please add your profile in the{" "}
          <Link href="/studio" className="text-blue-500 underline">
            Sanity Studio
          </Link>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${profile.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={profile.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={profile.name} src={profile.avatarUrl} />
                <AvatarFallback>{profile.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
        {/* Download Resume */}
        <div className="mx-auto mt-4 flex max-w-2xl items-center justify-between gap-4">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Link
              href="/SamyakJainResume.pdf"
              target="_blank"
              className="inline-flex items-center rounded-md border border-transparent bg-foreground px-4 py-2 text-sm font-medium text-background shadow-sm hover:bg-black/80 focus:outline-none dark:bg-white dark:text-background dark:hover:bg-white/80 dark:hover:text-background dark:focus:ring-offset-muted"
            >
              Download Resume
            </Link>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {profile.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {work.map((job: any, id: number) => (
            <BlurFade key={job.company + job.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                logoUrl={job.logoUrl}
                altText={job.company}
                title={job.company}
                subtitle={job.title}
                href={job.href}
                badges={job.badges ?? []}
                period={`${job.start} - ${job.end ?? "Present"}`}
                description={job.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {education.map((edu: any, id: number) => (
            <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                href={edu.href}
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={`${edu.start} - ${edu.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {(profile.skills ?? []).map((skill: string, id: number) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project: any, id: number) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies ?? []}
                  image={project.image}
                  video={project.video}
                  links={(project.links ?? []).map((link: any) => ({
                    ...link,
                    icon: link.type === "Source"
                      ? <Icons.github className="size-3" />
                      : <Icons.globe className="size-3" />,
                  }))}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          {certifications.map((cert: any, id: number) => (
            <BlurFade
              key={cert.title}
              delay={BLUR_FADE_DELAY * 14 + id * 0.05}
            >
              <ResumeCard
                logoUrl={cert.logoUrl}
                altText={cert.title}
                title={cert.title}
                subtitle={cert.provider}
                href={cert.href}
                period={cert.date}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {hackathons.length} hackathon
                  {hackathons.length !== 1 ? "s" : ""}. It was eye-opening to
                  see the endless possibilities brought to life by a group of
                  motivated and passionate individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {hackathons.map((hackathon: any, id: number) => (
                <BlurFade
                  key={hackathon.title + hackathon.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={hackathon.title}
                    description={hackathon.description}
                    location={hackathon.location}
                    dates={hackathon.dates}
                    image={hackathon.image}
                    links={(hackathon.links ?? []).map((link: any) => ({
                      ...link,
                      icon: <Icons.globe className="size-3" />,
                    }))}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={`mailto:${profile.contact?.email}`}
                  className="text-blue-500 hover:underline"
                >
                  via email
                </Link>{" "}
                or on my{" "}
                <Link
                  href={profile.contact?.linkedin ?? "#"}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
