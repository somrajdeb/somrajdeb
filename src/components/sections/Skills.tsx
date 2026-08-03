import { skills } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";
import { motion } from "motion/react";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Skills</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold text-balance">
            The toolkit I build with day to day.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="glass-card h-full rounded-2xl p-6">
                <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: j * 0.04 }}
                      whileHover={{ y: -2 }}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
