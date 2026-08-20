export interface IndustryItem {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  solutions: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "real-estate",
    title: "Real Estate & Builders",
    tagline: "Instant Lead Follow-Up & Virtual Site Visit Bookings",
    icon: "Building2",
    description:
      "Automate Facebook & Google ad lead qualification, send interactive floor plans via WhatsApp, and schedule VIP site tours with automated voice reminders.",
    solutions: [
      "Click-to-WhatsApp Property Brochures",
      "Automated Site Visit Voice Reminders",
      "New Project Launch Promotional SMS",
      "IndiaMART/MagicBricks Lead Webhooks",
    ],
  },
  {
    slug: "education-and-schools",
    title: "Education, Schools & Universities",
    tagline: "Smart Parent Notifications, Attendance & Fee Alerts",
    icon: "GraduationCap",
    description:
      "Keep parents informed with 24/7 DND-exempt transactional SMS for daily attendance, homework alerts, exam scorecards, and fee due reminders.",
    solutions: [
      "Automated Daily Attendance SMS",
      "Fee Overdue Payment Gateway Links",
      "Exam Timetable & Result Announcements",
      "Parent-Teacher Meeting Voice Calls",
    ],
  },
  {
    slug: "healthcare-and-hospitals",
    title: "Healthcare & Hospitals",
    tagline: "Doctor Appointments, Prescription Links & Lab Reports",
    icon: "HeartPulse",
    description:
      "Reduce patient no-shows with automated WhatsApp appointment confirmations, lab report download links, and critical emergency doctor alerts.",
    solutions: [
      "WhatsApp Lab Report Delivery",
      "Doctor Appointment Booking Bot",
      "Emergency Doctor On-Call Broadcasts",
      "Prescription & Medication Reminders",
    ],
  },
  {
    slug: "banking-and-finance",
    title: "Banking, BFSI & NBFCs",
    tagline: "Sub-2.5s Transaction OTPs & EMI Due Notices",
    icon: "Landmark",
    description:
      "Bank-grade high-security infrastructure for debit/credit OTPs, loan approval notices, policy renewals, and account balance inquiry missed calls.",
    solutions: [
      "High-Priority 2FA Authentication OTPs",
      "EMI Payment Link Generation",
      "Fraud Alert Instant Broadcasts",
      "Missed Call Account Balance Check",
    ],
  },
  {
    slug: "ecommerce-and-retail",
    title: "E-Commerce & D2C Retail",
    tagline: "Abandoned Cart Recovery & Shipping Tracking",
    icon: "ShoppingBag",
    description:
      "Maximize conversion with automated WhatsApp checkout links, order dispatched notifications with live tracking, and flash sale marketing bursts.",
    solutions: [
      "Abandoned Cart Recovery Flows",
      "Live Courier Tracking Notifications",
      "Cash-on-Delivery (COD) Verification OTP",
      "Seasonal Discount Promotional Campaigns",
    ],
  },
  {
    slug: "automotive",
    title: "Automobile Dealerships & Service",
    tagline: "Test Drive Bookings & Service Due Alerts",
    icon: "Car",
    description:
      "Drive showroom footfall and after-sales service revenue with automated car service reminders, test drive scheduling bots, and warranty expiration alerts.",
    solutions: [
      "Automated Car Service Due Reminders",
      "WhatsApp Test Drive Booking Bot",
      "Vehicle Insurance Expiry Alerts",
      "New Car Model Launch Broadcasts",
    ],
  },
  {
    slug: "tours-and-travels",
    title: "Tours, Travel & Hospitality",
    tagline: "Holiday Package Offers, Ticket Confirmation & Itineraries",
    icon: "Plane",
    description:
      "Broadcast seasonal holiday deals, send instant PNR & hotel voucher links on WhatsApp, and capture travel inquiries via zero-cost missed call numbers.",
    solutions: [
      "Flight & Hotel Booking Confirmations",
      "Seasonal Tour Package Broadcasts",
      "Automated WhatsApp Travel Assistant",
      "Payment Due & Visa Status Alerts",
    ],
  },
  {
    slug: "hotels-and-restaurants",
    title: "Hotels, Resorts & Restaurants",
    tagline: "Table Reservations, Room Booking & Food Offers",
    icon: "Utensils",
    description:
      "Drive weekend dining footfall with special discount promo codes, automate room booking confirmations, and collect instant guest feedback via SMS links.",
    solutions: [
      "Table & Room Reservation SMS",
      "Weekend Special Offer Broadcasts",
      "Instant Customer Feedback Survey Links",
      "Loyalty Reward Points Notifications",
    ],
  },
  {
    slug: "jewellery-shops",
    title: "Jewellery Showrooms & Retail",
    tagline: "Festive Gold Scheme Notifications & VIP Preview Invites",
    icon: "Sparkles",
    description:
      "Invite VIP clients to new collection launches, send monthly gold savings scheme payment reminders, and announce Dhanteras & Akshaya Tritiya offers.",
    solutions: [
      "Monthly Gold Scheme Payment Reminders",
      "VIP Exhibition & Launch Invites",
      "Daily Gold Rate Update SMS",
      "Festive Cashback & Discount Alerts",
    ],
  },
  {
    slug: "insurance-sector",
    title: "Insurance Companies & Agents",
    tagline: "Policy Renewal Notices, Claim Status & OTP Login",
    icon: "ShieldAlert",
    description:
      "Ensure zero policy lapses by sending automated renewal reminder links with direct payment gateways and real-time claim settlement status updates.",
    solutions: [
      "Policy Expiry & Premium Due Alerts",
      "Instant Claim Settlement Notifications",
      "Digital Policy Document Download Links",
      "Agent Onboarding & Verification OTPs",
    ],
  },
  {
    slug: "political-parties",
    title: "Political Parties & Election Campaigns",
    tagline: "Mass Voter Outreach, Voice Broadcasts & Volunteer Sync",
    icon: "Users",
    description:
      "Reach millions of constituency voters in minutes with regional language promotional SMS, recorded leader voice calls, and survey poll bots.",
    solutions: [
      "Leader Recorded Voice Call Broadcasts",
      "Constituency-Wise Manifesto SMS",
      "Volunteer Coordination & Rally Alerts",
      "Live Voter Feedback & Survey Numbers",
    ],
  },
  {
    slug: "beauty-parlours-saloons",
    title: "Beauty Parlours, Salons & Spas",
    tagline: "Appointment Scheduling, Package Deals & Loyalty Points",
    icon: "Scissors",
    description:
      "Keep salon chairs booked with appointment reminders, birthday discounts, bridal makeover package promotions, and membership points updates.",
    solutions: [
      "Appointment Confirmation & Reminders",
      "Bridal & Festive Package Promotions",
      "Birthday & Anniversary Discount Codes",
      "Prepaid Package Balance Alerts",
    ],
  },
  {
    slug: "couriers-and-logistics",
    title: "Couriers, Logistics & Transporters",
    tagline: "Live Consignment Tracking, OTP Delivery & Dispatch Notices",
    icon: "Truck",
    description:
      "Keep shippers and consignees updated with automated dispatch alerts, live GPS tracking links, and secure contactless delivery OTP verification.",
    solutions: [
      "Out-for-Delivery OTP Verification",
      "Real-Time Consignment Tracking Links",
      "Shipment Delay & Weather Advisory SMS",
      "COD Remittance Updates for Vendors",
    ],
  },
  {
    slug: "astrologers",
    title: "Astrologers & Spiritual Services",
    tagline: "Consultation Bookings, Daily Horoscope & Pooja Alerts",
    icon: "Sun",
    description:
      "Automate appointment bookings for astrology consultations, send daily horoscope notifications, and notify devotees about upcoming religious poojas.",
    solutions: [
      "Daily Horoscope WhatsApp Updates",
      "Consultation Slot Confirmation SMS",
      "Pooja & Ritual Invitation Alerts",
      "Virtual Video Consultation Links",
    ],
  },
  {
    slug: "marketing-agencies",
    title: "Marketing & Advertising Agencies",
    tagline: "White-Label Reseller Portals & High-Throughput APIs",
    icon: "Zap",
    description:
      "Empower your agency clients with your own branded SMS and WhatsApp portal, wholesale volume pricing, and developer REST APIs.",
    solutions: [
      "100% White-Label Portal with Custom Domain",
      "Sub-Account Creation & Credit Allocation",
      "High-Throughput Multi-Carrier APIs",
      "Real-Time Detailed Delivery Analytics",
    ],
  },
];
