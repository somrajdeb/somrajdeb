import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Certifications</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold text-balance">
            Credentials and continued learning.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <article className="glass-card flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Award className="h-4 w-4" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">Issued {c.date}</p>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View Certificate
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
