export interface PricingTier {
  volume: string;
  minUnits: number;
  maxUnits: number;
  pricePerUnit: number; // in INR
  validity: string;
  popular?: boolean;
}

export interface ServicePricingPlan {
  id: string;
  name: string;
  unitName: string;
  description: string;
  dltRequirement: string;
  speed: string;
  dndDelivery: boolean;
  tiers: PricingTier[];
  features: string[];
}

export const PRICING_PLANS: Record<string, ServicePricingPlan> = {
  promotional: {
    id: "promotional",
    name: "Promotional Bulk SMS",
    unitName: "SMS",
    description: "Ideal for marketing campaigns, festive offers, and business promotions (Delivered 10 AM to 9 PM).",
    dltRequirement: "DLT Registration Required",
    speed: "5000+ SMS / sec",
    dndDelivery: false,
    tiers: [
      { volume: "10,000 to 25,000", minUnits: 10000, maxUnits: 25000, pricePerUnit: 0.16, validity: "Unlimited" },
      { volume: "25,001 to 50,000", minUnits: 25001, maxUnits: 50000, pricePerUnit: 0.14, validity: "Unlimited" },
      { volume: "50,001 to 1,00,000", minUnits: 50001, maxUnits: 100000, pricePerUnit: 0.12, validity: "Unlimited", popular: true },
      { volume: "1,00,001 to 5,00,000", minUnits: 100001, maxUnits: 500000, pricePerUnit: 0.10, validity: "Unlimited" },
      { volume: "5,00,001+", minUnits: 500001, maxUnits: 10000000, pricePerUnit: 0.085, validity: "Unlimited" },
    ],
    features: [
      "Lifetime unlimited validity",
      "Dynamic personalized SMS tags",
      "Real-time operator delivery reports",
      "HTTP REST API & Excel plugin included",
      "100% money-back guarantee for failed SMS",
      "Free DLT assistance",
    ],
  },
  transactional: {
    id: "transactional",
    name: "Transactional SMS",
    unitName: "SMS",
    description: "24x7 delivery to all mobile numbers including DND for order updates, invoices, and alerts.",
    dltRequirement: "DLT Approved Sender ID Required",
    speed: "8000+ SMS / sec",
    dndDelivery: true,
    tiers: [
      { volume: "10,000 to 25,000", minUnits: 10000, maxUnits: 25000, pricePerUnit: 0.18, validity: "Unlimited" },
      { volume: "25,001 to 50,000", minUnits: 25001, maxUnits: 50000, pricePerUnit: 0.16, validity: "Unlimited" },
      { volume: "50,001 to 1,00,000", minUnits: 50001, maxUnits: 100000, pricePerUnit: 0.135, validity: "Unlimited", popular: true },
      { volume: "1,00,001 to 5,00,000", minUnits: 100001, maxUnits: 500000, pricePerUnit: 0.115, validity: "Unlimited" },
      { volume: "5,00,001+", minUnits: 500001, maxUnits: 10000000, pricePerUnit: 0.095, validity: "Unlimited" },
    ],
    features: [
      "24/7/365 instant delivery",
      "100% delivery on DND and Non-DND numbers",
      "6-Character alphabetic Sender ID (e.g. SMSHUB)",
      "High-priority SMPP and REST API access",
      "Instant webhook callbacks",
      "Unlimited validity credits",
    ],
  },
  otp: {
    id: "otp",
    name: "OTP & 2FA High-Priority SMS",
    unitName: "OTP",
    description: "Sub-3 second delivery with dedicated operator pipes for logins, banking OTPs, and password resets.",
    dltRequirement: "Pre-approved DLT OTP Template",
    speed: "Sub-2.5 sec latency",
    dndDelivery: true,
    tiers: [
      { volume: "10,000 to 25,000", minUnits: 10000, maxUnits: 25000, pricePerUnit: 0.20, validity: "Unlimited" },
      { volume: "25,001 to 50,000", minUnits: 25001, maxUnits: 50000, pricePerUnit: 0.17, validity: "Unlimited" },
      { volume: "50,001 to 1,00,000", minUnits: 50001, maxUnits: 100000, pricePerUnit: 0.14, validity: "Unlimited", popular: true },
      { volume: "1,00,001 to 5,00,000", minUnits: 100001, maxUnits: 500000, pricePerUnit: 0.12, validity: "Unlimited" },
      { volume: "5,00,001+", minUnits: 500001, maxUnits: 10000000, pricePerUnit: 0.105, validity: "Unlimited" },
    ],
    features: [
      "Guaranteed sub-3 second delivery SLA",
      "Automatic multi-operator fallback routing",
      "Dedicated high-throughput VIP queues",
      "Comprehensive latency & delivery analytics",
      "SDKs for Node.js, Python, PHP, Java, C#",
      "99.99% infrastructure uptime SLA",
    ],
  },
  voice: {
    id: "voice",
    name: "Outbound Voice Broadcasting",
    unitName: "Call (30s)",
    description: "Automated pre-recorded voice calls with DTMF keypress capture and multilingual text-to-speech.",
    dltRequirement: "No DLT for Voice Calls",
    speed: "10,000 simultaneous calls",
    dndDelivery: false,
    tiers: [
      { volume: "5,000 to 15,000", minUnits: 5000, maxUnits: 15000, pricePerUnit: 0.25, validity: "Unlimited" },
      { volume: "15,001 to 50,000", minUnits: 15001, maxUnits: 50000, pricePerUnit: 0.20, validity: "Unlimited" },
      { volume: "50,001 to 1,00,000", minUnits: 50001, maxUnits: 100000, pricePerUnit: 0.16, validity: "Unlimited", popular: true },
      { volume: "1,00,001+", minUnits: 100001, maxUnits: 10000000, pricePerUnit: 0.13, validity: "Unlimited" },
    ],
    features: [
      "Charge only on successful call pick-up (Zero deduction on unanswered calls)",
      "Interactive DTMF response recording",
      "Live call transfer / agent patch",
      "Upload MP3 / WAV audio or use AI text-to-speech",
      "Scheduled voice call broadcasting",
      "Detailed call duration reports",
    ],
  },
  whatsapp: {
    id: "whatsapp",
    name: "WhatsApp Business API",
    unitName: "Conversation",
    description: "Official Meta Cloud API with green-tick badge support, rich carousels, and automated chatbot flows.",
    dltRequirement: "Meta Business Manager Verification",
    speed: "Instant Webhooks",
    dndDelivery: true,
    tiers: [
      { volume: "Pay As You Go", minUnits: 1, maxUnits: 10000000, pricePerUnit: 0.75, validity: "Monthly / Prepaid", popular: true },
    ],
    features: [
      "Meta Official Green Tick badge assistance",
      "Unlimited broadcast marketing campaigns",
      "Interactive Quick Replies & CTA buttons",
      "Shared multi-agent team inbox",
      "Visual drag-and-drop chatbot builder",
      "No setup fee on annual plans",
    ],
  },
};
