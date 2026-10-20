import type { ChatMessage, Founder, LinkItem } from "./types";

export const LINKS = {
  startProject: "/contact/?t=project",
  partner: "/contact/?t=partner",
  chatZeya: "https://wa.me/254183325153?text=Hi",
  kintaraa: "https://kintaraa.com/",
  koa: "https://koaafricaa.com/",
  zeyaPrivacy: "/zeya/privacy/",
  linkedin: "https://www.linkedin.com/company/evarest-technologies/",
  x: "https://x.com/Evarestke",
} as const;

export const NAV: readonly LinkItem[] = [
  { label: "Products", href: "/products/" },
  { label: "Engineering", href: "/engineering/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const CONTACT = {
  email: "contact@evarestke.com",
  phone: "+254 723 469 406",
  phoneHref: "tel:+254723469406",
  location: "Nairobi, Kenya",
} as const;

export const SITE = {
  name: "Evarest Technologies Ltd",
  tagline: "We build our own products and engineer software for teams that need it built, shipped and supported.",
  startLabel: "Start a project",
  partnerLabel: "Partner with us",
  final: {
    title: "Have something that",
    accent: "needs to be built?",
    body: "Tell us what you are building and when you need it. We reply by email.",
  },
  footer: {
    company: "Company",
    products: "Products",
    contact: "Contact",
    privacy: "ZEYA privacy policy",
  },
} as const;

export const FOUNDERS: readonly Founder[] = [
  { name: "Stella Achar Oiro", role: "Co-founder and CEO", bio: "Leads company direction and our health products.", photo: "/images/team/stella.webp", linkedin: "https://www.linkedin.com/in/stella-achar-oiro/" },
  { name: "Raymond Caleb", role: "Co-founder and CTO", bio: "Leads technical direction, architecture and engineering standards.", photo: "/images/team/raymond.webp", linkedin: "https://www.linkedin.com/in/raymond-caleb/" },
  { name: "Vincent Odhiambo", role: "Co-founder and COO", bio: "Leads operations and delivery, from scoping to handover.", photo: "/images/team/vincent.webp", linkedin: "https://www.linkedin.com/in/vincent-omondi/" },
  { name: "Seth Athooh", role: "Co-founder and CFO", bio: "Leads financial planning and oversight.", photo: "/images/team/seth.webp", linkedin: "https://www.linkedin.com/in/oathooh/" },
];

/** Real ZEYA replies, copied word for word from WhatsApp screenshots. */
export const ZEYA_CHECKIN: ChatMessage = {
  from: "zeya",
  text: "As your baby grows bigger at 23 weeks, are you feeling comfortable, or are you experiencing any common discomforts like backaches or trouble sleeping?\n\nI am right here whenever you have a question or just want to check on what to expect next!",
  time: "16:57",
};
export const ZEYA_DANGER: readonly ChatMessage[] = [
  { from: "her", text: "I'm bleeding heavily", time: "16:22" },
  {
    from: "zeya",
    text: "URGENT: This sounds like it could be a danger sign that requires immediate medical attention.\n\n1. Go to your nearest health facility immediately or call emergency services.\n2. If you cannot travel, ask someone nearby to help you get to the hospital.\n\nEmergency numbers (anywhere in Kenya):\n• Emergency services: 999 or 112\n• National ambulance: 922\n• Kenya Red Cross: 1199",
    time: "16:22",
  },
];
