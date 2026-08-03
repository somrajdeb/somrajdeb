import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? `${loaderData.title} — Somraj Deb` : "Project — Somraj Deb";
    const description = loaderData?.summary ?? "Project case study by Somraj Deb.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <section className="border-t border-border pt-10">
        <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
        <ul className="mt-5 space-y-3">
          {items.map((i) => (
            <li key={i} className="relative pl-5 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="absolute top-2.5 left-0 h-1 w-1 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24"
    >
      <div className="shell max-w-3xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <p className="mt-10 font-mono text-xs tracking-widest text-primary uppercase">
          {project.year}
        </p>
        <h1 className="mt-4 text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.05] font-semibold text-balance">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="shell mt-14 max-w-5xl">
        <div className="glass-card overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={`${project.title} interface`}
            width={1600}
            height={1000}
            className="aspect-16/10 w-full object-cover"
          />
        </div>
      </div>

      <div className="shell mt-16 max-w-3xl space-y-12">
        <Reveal>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Overview</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
          </section>
        </Reveal>

        <Block title="Architecture" items={project.architecture} />
        <Block title="Features" items={project.features} />

        <Reveal>
          <section className="border-t border-border pt-10">
            <h2 className="font-display text-xl font-semibold text-foreground">Tech Stack</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="border-t border-border pt-10">
            <h2 className="font-display text-xl font-semibold text-foreground">Screenshots</h2>
            <div className="glass-card mt-5 overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                width={1600}
                height={1000}
                className="aspect-16/10 w-full object-cover"
              />
            </div>
          </section>
        </Reveal>

        <Block title="Challenges" items={project.challenges} />
        <Block title="Lessons Learned" items={project.lessons} />
      </div>
    </motion.main>
  );
}
