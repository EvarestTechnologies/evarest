export type RoadStop = { title: string; body: string; state: "done" | "now" | "next" };

export const ABOUT: {
  meta: { title: string; description: string };
  story: { label: string; title: string; accent: string; lead: string; body: string };
  road: { title: string; key: { done: string; now: string; next: string }; stops: readonly RoadStop[] };
  photo: { src: string; alt: string; caption: string };
  vision: { label: string; text: string };
  mission: { label: string; text: string };
  team: { label: string; title: string; intro: string };
} = {
  meta: {
    title: "About · Evarest",
    description: "Four founders who already knew how to ship together, building products of their own and engineering software for others.",
  },
  story: {
    label: "Our story",
    title: "Most teams meet when the project starts.",
    accent: "We’d already been building together for two years.",
    lead: "We trained as software engineers side by side and entered hackathons as a team, where the software has to work by the deadline. Some of those projects won. One of them, Kintaraa, mattered too much to leave as a demo, so we kept building it.",
    body: "When you work with Evarest, you get a team that already knows how to ship together. And because we run products of our own, we know launch day is where the work starts, not where it ends.",
  },
  road: {
    title: "Our road so far",
    key: { done: "Done", now: "Now", next: "Next" },
    stops: [
      { title: "Trained together", body: "Two years as software engineering trainees", state: "done" },
      { title: "Built at hackathons", body: "Working software, to a deadline", state: "done" },
      { title: "Kintaraa began", body: "A hackathon project we kept building", state: "done" },
      { title: "Founded Evarest", body: "Our own products and client engineering", state: "done" },
      { title: "ZEYA on WhatsApp", body: "Open to women across Kenya", state: "now" },
      { title: "ZEYA research trial", body: "Testing what ZEYA changes", state: "next" },
      { title: "Kintaraa pilot", body: "First partners, real users", state: "next" },
    ],
  },
  photo: { src: "/images/about-kili.webp", alt: "Kilimanjaro above the clouds, seen from Amboseli in Kenya", caption: "The climb starts here" },
  vision: { label: "Vision", text: "A world where technology makes essential services more accessible, reliable and effective." },
  mission: { label: "Mission", text: "We build technology products that address real-world challenges, and engineer software systems that help organisations deliver better services." },
  team: {
    label: "The team",
    title: "The people behind Evarest.",
    intro: "Four engineers, one of us also a clinician. That is why safety comes first in everything we build.",
  },
};
