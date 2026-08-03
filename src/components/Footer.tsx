import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="shell grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold text-foreground">
            Built with React + TypeScript
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Designed by {profile.name}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {[
            { href: profile.github, label: "GitHub", Icon: Github },
            { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            { href: profile.resume, label: "Resume", Icon: FileText },
          ].map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
