export interface CityItem {
  slug: string;
  name: string;
  state: string;
  region: string;
  description: string;
}

export const CITIES_DATA: CityItem[] = [
  { slug: "bulk-sms-delhi", name: "Delhi NCR", state: "Delhi", region: "North India", description: "Top-tier Bulk SMS & WhatsApp API gateway services for startups, enterprises, and retail brands across New Delhi, Gurgaon, Noida, and Faridabad." },
  { slug: "bulk-sms-mumbai", name: "Mumbai", state: "Maharashtra", region: "West India", description: "High-throughput financial OTP SMS and enterprise transactional communication solutions for Mumbai and Thane financial hubs." },
  { slug: "bulk-sms-bangalore", name: "Bangalore", state: "Karnataka", region: "South India", description: "Developer-first cloud communication APIs, WhatsApp bots, and OTP infrastructure for tech startups and tech enterprises in Bengaluru." },
  { slug: "bulk-sms-hyderabad", name: "Hyderabad", state: "Telangana", region: "South India", description: "Fast and reliable SMS gateway services, voice broadcasting, and lead automation for Hyderabad businesses and pharma hubs." },
  { slug: "bulk-sms-chennai", name: "Chennai", state: "Tamil Nadu", region: "South India", description: "Enterprise CPaaS solutions, Tamil Unicode multi-lingual SMS, and WhatsApp marketing for Chennai automotive and manufacturing giants." },
  { slug: "bulk-sms-kolkata", name: "Kolkata", state: "West Bengal", region: "East India", description: "Cost-effective promotional SMS, transactional routes, and missed call alert numbers for businesses across Kolkata and East India." },
  { slug: "bulk-sms-pune", name: "Pune", state: "Maharashtra", region: "West India", description: "Automated customer engagement tools, college notification SMS, and manufacturing alerts for Pune IT and automotive corridors." },
  { slug: "bulk-sms-ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "West India", description: "Commercial Bulk SMS marketing, DLT registration support, and WhatsApp catalog solutions for Ahmedabad trade and textile hubs." },
  { slug: "bulk-sms-jaipur", name: "Jaipur", state: "Rajasthan", region: "North India", description: "Jewellery showroom promotions, tourism WhatsApp bots, and school SMS alerts across Jaipur and Rajasthan." },
  { slug: "bulk-sms-lucknow", name: "Lucknow", state: "Uttar Pradesh", region: "North India", description: "State-wide government notification pipelines, coaching institute SMS, and bulk promotional broadcasts in Lucknow, Kanpur, and Varanasi." },
  { slug: "bulk-sms-indore", name: "Indore", state: "Madhya Pradesh", region: "Central India", description: "Direct branch presence in Indore delivering instant business SMS, voice calls, and white-label reseller panels across Central India." },
  { slug: "bulk-sms-bhopal", name: "Bhopal", state: "Madhya Pradesh", region: "Central India", description: "Corporate headquarters location in Bhopal providing direct carrier binds, 24/7 dedicated support, and enterprise CPaaS services." },
  { slug: "bulk-sms-chandigarh", name: "Chandigarh", state: "Punjab / Haryana", region: "North India", description: "High-priority OTP routes, student admission SMS, and corporate messaging solutions for Chandigarh, Mohali, and Panchkula." },
  { slug: "bulk-sms-surat", name: "Surat", state: "Gujarat", region: "West India", description: "Diamond, textile, and export enterprise SMS marketing, transactional order updates, and official WhatsApp Business API in Surat." },
  { slug: "bulk-sms-nagpur", name: "Nagpur", state: "Maharashtra", region: "Central India", description: "Logistics tracking SMS, healthcare appointment reminders, and promotional marketing for Nagpur and Vidarbha region." },
  { slug: "bulk-sms-patna", name: "Patna", state: "Bihar", region: "East India", description: "Educational institute alerts, retail promotions, and high-volume marketing SMS gateways for Patna and Bihar enterprises." },
  { slug: "bulk-sms-vadodara", name: "Vadodara", state: "Gujarat", region: "West India", description: "Industrial notifications, chemical plant alerts, and retail WhatsApp marketing solutions across Vadodara." },
  { slug: "bulk-sms-ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", region: "North India", description: "Fast delivery promotional SMS, school notifications, and real estate marketing automation in Ghaziabad NCR." },
  { slug: "bulk-sms-ludhiana", name: "Ludhiana", state: "Punjab", region: "North India", description: "Apparel manufacturing updates, export billing SMS, and commercial promotion campaigns for Ludhiana business owners." },
  { slug: "bulk-sms-agra", name: "Agra", state: "Uttar Pradesh", region: "North India", description: "Tourism promotions, hospitality WhatsApp chatbots, and footwear industry transactional SMS alerts in Agra." },
  { slug: "bulk-sms-nashik", name: "Nashik", state: "Maharashtra", region: "West India", description: "Agriculture market alerts, winery tourism bots, and automotive manufacturing SMS notifications across Nashik." },
  { slug: "bulk-sms-faridabad", name: "Faridabad", state: "Haryana", region: "North India", description: "Engineering enterprise messaging, industrial OTP gateways, and CRM lead capture automation for Faridabad NCR." },
  { slug: "bulk-sms-meerut", name: "Meerut", state: "Uttar Pradesh", region: "North India", description: "Sports goods manufacturing promotions, educational SMS alerts, and retail marketing broadcasts in Meerut." },
  { slug: "bulk-sms-rajkot", name: "Rajkot", state: "Gujarat", region: "West India", description: "Hardware manufacturing alerts, auto parts enterprise SMS, and commercial promotional routes across Rajkot." },
  { slug: "bulk-sms-varanasi", name: "Varanasi", state: "Uttar Pradesh", region: "North India", description: "Tourism notifications, handloom promotion alerts, and educational transactional messaging in Varanasi." },
  { slug: "bulk-sms-srinagar", name: "Srinagar", state: "Jammu and Kashmir", region: "North India", description: "Handicrafts marketing, tourism WhatsApp booking bots, and hospital SMS alert systems for Srinagar and Kashmir valley." },
  { slug: "bulk-sms-aurangabad", name: "Aurangabad (Chhatrapati Sambhajinagar)", state: "Maharashtra", region: "West India", description: "Pharmaceutical alerts, automotive manufacturing notifications, and tourism SMS services in Aurangabad." },
  { slug: "bulk-sms-dhanbad", name: "Dhanbad", state: "Jharkhand", region: "East India", description: "Mining industrial notifications, coaching institute SMS, and corporate communication solutions in Dhanbad." },
  { slug: "bulk-sms-amritsar", name: "Amritsar", state: "Punjab", region: "North India", description: "Hotel reservation SMS, tourism bots, and retail business promotional marketing broadcasts in Amritsar." },
  { slug: "bulk-sms-navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", region: "West India", description: "IT park notification pipelines, seaport logistics tracking SMS, and real estate lead automation in Navi Mumbai." },
  { slug: "bulk-sms-allahabad", name: "Prayagraj (Allahabad)", state: "Uttar Pradesh", region: "North India", description: "Government recruitment notifications, coaching institute SMS alerts, and legal firm transactional updates in Prayagraj." },
  { slug: "bulk-sms-ranchi", name: "Ranchi", state: "Jharkhand", region: "East India", description: "State department alerts, mining corporate messaging, and educational institute notification systems in Ranchi." },
  { slug: "bulk-sms-howrah", name: "Howrah", state: "West Bengal", region: "East India", description: "Industrial manufacturing SMS notifications, transport logistics alerts, and wholesale trade marketing in Howrah." },
  { slug: "bulk-sms-coimbatore", name: "Coimbatore", state: "Tamil Nadu", region: "South India", description: "Textile mill communication, pump manufacturing alerts, and healthcare SMS appointment bots in Coimbatore." },
  { slug: "bulk-sms-jabalpur", name: "Jabalpur", state: "Madhya Pradesh", region: "Central India", description: "Defense establishment notifications, educational institution SMS alerts, and retail marketing in Jabalpur." },
  { slug: "bulk-sms-gwalior", name: "Gwalior", state: "Madhya Pradesh", region: "Central India", description: "Heritage tourism promotions, educational institute updates, and commercial trade broadcasts in Gwalior." },
  { slug: "bulk-sms-vijayawada", name: "Vijayawada", state: "Andhra Pradesh", region: "South India", description: "Commercial wholesale marketing, transport logistics SMS, and agricultural trade alert systems in Vijayawada." },
  { slug: "bulk-sms-jodhpur", name: "Jodhpur", state: "Rajasthan", region: "North India", description: "Handicraft exports messaging, tourism WhatsApp bots, and educational institution notifications in Jodhpur." },
  { slug: "bulk-sms-madurai", name: "Madurai", state: "Tamil Nadu", region: "South India", description: "Temple tourism announcements, textile trade SMS marketing, and hospital appointment alerts in Madurai." },
  { slug: "bulk-sms-raipur", name: "Raipur", state: "Chhattisgarh", region: "Central India", description: "Steel and mining enterprise notifications, government alerts, and commercial retail broadcasts in Raipur." },
  { slug: "bulk-sms-kota", name: "Kota", state: "Rajasthan", region: "North India", description: "Premier coaching institute student attendance, test results SMS, and parent notification pipelines in Kota." },
  { slug: "bulk-sms-guwahati", name: "Guwahati", state: "Assam", region: "Northeast India", description: "Gateway to Northeast India providing tea auction notifications, tourism bots, and enterprise messaging in Guwahati." },
  { slug: "bulk-sms-kanpur", name: "Kanpur", state: "Uttar Pradesh", region: "North India", description: "Leather industry exports updates, wholesale market promotions, and educational institute alerts in Kanpur." },
  { slug: "bulk-sms-bhubaneswar", name: "Bhubaneswar", state: "Odisha", region: "East India", description: "IT hub notifications, smart city citizen alerts, and healthcare appointment booking SMS in Bhubaneswar." },
];
