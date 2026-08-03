import { profile, timeline } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">About</p>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold text-balance">
            Engineering for scale, clarity and longevity.
          </h2>
        </Reveal>

        <div>
          <div className="space-y-5">
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <ol className="mt-14 space-y-0 border-l border-border">
            {timeline.map((entry, i) => (
              <Reveal as="li" key={entry.year} delay={i * 0.05} className="relative pb-10 pl-8">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
                />
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {entry.year}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {entry.items.map((it) => (
                    <li key={it} className="font-display text-base font-medium text-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
