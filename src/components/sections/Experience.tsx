import { experience } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";
import { Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Experience</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold text-balance">
            Work that shipped, ran in production, and was used by real people.
          </h2>
        </Reveal>

        <ol className="mt-14 border-l border-border">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role + job.company} delay={i * 0.05} className="relative pb-8 pl-6 sm:pl-10">
              <span
                aria-hidden
                className="absolute top-8 -left-[5px] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
              />
              <article className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground sm:text-right">
                    {job.duration}
                  </p>
                </div>

                <ul className="mt-5 space-y-2">
                  {job.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="absolute top-2.5 left-0 h-1 w-1 rounded-full bg-border"
                      />
                      {r}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 space-y-2">
                  {job.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm leading-relaxed text-foreground">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {a}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
