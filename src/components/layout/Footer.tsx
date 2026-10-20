import Link from "next/link";
import { CONTACT, LINKS, SITE } from "@/content";
import { Logo } from "@/components/ui/Logo";

const COMPANY = [
  { label: "Engineering", href: "/engineering/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3.5 font-mono text-xs font-medium tracking-[0.1em] text-white uppercase">{title}</h2>
      <ul className="grid gap-2">{children}</ul>
    </div>
  );
}

export function Footer() {
  const a = "transition-colors hover:text-white";
  return (
    <footer className="border-t border-white/10 bg-ink pt-[70px] pb-10 text-[15px] text-[color-mix(in_srgb,white_70%,var(--color-ink))]">
      <div className="mx-auto max-w-[1240px] px-7">
        <div className="grid grid-cols-2 gap-9 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo onDark />
            <p className="mt-3.5 max-w-[300px]">{SITE.tagline}</p>
          </div>
          <Col title={SITE.footer.company}>
            {COMPANY.map((c) => <li key={c.href}><Link className={a} href={c.href}>{c.label}</Link></li>)}
          </Col>
          <Col title={SITE.footer.products}>
            <li><Link className={a} href="/products/#zeya">ZEYA</Link></li>
            <li><a className={a} href={LINKS.kintaraa}>Kintaraa</a></li>
            <li><Link className={a} href={LINKS.zeyaPrivacy}>{SITE.footer.privacy}</Link></li>
          </Col>
          <Col title={SITE.footer.contact}>
            <li><a className={a} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a className={a} href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a className={a} href={LINKS.linkedin}>LinkedIn</a></li>
            <li><a className={a} href={LINKS.x}>X</a></li>
          </Col>
        </div>
        <div className="mt-[50px] flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13.5px]">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>{CONTACT.location}</span>
        </div>
      </div>
    </footer>
  );
}
