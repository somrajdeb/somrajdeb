import { Download } from "lucide-react";
import { profile } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export function ResumeSection() {
  return (
    <section id="resume" className="section-pad border-t border-border">
      <div className="shell">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-primary uppercase">Resume</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold">
              The full picture, on one page.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="glass-card mt-10 overflow-hidden rounded-2xl">
            <object
              data={profile.resume}
              type="application/pdf"
              aria-label={`${profile.name} resume`}
              className="h-[70vh] max-h-[860px] w-full"
            >
              <div className="grid place-items-center p-12 text-center">
                <p className="text-sm text-muted-foreground">
                  Your browser can't display the embedded PDF.{" "}
                  <a href={profile.resume} className="text-primary hover:underline">
                    Open the resume in a new tab
                  </a>
                  .
                </p>
              </div>
            </object>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
