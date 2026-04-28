import {
  BarChart3,
  Bot,
  CheckCircle2,
  Gauge,
  LineChart,
  Magnet,
  MousePointerClick,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "SEOmore", href: "#seomore" },
  { label: "Socials", href: "#socials" },
  { label: "Results", href: "#case-studies" },
  { label: "Offer", href: "#offer" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const contact = {
  email: "seomoretechies@gmail.com",
  whatsappDisplay: "+91 8340795705",
  whatsappHref: "https://wa.me/918340795705?text=I%20am%20interested%20in%20your%20services.",
  workWhatsappHref: "https://wa.me/918340795705?text=I%20want%20to%20work%20with%20you.",
};

export const socialLinks = [
  {
    platform: "LinkedIn",
    handle: "rohit-das99",
    href: "https://www.linkedin.com/in/rohit-das99/",
    brandClass: "from-[#0A66C2] to-[#003B73]",
    ringClass: "border-[#0A66C2]/35 bg-[#0A66C2]/10",
    description: "Strategy insights, professional updates, and digital marketing thinking.",
  },
  {
    platform: "YouTube",
    handle: "@rohit_das99",
    href: "https://www.youtube.com/@rohit_das99",
    brandClass: "from-[#FF0000] to-[#7F0000]",
    ringClass: "border-[#FF0000]/35 bg-[#FF0000]/10",
    description: "Practical marketing videos, tutorials, campaign breakdowns, and growth ideas.",
  },
  {
    platform: "Facebook",
    handle: "SEOmore",
    href: "https://www.facebook.com/SEOmore1",
    brandClass: "from-[#1877F2] to-[#0A3C88]",
    ringClass: "border-[#1877F2]/35 bg-[#1877F2]/10",
    description: "Agency updates, service highlights, client education, and community content.",
  },
  {
    platform: "Instagram",
    handle: "@seomore1",
    href: "https://www.instagram.com/seomore1/",
    brandClass: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    ringClass: "border-[#DD2A7B]/35 bg-[#DD2A7B]/10",
    description: "Quick tips, proof points, behind-the-scenes work, and digital growth content.",
  },
];

export const agencyHighlights = [
  "Founder-led digital marketing agency focused on measurable business growth.",
  "Services across SEO, Google Ads, performance marketing, landing pages, CRO, and automation.",
  "Built for founders and businesses that want clearer tracking, better lead quality, and scalable acquisition.",
];

export const painPoints = [
  {
    title: "Ad spend disappears without clear ROI",
    description: "Campaigns run every month, but reporting never connects spend to real sales conversations.",
    icon: BarChart3,
  },
  {
    title: "Lead quality is inconsistent",
    description: "Your team wastes hours chasing unqualified enquiries instead of serious buyers.",
    icon: Magnet,
  },
  {
    title: "Tracking gaps hide what is working",
    description: "Broken attribution makes it hard to know which channels, pages, and keywords deserve budget.",
    icon: Gauge,
  },
  {
    title: "Landing pages leak conversions",
    description: "Traffic arrives, but weak messaging and friction stop visitors from becoming leads.",
    icon: MousePointerClick,
  },
];

export const services = [
  {
    title: "Google Ads Lead Generation",
    description: "Build intent-led campaigns that attract high-value prospects and lower wasted clicks.",
    icon: Target,
  },
  {
    title: "SEO & Organic Growth",
    description: "Increase qualified search demand with technical clarity, content strategy, and authority.",
    icon: Search,
  },
  {
    title: "Funnel & Landing Page Optimization",
    description: "Turn more visitors into enquiries with sharper offers, page flow, and trust signals.",
    icon: Workflow,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Find the friction in your journey and improve the numbers that affect revenue.",
    icon: TrendingUp,
  },
  {
    title: "Marketing Automation",
    description: "Route, nurture, and qualify leads faster with practical CRM and automation systems.",
    icon: Bot,
  },
];

export const stats = [
  { value: "5+", label: "Years of performance marketing experience" },
  { value: "120+", label: "Campaigns audited, built, or optimized" },
  { value: "18K+", label: "Qualified leads generated across funnels" },
  { value: "40%", label: "Average CPL reduction in focused optimizations" },
];

export const trustFactors = [
  { value: "Founder-led", label: "You work directly with Rohit, not a handoff-heavy team." },
  { value: "Tracking first", label: "Campaigns are judged by leads, calls, CPL, and conversion quality." },
  { value: "No fluff", label: "Clear recommendations, plain reporting, and priority-based execution." },
  { value: "Full funnel", label: "Ads, SEO, landing pages, CRM, follow-up, and CRO are connected." },
];

export const noBrainerOffer = [
  "Free growth and tracking audit before any paid engagement.",
  "Clear 30-day action plan with the highest-impact fixes first.",
  "WhatsApp access for faster communication during active projects.",
  "Landing page and lead quality review included with campaign strategy.",
];

export const caseStudies = [
  {
    industry: "B2B Services",
    title: "Reduced cost per lead by 40% in 60 days",
    problem: "The account was spending aggressively but attracting broad, low-intent enquiries.",
    strategy: "Rebuilt keyword intent, tightened conversion tracking, and redesigned the landing page message.",
    result: "40% lower CPL with 2.3x more sales-qualified leads.",
  },
  {
    industry: "Local High-Ticket Service",
    title: "Built a predictable lead engine from paid search",
    problem: "Inbound demand was inconsistent and the team could not forecast monthly lead flow.",
    strategy: "Segmented campaigns by service intent, added call tracking, and created remarketing journeys.",
    result: "3.1x increase in qualified calls within the first quarter.",
  },
  {
    industry: "Education & Training",
    title: "Improved enrolment funnel conversion by 58%",
    problem: "Traffic volume was healthy, but landing page clarity and follow-up speed were weak.",
    strategy: "Reworked page hierarchy, added proof-led CTAs, and automated lead qualification.",
    result: "58% higher conversion rate and faster counsellor response times.",
  },
];

export const testimonials = [
  {
    quote:
      "Rohit brought structure to our marketing. We finally know what channels generate serious leads and where to scale.",
    name: "Amit Verma",
    role: "Founder, B2B Consulting Firm",
  },
  {
    quote:
      "The difference was immediate. Cleaner tracking, stronger landing pages, and better quality enquiries for our sales team.",
    name: "Neha Kapoor",
    role: "Growth Lead, Training Company",
  },
  {
    quote:
      "He thinks beyond campaigns. Rohit helped us connect ads, SEO, CRM, and follow-up into one growth system.",
    name: "Rahul Mehta",
    role: "Director, Local Services Brand",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Audit",
    description: "Diagnose campaigns, tracking, landing pages, funnel gaps, and growth constraints.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Map budget, channels, offers, audience intent, measurement, and conversion priorities.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Launch the campaigns, pages, tracking, and automation needed for clean acquisition.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Improve targeting, creative, page flow, lead routing, and budget allocation weekly.",
  },
  {
    step: "05",
    title: "Scaling",
    description: "Expand what works while protecting lead quality, margins, and sales capacity.",
  },
];

export const benefits = [
  { title: "Higher ROI", description: "Invest budget where the data proves demand and revenue potential.", icon: LineChart },
  { title: "Better lead quality", description: "Attract prospects with stronger intent, fit, and urgency.", icon: ShieldCheck },
  { title: "Scalable growth", description: "Move from one-off campaigns to a repeatable acquisition system.", icon: Zap },
  { title: "Predictable results", description: "Track the numbers that make marketing easier to forecast.", icon: CheckCircle2 },
];

export const faqs = [
  {
    question: "How much does it cost to work with Rohit?",
    answer:
      "Pricing depends on scope, ad spend, funnel complexity, and whether you need strategy, execution, or both. The first call is used to understand fit and recommend the right engagement.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "Most clients see useful signal within the first 30 days, with stronger performance patterns emerging after 60 to 90 days of testing and optimization.",
  },
  {
    question: "Which industries are the best fit?",
    answer:
      "The work is strongest for service businesses, B2B companies, education brands, local high-ticket services, and lead-generation businesses with clear revenue goals.",
  },
  {
    question: "Do you guarantee leads or revenue?",
    answer:
      "No ethical marketer can guarantee market response, but Rohit builds measurable systems, improves conversion quality, and makes decisions from clear performance data.",
  },
  {
    question: "Will I get regular communication?",
    answer:
      "Yes. Expect clear reporting, priority actions, and direct recommendations so you always know what changed, why it changed, and what comes next.",
  },
  {
    question: "Can you work with my existing website and CRM?",
    answer:
      "Yes. The process begins by auditing what you already have, then improving the highest-leverage parts before adding new tools or pages.",
  },
  {
    question: "I am just starting my business. Can you help me go online?",
    answer:
      "Yes. Rohit can help you decide what to build first: a simple website, landing page, Google Business Profile, tracking setup, SEO foundation, or lead generation campaign depending on your service and budget.",
  },
  {
    question: "Do I need a big ad budget to start?",
    answer:
      "No. A smaller budget can still produce useful learning if the offer, targeting, landing page, and tracking are set up properly. The goal is to start controlled, find signal, and scale only what works.",
  },
  {
    question: "What is quality lead generation?",
    answer:
      "Quality lead generation means attracting people who fit your service, have real intent, can afford your offer, and are likely to respond. It is not just about getting more form fills.",
  },
  {
    question: "Can you help if I am getting leads but they are not converting?",
    answer:
      "Yes. That usually requires checking keyword intent, ad copy, landing page promises, lead forms, sales follow-up speed, and qualification filters. Better leads often come from fixing the whole journey.",
  },
  {
    question: "Should I choose SEO or paid ads first?",
    answer:
      "If you need leads quickly, paid ads can create faster signal. If you want long-term demand and authority, SEO is important. Many businesses need a practical mix of both, based on cash flow and competition.",
  },
  {
    question: "Can you create landing pages for my campaigns?",
    answer:
      "Yes. Landing page strategy, messaging, CTA flow, trust signals, and CRO are part of the growth system because traffic without conversion wastes budget.",
  },
  {
    question: "How will I know whether marketing is working?",
    answer:
      "You should track cost per lead, lead quality, calls, form fills, conversion rate, source, follow-up status, and sales outcomes. Rohit helps make those numbers visible and useful.",
  },
  {
    question: "Can SEOmore handle both strategy and execution?",
    answer:
      "Yes. SEOmore can support audits, strategy, campaigns, SEO, landing pages, CRO, reporting, and automation depending on what the business needs most.",
  },
];
