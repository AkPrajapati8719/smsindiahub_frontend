export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "sms" | "whatsapp" | "dlt" | "api" | "billing";
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: "what-is-bulk-sms",
    question: "What is Bulk SMS and how does it benefit my business?",
    answer: "Bulk SMS is a high-volume messaging service provided by telecom aggregators like SMSIndiaHub that allows businesses to instantly send promotional marketing offers, transactional alerts, notifications, and OTP verification codes to thousands or millions of mobile recipients simultaneously via web portals or developer APIs.",
    category: "general",
  },
  {
    id: "what-is-dlt-registration",
    question: "What is TRAI DLT registration and is it mandatory in India?",
    answer: "DLT (Distributed Ledger Technology) is a blockchain-based registration framework mandated by TRAI (Telecom Regulatory Authority of India) to prevent spam and protect consumer privacy. Every business entity sending SMS or Voice broadcasts to Indian mobile numbers must register as a Principal Entity (PE), approve their Sender Headers (e.g. SMSHUB), register their Content Templates, and complete PE-TM chain binding.",
    category: "dlt",
  },
  {
    id: "promotional-vs-transactional",
    question: "What is the difference between Promotional and Transactional SMS?",
    answer: "Promotional SMS is meant for advertising, offers, and discounts; it is delivered only to Non-DND numbers between 10:00 AM and 9:00 PM with random numeric sender IDs. Transactional SMS is used for critical alerts, invoices, and service updates; it delivers 24/7 to both DND and Non-DND numbers using an approved 6-character alphabetic Sender ID (e.g., SMSHUB).",
    category: "sms",
  },
  {
    id: "how-fast-is-otp-delivery",
    question: "How fast is SMSIndiaHub's OTP SMS delivery speed?",
    answer: "Our OTP gateway operates on dedicated priority routes with direct Tier-1 telecom operator binds, delivering authentication OTPs in sub-2.5 to 3 seconds with automated multi-operator fallback routing and 99.99% uptime SLAs.",
    category: "sms",
  },
  {
    id: "credit-validity",
    question: "What is the validity of purchased SMS and Voice credits?",
    answer: "All Bulk SMS (Promotional, Transactional, OTP) and Voice Broadcasting credit packages purchased from SMSIndiaHub come with 100% Lifetime Unlimited Validity. Your credits never expire until they are consumed.",
    category: "billing",
  },
  {
    id: "whatsapp-business-green-tick",
    question: "Can SMSIndiaHub help our business get the official WhatsApp Green Tick badge?",
    answer: "Yes. As an official Meta WhatsApp solution partner, SMSIndiaHub provides end-to-end assistance in setting up your WhatsApp Business API, verifying your Meta Business Manager, registering interactive message templates, and applying for the official Meta Verified Green Tick badge.",
    category: "whatsapp",
  },
  {
    id: "api-integration-support",
    question: "Which programming languages and platforms are supported by your SMS API?",
    answer: "Our RESTful HTTP API is platform-agnostic and supports all major programming languages including Node.js / JavaScript, Python, PHP, Java, C# .NET, Ruby, Go, and cURL. We also offer pre-built plugins for Microsoft Excel, Shopify, WooCommerce, Magento, and Zapier.",
    category: "api",
  },
  {
    id: "refund-and-failed-sms",
    question: "What happens if an SMS fails to deliver due to an invalid or switched-off number?",
    answer: "For promotional and transactional routes, non-delivered credits (due to blocked DND numbers or carrier delivery failures) are automatically audited, and detailed delivery status logs (DLR) are available in your portal analytics.",
    category: "billing",
  },
  {
    id: "reseller-panel-capabilities",
    question: "How does the White-Label Reseller Panel work?",
    answer: "Our white-label reseller program gives you a turnkey portal deployed under your own brand domain, logo, and custom branding. You can create unlimited sub-accounts, set your own customized pricing margins, recharge user credits, and integrate your own online payment gateway.",
    category: "general",
  },
];
