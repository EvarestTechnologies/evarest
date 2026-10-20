export type WorkStudy = {
  id: "koa" | "ocs";
  tag: string;
  title: string;
  link: { label: string; href: string };
  glance: readonly { label: string; value: string }[];
  story: readonly { heading: string; body: string }[];
  tags: readonly string[];
  shot: { url: string; src: string; alt: string };
};

export const WORK: {
  meta: { title: string; description: string };
  hero: { label: string; title: string; accent: string; intro: string };
  studies: readonly [WorkStudy, WorkStudy];
  koaPortal: { url: string; src: string; alt: string };
  zeyaPhoneLabel: string;
} = {
  meta: {
    title: "Work · Evarest",
    description: "KOA Africa's insurance platform, and ZEYA built on Open Chat Studio. Work you can check.",
  },
  hero: {
    label: "Selected work",
    title: "Work you can",
    accent: "check.",
    intro: "Each project below links to something you can open yourself. We only report results we have measured.",
  },
  studies: [
    {
      id: "koa",
      tag: "Client work · Insurance",
      title: "KOA Africa",
      link: { label: "Visit koaafricaa.com", href: "https://koaafricaa.com/" },
      glance: [
        { label: "Client", value: "KOA Africa Insurance Agency" },
        { label: "Our role", value: "End-to-end platform development" },
        { label: "Scope", value: "Public website, agent portal, backend" },
        { label: "Status", value: "In live pilot, supported on a retainer" },
      ],
      story: [
        { heading: "The brief", body: "KOA needed a platform its insurance agents could use to manage customers and policies, with less manual work, and a public website to bring in clients and new agents." },
        { heading: "What we built", body: "We built the platform from scratch: the public website, the agent portal, and the backend behind them, including KOA's insurance workflows and integrations." },
        { heading: "Where it is now", body: "KOA is running a live pilot. We support the platform on a retainer that covers maintenance, bug fixes, new features, infrastructure and deployment." },
      ],
      tags: ["Product engineering", "Frontend and backend", "APIs and integrations", "Insurance workflows", "Deployment and support"],
      shot: { url: "koaafricaa.com", src: "/images/koa-site.webp", alt: "The KOA Africa website home page: Rooted in Care, Growing with You" },
    },
    {
      id: "ocs",
      tag: "Open source · Applied AI",
      title: "Open Chat Studio",
      link: { label: "Chat with ZEYA", href: "https://wa.me/254183325153?text=Hi" },
      glance: [
        { label: "Platform", value: "Open Chat Studio, by Dimagi" },
        { label: "Our role", value: "Code contributors, self-hosting, product build" },
        { label: "Built on it", value: "ZEYA, our WhatsApp pregnancy companion" },
        { label: "Status", value: "ZEYA is open on WhatsApp" },
      ],
      story: [
        { heading: "The work", body: "Members of our team have contributed code to Open Chat Studio, Dimagi's open-source chatbot platform. We also self-host it and run ZEYA on it." },
        { heading: "How we built ZEYA on it", body: "ZEYA's pipeline is generated from code, not set up by hand. Danger signs are checked by fixed rules before any AI runs, and 307 tests run those rules the way the platform runs them. Before each release, a check compares the live pipeline with the code." },
        { heading: "Why it matters for clients", body: "It is the same way we work on client systems: the risky parts are written in code, tested, and checked before they go live." },
      ],
      tags: ["Open-source contributions", "Self-hosting", "Applied AI", "WhatsApp", "Testing and release checks"],
      shot: { url: "ZEYA pipeline · Open Chat Studio", src: "/images/ocs-pipeline.webp", alt: "ZEYA's pipeline in the Open Chat Studio editor" },
    },
  ],
  koaPortal: { url: "portal.koaafricaa.com", src: "/images/koa-portal.webp", alt: "The KOA Africa agent portal sign-in screen" },
  zeyaPhoneLabel: "ZEYA on WhatsApp replying to a message about heavy bleeding",
};
