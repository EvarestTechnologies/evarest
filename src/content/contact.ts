export const TOPICS = ["Engineering project", "Product partnership", "Something else"] as const;
export const START_OPTIONS = ["As soon as possible", "In the next 1 to 3 months", "Later, just exploring"] as const;

export const CONTACT_PAGE = {
  meta: {
    title: "Contact · Evarest",
    description: "Tell us what you are building. A project, a partnership, or a question: we reply by email.",
  },
  label: "Contact",
  title: "Tell us what",
  accent: "you are building.",
  intro: "A project, a partnership, or a question. Send us a few lines and the right person will reply by email.",
  steps: [
    { icon: "✉", title: "You send a message", body: "What you need, and roughly when." },
    { icon: "↩", title: "We reply by email", body: "With questions, or a time for a first call." },
    { icon: "✓", title: "We send a proposal", body: "Scope, timeline and price, once we understand the work." },
  ],
  direct: "Or reach us directly",
  form: {
    topicLegend: "What is it about?",
    topicLabels: { "Engineering project": "An engineering project", "Product partnership": "A product partnership", "Something else": "Something else" },
    name: "Your name",
    email: "Email",
    organisation: "Company or organisation",
    optional: "(optional)",
    message: "Message",
    messagePlaceholder: "What are you building, and when do you need it?",
    start: "When would you like to start?",
    startPlaceholder: "Choose one",
    submit: "Send message",
    sending: "Sending…",
    privacy: "We use your details only to reply to you.",
    errorSummary: "Please check the fields marked below.",
    sentTitle: "Thank you. Your message is on its way.",
    sentBody: "We will reply by email.",
    failed: "Your message did not send. Please email us at",
    unconfigured: "Form not configured. Please email us at",
  },
} as const;
