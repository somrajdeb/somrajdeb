import { useQuery } from "@tanstack/react-query";
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { Counter, Reveal } from "@/components/motion-primitives";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

async function fetchGithub(user: string) {
  const [profileRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${user}`),
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`),
  ]);
  if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API unavailable");
  const account = (await profileRes.json()) as { public_repos: number; followers: number };
  const repos = (await reposRes.json()) as Repo[];
  const owned = repos.filter((r) => !r.fork);
  const stars = owned.reduce((s, r) => s + r.stargazers_count, 0);
  const languages = Object.entries(
    owned.reduce<Record<string, number>>((acc, r) => {
      if (r.language) acc[r.language] = (acc[r.language] ?? 0) + 1;
      return acc;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const pinned = [...owned]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
  return { account, stars, languages, pinned, total: owned.length };
}

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-secondary ${className}`} />;
}

export function GitHubSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github", profile.githubUser],
    queryFn: () => fetchGithub(profile.githubUser),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  return (
    <section id="github" className="section-pad border-t border-border">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">GitHub</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold text-balance">
            Open source activity, live from GitHub.
          </h2>
        </Reveal>

        {isError ? (
          <p className="mt-10 text-sm text-muted-foreground">
            GitHub stats are temporarily unavailable.{" "}
            <a href={profile.github} className="text-primary hover:underline">
              View the profile directly
            </a>
            .
          </p>
        ) : (
          <>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Public repositories", value: data?.total ?? 0 },
                { label: "Total stars", value: data?.stars ?? 0 },
                { label: "Followers", value: data?.account.followers ?? 0 },
                { label: "Top languages", value: data?.languages.length ?? 0 },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.04}>
                  <div className="glass-card rounded-2xl p-6">
                    {isLoading ? (
                      <Skeleton className="h-9 w-16" />
                    ) : (
                      <p className="font-display text-3xl font-semibold text-foreground">
                        <Counter value={stat.value} />
                      </p>
                    )}
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.05}>
              <div className="glass-card mt-6 overflow-x-auto rounded-2xl p-6">
                <p className="font-display text-sm font-semibold text-foreground">
                  Contribution graph
                </p>
                <img
                  src={`https://ghchart.rshah.org/635BFF/${profile.githubUser}`}
                  alt={`GitHub contribution graph for ${profile.githubUser}`}
                  loading="lazy"
                  width={1200}
                  height={180}
                  className="mt-4 w-full min-w-[640px]"
                />
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-40" />)
                : data?.pinned.map((repo, i) => (
                    <Reveal key={repo.id} delay={i * 0.04}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-card flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex min-w-0 items-center gap-2 font-display text-sm font-semibold text-foreground">
                            <Github className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span className="truncate">{repo.name}</span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                        </div>
                        <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">
                          {repo.description ?? "No description provided."}
                        </p>
                        <div className="mt-5 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                          {repo.language && <span>{repo.language}</span>}
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </a>
                    </Reveal>
                  ))}
            </div>

            {!isLoading && data && data.languages.length > 0 && (
              <Reveal delay={0.05}>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {data.languages.map(([lang, count]) => (
                    <li
                      key={lang}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {lang} · {count}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </>
        )}
      </div>
    </section>
  );
}
