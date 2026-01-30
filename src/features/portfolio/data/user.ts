import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Jason",
  lastName: "Stockman",
  displayName: "Jason Stockman",
  username: "jasonstockman",
  gender: "male",
  pronouns: "he/him",
  bio: "I'm a builder. Always learning and building new things.",
  flipSentences: ["Entrepreneur", "Founder", "Fullstack Developer"],
  address: "Pacifica, California",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "amFzb25AcG0ubWU=", // base64 encoded
  website: "https://jasonstockman.com",
  jobTitle: "Entrepreneur, Founder",
  jobs: [
    // TODO: Add your work experience
    // {
    //   title: "Job Title",
    //   company: "Company Name",
    //   website: "https://example.com",
    // },
  ],
  about: `
I love building and exploring new technologies. Full-stack developer at heart.

Co-founded Proton (Switzerland), the world's largest end-to-end encrypted email provider.
Lead Engineer at ArchimedesFinance. Founder of Warm.
`,
  avatar: "/image.webp",
  ogImage: "", // TODO: Add your OG image URL for social media previews
  namePronunciationUrl: "", // Optional: audio file for name pronunciation
  affiliateBadge: undefined, // Optional: affiliate badge configuration
  timeZone: "America/Los_Angeles",
  keywords: ["jasonstockman", "jason stockman", "jason", "stockman"],
  dateCreated: "2026-01-29", // YYYY-MM-DD
} satisfies User;
