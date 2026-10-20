import { Button } from "@/components/ui/Button";
import { LINKS, SITE } from "@/content";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1240px] px-7 pt-48 pb-[140px]">
      <h1 className="mb-5 text-[clamp(40px,5vw,72px)] leading-none font-bold tracking-[-0.05em]">This page is not here.</h1>
      <p className="mb-8 max-w-[560px] text-xl text-ink-soft">It may have moved. Start from the home page, or tell us what you were looking for.</p>
      <div className="flex flex-wrap gap-3">
        <Button href="/" variant="ghost">Home</Button>
        <Button href={LINKS.startProject} arrow>{SITE.startLabel}</Button>
      </div>
    </section>
  );
}
