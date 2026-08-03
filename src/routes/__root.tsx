import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/lib/theme";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/site";

function NotFoundComponent() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs tracking-widest text-primary uppercase">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">This page doesn't exist</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The link may be outdated or the page has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: profile.name },
      { property: "og:site_name", content: `${profile.name} — Software Engineer` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#635BFF" },
      { title: "Somraj Deb | Entreprenuer | Software Engineer | Ai Developer" },
      { property: "og:title", content: "Somraj Deb | Entreprenuer | Software Engineer | Ai Developer" },
      { name: "twitter:title", content: "Somraj Deb | Entreprenuer | Software Engineer | Ai Developer" },
      { name: "description", content: "A premium personal website showcasing Somraj Deb's expertise as a Software Engineer, Full-Stack Developer, and AI Automation Developer." },
      { property: "og:description", content: "A premium personal website showcasing Somraj Deb's expertise as a Software Engineer, Full-Stack Developer, and AI Automation Developer." },
      { name: "twitter:description", content: "A premium personal website showcasing Somraj Deb's expertise as a Software Engineer, Full-Stack Developer, and AI Automation Developer." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9147180-fd6a-49bd-9979-213a3fa27493/id-preview-87acb444--dc4fe20a-7b45-4e05-b062-4230ffdf9a9e.lovable.app-1785667615283.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9147180-fd6a-49bd-9979-213a3fa27493/id-preview-87acb444--dc4fe20a-7b45-4e05-b062-4230ffdf9a9e.lovable.app-1785667615283.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Software Engineer",
          email: `mailto:${profile.email}`,
          url: "/",
          address: { "@type": "PostalAddress", addressLocality: "Agartala", addressCountry: "IN" },
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: [
            "Software Engineering",
            "Full-Stack Development",
            "AI Automation",
            "Spring Boot",
            "React",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Nav />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
