import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils/cn";

const personas = [
  {
    num: "01",
    title: "The consistent creator",
    body: "You publish 3+ videos a week and every thumbnail needs to land. Spending 2 hours per video on overlay graphics isn't a system — it's a bottleneck. You need something fast, repeatable, and professional every time.",
    tags: ["High upload frequency", "Tight turnaround", "Repeatable workflow"],
  },
  {
    num: "02",
    title: "The CTR-obsessed creator",
    body: "You track your analytics. You know that moving from 4% to 7% CTR can nearly double your views on the same video. Revenue cards, milestone popups, countdown timers — you've seen what they do to click-through. You want them done right.",
    tags: ["CTR-focused", "Data-driven", "Proven click-drivers"],
  },
  {
    num: "03",
    title: "The professional creator",
    body: "You're a designer, freelancer, or you work with clients. The full commercial license covers all of it — client thumbnails, agency work, sponsored content. No grey areas, no per-project fees, no restrictions.",
    tags: ["Client work", "Commercial license", "Agency-ready"],
  },
];

export function ForCreatorsSection() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              Who it&apos;s for
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              Built for creators who take
              <br className="hidden sm:block" /> thumbnails seriously.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-content-secondary">
              If your thumbnail is the first thing a viewer sees — and it is —
              it deserves more than a generic PNG pack or a Canva template.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {personas.map(({ num, title, body, tags }, i) => (
            <Reveal key={num} delay={i * 80}>
              <div
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-border bg-base-surface p-7",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevated"
                )}
              >
                <span className="select-none text-5xl font-bold tracking-tightest text-border-strong transition-colors duration-300 group-hover:text-content-muted/25">
                  {num}
                </span>
                <h3 className="mt-5 text-base font-semibold capitalize text-content-primary">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-content-secondary">
                  {body}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-base-elevated px-2.5 py-0.5 text-xs text-content-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
