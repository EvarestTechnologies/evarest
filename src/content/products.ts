import type { Point } from "./types";

type Product = {
  id: "zeya" | "kintaraa";
  name: string;
  status: string;
  cardLine: string;
  summary: string;
  points: readonly Point[];
};

export const PRODUCTS: {
  hero: { label: string; title: string; accent: string; intro: string };
  zeya: Product & { flow: readonly string[]; chatLabel: string; moreLabel: string; safety: string };
  kintaraa: Product & { visitLabel: string; pilotLabel: string; image: { src: string; alt: string } };
  privacy: { label: string; title: string; points: readonly Point[]; linkLabel: string };
  partners: { label: string; title: string; intro: string; cards: readonly Point[] };
} = {
  hero: {
    label: "Products",
    title: "Software for the moments",
    accent: "that matter most.",
    intro: "ZEYA supports pregnant women on WhatsApp. Kintaraa helps survivors of gender-based violence get support without revealing who they are. Our client engineering funds both.",
  },
  zeya: {
    id: "zeya",
    name: "ZEYA",
    status: "Open on WhatsApp",
    cardLine: "A pregnancy education companion for women in Kenya, in English and Kiswahili. Danger signs get emergency numbers before any AI runs.",
    summary: "A pregnancy education companion on WhatsApp for women in Kenya, in English and Kiswahili. Each answer fits her week of pregnancy.",
    points: [
      { title: "Grounded in health guidance", body: "Answers draw on World Health Organization and Kenya Ministry of Health guidance." },
      { title: "Danger signs come first", body: "Eight danger signs, such as heavy bleeding, get emergency numbers at once, before any AI runs." },
      { title: "Where she already is", body: "No app to install. She messages ZEYA on WhatsApp." },
    ],
    flow: ["Her message", "Danger-sign check", "Emergency numbers, or an answer for her week"],
    chatLabel: "Chat with ZEYA",
    moreLabel: "More about ZEYA",
    safety: "ZEYA provides education, not diagnosis. It does not replace a health worker.",
  },
  kintaraa: {
    id: "kintaraa",
    name: "Kintaraa",
    status: "Ready for pilot",
    cardLine: "An anonymity-first platform for survivors of gender-based violence, so they can seek support without revealing who they are.",
    summary: "An anonymity-first platform for survivors of gender-based violence, so they can seek support without revealing who they are.",
    points: [
      { title: "No name needed", body: "Nothing is kept when the survivor closes the page." },
      { title: "Report at their own pace", body: "Reporting an incident takes a few minutes, and they can stop at any point." },
      { title: "Help in one place", body: "Questions on health, police and law, nearby services, and their rights, in English and Kiswahili." },
    ],
    visitLabel: "Visit kintaraa.com",
    pilotLabel: "Partner on a pilot",
    image: { src: "/images/kintaraa-phone.webp", alt: "Kintaraa home screen: You're safe here, with Report an incident and other ways to get help" },
  },
  privacy: {
    label: "ZEYA",
    title: "Privacy and research",
    points: [
      { title: "Consent first", body: "ZEYA asks for consent before storing messages. Anyone can say no." },
      { title: "Open to everyone in Kenya", body: "Only women enrolled by the study team take part in the research study. Other users are not included in it." },
      { title: "Study numbers, not names", body: "Researchers analyse study conversations under a study number instead of a name or phone number." },
      { title: "Leaving the study", body: "Participants can withdraw at any time by contacting the study team. It does not affect their care." },
    ],
    linkLabel: "Read the full ZEYA privacy policy",
  },
  partners: {
    label: "Partner with us",
    title: "Help us take these products further.",
    intro: "We are looking for partners who share the problems these products solve.",
    cards: [
      { title: "Research partners", body: "Study what the products change, with us, under proper ethics review." },
      { title: "Implementation partners", body: "Bring ZEYA or Kintaraa to the people you already serve." },
      { title: "Funders", body: "Support trials, pilots and the next stage of each product." },
    ],
  },
};
