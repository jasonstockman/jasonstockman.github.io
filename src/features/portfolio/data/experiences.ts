import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "warm",
    companyName: "Warm",
    companyWebsite: "https://warm.io",
    positions: [
      {
        id: "warm-founder",
        title: "Founder",
        employmentPeriod: {
          start: "2026",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "business",
        description:
          "Founder and lead builder for Warm, a personal finance dashboard for tracking and managing your finances. Built the frontend and backend for the platform, including the authentication system, the dashboard, and the API, the AI assistant, the syncronization engine, data analysis engine, and all marketing.",
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "archimedes-finance",
    companyName: "Archimedes Finance",
    companyWebsite: "https://finance.yahoo.com/quote/ARCH-USD/profile/",
    positions: [
      {
        id: "archimedes-finance-lead-fullstack",
        title: "Lead Fullstack Developer (2nd hire)",
        employmentPeriod: {
          start: "2022",
          end: "2024",
        },
        employmentType: "Full-time",
        icon: "business",
        description:
          "Designed and built the frontend and backend for the Archimedes Finance platform, including Blockchain, Web3, and DeFi system. Automated trading and pricing updates using AWS Lambda and AWS Step Functions and integrated with Web3 contracts. Built and audited most of the Smart Contracts for the platform, including the Leverage Engine, and CRV pools.",
      },
    ],
  },
  {
    id: "protonmail",
    companyName: "Proton",
    companyWebsite: "https://proton.me",
    positions: [
      {
        id: "protonmail-cofounder",
        title: "Co-Founder",
        employmentPeriod: {
          start: "2014",
          end: "2020",
        },
        employmentType: "Full-time",
        icon: "business",
        description:
          "Co-founder and lead developer for Proton. Hired and scaled from 0-200 employees. Raised funding, and built core features for the Proton Mail product.",
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-fullstack-developer",
        title: "Fullstack Developer",
        employmentPeriod: {
          start: "2005",
          end: "2014",
        },
        employmentType: "Self-employed",
        icon: "business",
        description:
          "Freelance fullstack development for 40 clients over 9 years.",
      },
    ],
  },
];
