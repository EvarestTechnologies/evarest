import type { Point } from "./types";

type Service = Point & { examples: string };
type Model = Point & { bestFor: string; featured?: boolean };
type Faq = { q: string; a: string };

export const ENGINEERING: {
  meta: { title: string; description: string };
  hero: { label: string; title: string; accent: string; intro: string; howLabel: string; shot: { url: string; src: string; alt: string } };
  problems: { label: string; title: string; items: readonly { quote: string; answer: string }[] };
  services: { label: string; title: string; items: readonly Service[] };
  process: { label: string; title: string; intro: string; steps: readonly Point[] };
  models: { label: string; title: string; items: readonly Model[]; price: string };
  faq: { label: string; title: string; items: readonly Faq[] };
} = {
  meta: {
    title: "Engineering · Evarest",
    description: "Backend, integrations and applied AI for AI companies, startups and growing businesses. One accountable team, from the first call to support after launch.",
  },
  hero: {
    label: "Engineering",
    title: "From requirements",
    accent: "to working software.",
    intro: "Backend, integrations and applied AI for AI companies, startups and growing businesses. One accountable team, from the first call to support after launch.",
    howLabel: "How we work",
    shot: { url: "ZEYA pipeline · Open Chat Studio", src: "/images/ocs-pipeline.webp", alt: "ZEYA's pipeline in the Open Chat Studio editor: danger-sign check, emergency response, registration and the AI step" },
  },
  problems: {
    label: "Sound familiar?",
    title: "Where we usually come in.",
    items: [
      { quote: "We have more planned than our team can ship.", answer: "We add engineering capacity, without you hiring permanent staff first." },
      { quote: "Our AI prototype works in a demo, not in production.", answer: "We engineer it into a product: integrations, guardrails, testing and deployment." },
      { quote: "Our systems don't talk to each other.", answer: "We connect them and automate the work in between." },
      { quote: "This project needs someone to own it.", answer: "We take the agreed scope from discovery to handover, and keep you updated." },
      { quote: "We launched, and now it needs looking after.", answer: "We maintain it, fix it and keep improving it on a monthly retainer." },
      { quote: "We're not sure what we need yet.", answer: "A technical assessment gives you a clear picture and a plan." },
    ],
  },
  services: {
    label: "Services",
    title: "What we build.",
    items: [
      { title: "Backend and API engineering", body: "Backend systems, APIs, data flows and application logic, built and improved.", examples: "APIs · data models · business logic" },
      { title: "Integrations and automation", body: "Connecting your systems and third-party services, and automating the workflows between them.", examples: "Third-party APIs · messaging · workflows" },
      { title: "Applied AI", body: "Practical AI features and workflows, including LLM integrations and retrieval where it fits, with safety checks in code.", examples: "LLM features · retrieval · chatbots" },
      { title: "End-to-end product development", body: "From technical discovery through implementation, testing, deployment and handover.", examples: "Discovery · build · release" },
      { title: "Ongoing engineering support", body: "Maintenance, bug fixes, deployment support and new features under an agreed arrangement.", examples: "Maintenance · fixes · new features" },
      { title: "Technical assessment", body: "A short review of a system, its risks, or how to implement what you are planning.", examples: "Review · risks · plan" },
    ],
  },
  process: {
    label: "How we work",
    title: "Clear scope, regular updates, no surprises.",
    intro: "If a timeline or requirement changes, you hear it from us first.",
    steps: [
      { title: "Talk", body: "A first conversation about what you need." },
      { title: "Scope", body: "Technical discovery, then agreed deliverables, assumptions and acceptance criteria." },
      { title: "Build", body: "Implementation with regular progress updates. Risks raised early." },
      { title: "Test and deploy", body: "Testing, your review, agreed corrections, then release." },
      { title: "Hand over and support", body: "Documentation and handover, then support where agreed." },
    ],
  },
  models: {
    label: "Ways to work with us",
    title: "Pick the shape that fits.",
    items: [
      { title: "Technical assessment", body: "A short engagement to review a system, find issues or plan an implementation.", bestFor: "Best for: a clear first step" },
      { title: "Fixed-scope project", body: "Defined requirements, deliverables, timeline and acceptance criteria, agreed before we start.", bestFor: "Best for: a product or feature you can describe", featured: true },
      { title: "Monthly retainer", body: "Ongoing engineering capacity for maintenance, support and continued development.", bestFor: "Best for: software that keeps growing" },
    ],
    price: "We agree the price in the proposal, after we understand the work.",
  },
  faq: {
    label: "Questions",
    title: "Before you get in touch.",
    items: [
      { q: "Do you work with teams outside Kenya?", a: "Yes. We work with clients in Kenya and in other markets, and we agree how we communicate and report progress at the start." },
      { q: "Can you work alongside our own engineers?", a: "Yes. We can add capacity to your team, or take full ownership of an agreed piece of work." },
      { q: "What happens after launch?", a: "You get documentation and a handover. If you want us to keep going, a monthly retainer covers maintenance, fixes and new features." },
      { q: "How do we start?", a: "Email us with what you are building and when you need it. We reply, set up a first call, and send a proposal once we understand the work." },
    ],
  },
};
