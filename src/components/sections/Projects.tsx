import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Projects</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold text-balance">
            Selected work — systems, products and automation.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <article className="group glass-card h-full overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="block">
                  <div className="overflow-hidden border-b border-border bg-secondary">
                    <img
                      src={p.image}
                      alt={`${p.title} interface preview`}
                      loading="lazy"
                      width={1600}
                      height={1000}
                      className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      <Link to="/projects/$slug" params={{ slug: p.slug }}>
                        {p.title}
                      </Link>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 6).map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Read More
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
