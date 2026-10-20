import type { Point } from "./types";

export const HOME = {
  meta: {
    title: "Evarest Technologies | We build what matters. We engineer what works.",
    description: "Evarest Technologies builds its own products, ZEYA and Kintaraa, and engineers backend systems, integrations and applied AI for teams that need their software built, shipped and supported.",
  },
  hero: {
    tag: "Software and AI engineering",
    line1: "We build what matters.",
    line2: "We engineer what works.",
    sub: "Our own products, ZEYA and Kintaraa, and backend, integrations and applied AI for teams that need their software built, shipped and supported.",
    proof: ["Built KOA Africa's insurance platform", "Contributors to Open Chat Studio"],
    image: { src: "/images/hero-team", alt: "The Evarest team working together at laptops around a wooden table" },
  },
  products: {
    label: "Our products",
    title: "Products we build for problems we care about.",
    intro: "Client engineering pays for them, and they show how we work.",
    zeyaPhoneLabel: "ZEYA on WhatsApp: a message about heavy bleeding gets an urgent reply with Kenya's emergency numbers",
    aboutZeya: "About ZEYA",
  },
  engineering: {
    label: "Engineering",
    title: "From requirements to working software.",
    intro: "For AI companies, startups and growing businesses that need capacity, or one accountable team to deliver and maintain their software.",
    services: [
      { title: "Backend and API engineering", body: "Backend systems, APIs, data flows and application logic." },
      { title: "Integrations and automation", body: "Connecting your systems and third-party services, automating workflows." },
      { title: "Applied AI", body: "LLM features and workflows, with retrieval where it fits." },
      { title: "End-to-end product development", body: "Discovery, build, testing, deployment and handover." },
      { title: "Ongoing engineering support", body: "Maintenance, fixes, deployment and new features." },
      { title: "Technical assessment", body: "A short review of a system, its risks, or an implementation plan." },
    ] as readonly Point[],
    promises: [
      { title: "One accountable team", body: "The same people scope, build and support your software." },
      { title: "Clear scope, regular updates", body: "Agreed deliverables first. Risks raised early." },
      { title: "Support after launch", body: "Handover, then maintenance on a retainer if you need it." },
    ] as readonly Point[],
    howLabel: "How we work",
  },
  work: {
    label: "Selected work",
    title: "Work you can check.",
    intro: "Each project links to something you can open yourself.",
    koa: {
      tag: "Client work · Insurance",
      title: "KOA Africa",
      body: "We built KOA Africa's insurance platform from scratch: the website, the agent portal and the backend. KOA is now in a live pilot, and we support it on a retainer.",
      link: "koaafricaa.com",
      image: { src: "/images/koa-site.webp", alt: "The KOA Africa website home page" },
    },
    ocs: {
      tag: "Open source · Applied AI",
      title: "Open Chat Studio",
      body: "Our team has contributed code to Open Chat Studio, Dimagi's open-source chatbot platform. We self-host it and run ZEYA on it, with the safety rules in tested code.",
      link: "Chat with ZEYA on WhatsApp",
      image: { src: "/images/ocs-pipeline.webp", alt: "ZEYA's pipeline in the Open Chat Studio editor" },
    },
    background: "/images/work-bg.webp",
  },
} as const;
