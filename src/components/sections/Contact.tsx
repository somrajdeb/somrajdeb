import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="shell">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24">
            <div
              aria-hidden
              className="hairline-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <div className="relative">
              <p className="font-mono text-xs tracking-widest text-primary uppercase">Contact</p>
              <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] font-semibold text-balance">
                Let's Build Something Great Together.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
                Open to software engineering internships, full-stack work and AI automation
                projects.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>

              <p className="mt-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
