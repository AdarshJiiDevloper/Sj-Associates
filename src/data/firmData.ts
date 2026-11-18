export interface PracticeAreaItem {
  number: string;
  id: string;
  title: string;
  shortDesc: string;
  scope: string[];
  forums: string[];
}

export interface CounselMember {
  name: string;
  designation: string;
  barEnrollment: string;
  practiceFocus: string;
  bio: string;
  isPrincipal?: boolean;
}

export interface OfficeLocation {
  city: string;
  label: string;
  address: string;
  landmark?: string;
  mapUrl?: string;
  phone: string;
  email: string;
  hours: string;
}

export const FIRM_IDENTITY = {
  name: "SJ Associates",
  legalDescriptor: "Corporate & Tax Litigation Chambers",
  primarySeat: "High Court of Delhi & Supreme Court of India"
};

export const PRINCIPAL_ADVOCATE = {
  name: "Adv. Sanjay Kumar Singh",
  title: "Delhi High Court · Corporate & Tax Law",
  membership: "Member of International Council Of Jurists",
  firm: "SJ Associates",
  credentials:
    "Delhi High Court · Corporate & Taxation Counsel · Member of International Council Of Jurists",
  standing: "Principal Counsel · Corporate & Tax Chambers",
  statement:
    "Companies come to chambers when a tax demand, regulatory notice, or boardroom dispute cannot wait. Our duty is to read the numbers, the statute, and the contract clearly—and defend your business cleanly in court."
};

export const CHAMBERS_METRICS = [
  { value: "Tax & GST", label: "Direct Tax, GST & Customs Litigation" },
  { value: "Corporate", label: "Company Law, NCLT & Governance" },
  { value: "12 Courts", label: "Live High Court & SC Bulletins" },
  { value: "3 Cities", label: "New Delhi · Mumbai · Bengaluru" }
];

export const PRACTICE_AREAS: PracticeAreaItem[] = [
  {
    number: "01",
    id: "tax-appellate",
    title: "Direct Taxation, GST & Customs Appeals",
    shortDesc:
      "Our core chambers practice: challenging wrongful GST demands, income tax reassessment notices, input tax credit blocks, and customs valuations across tribunals and constitutional benches.",
    scope: [
      "GSTAT Section 112 second-level appeals against Sec. 107/108 orders & e-Filing",
      "GST show-cause notice replies, Section 73/74 defense & High Court writs",
      "Income Tax reassessments (Section 148) & appeals before ITAT and High Courts",
      "Customs classification, CESTAT appeals & export-import duty disputes"
    ],
    forums: ["Delhi High Court (Tax Bench)", "GSTAT / ITAT / CESTAT", "Supreme Court of India"]
  },
  {
    number: "02",
    id: "corporate-ma",
    title: "Corporate Law, M&A & Board Advisory",
    shortDesc:
      "Strategic corporate counsel for listed groups, promoters, and private enterprises—covering shareholder rights, commercial structuring, joint ventures, and NCLT disputes.",
    scope: [
      "Oppression, mismanagement & shareholder disputes before NCLT / NCLAT",
      "M&A due diligence, share purchase agreements & commercial contracts",
      "Board governance, director liability & statutory compliance opinions"
    ],
    forums: ["NCLT / NCLAT", "Delhi High Court", "Bombay High Court"]
  },
  {
    number: "03",
    id: "constitutional-writs",
    title: "Corporate & Tax Writ Petitions",
    shortDesc:
      "Swift Article 226 petitions and Supreme Court SLPs to stay coercive tax recoveries, unfreeze corporate bank accounts, and challenge ultra vires regulatory notifications.",
    scope: [
      "Urgent High Court stays against provisional bank & asset attachments",
      "Constitutional challenges to retrospective tax amendments & rules",
      "Public sector procurement, tender & statutory licensing writs"
    ],
    forums: ["Delhi High Court", "Supreme Court of India", "Gujarat High Court"]
  },
  {
    number: "04",
    id: "insolvency-ibc",
    title: "Insolvency, Restructuring & IBC Defense",
    shortDesc:
      "Representing corporate debtors, financial creditors, and resolution applicants across IBC proceedings, debt restructuring, and appellate tribunals.",
    scope: [
      "Section 7 & Section 9 CIRP filings and maintainability defense before NCLT",
      "NCLAT & Supreme Court appeals on resolution plans & CoC decisions",
      "Corporate restructuring, debt settlement & promoter guarantee defense"
    ],
    forums: ["NCLT / NCLAT", "Supreme Court of India", "Bombay High Court"]
  },
  {
    number: "05",
    id: "arbitration-disputes",
    title: "Commercial Arbitration & Enterprise Recovery",
    shortDesc:
      "Resolving high-value supply contracts, infrastructure EPC claims, and institutional arbitrations before commercial division High Courts and arbitral panels.",
    scope: [
      "Domestic & international commercial arbitration (SIAC, DIAC, ICA)",
      "Urgent Section 9 interim injunctions & asset preservation orders",
      "Section 34 award challenges & commercial decree enforcement"
    ],
    forums: ["Delhi High Court (Commercial Div.)", "Bombay High Court", "Calcutta High Court"]
  },
  {
    number: "06",
    id: "international-tax",
    title: "Transfer Pricing & Cross-Border Taxation",
    shortDesc:
      "Advising multinational subsidiaries and Indian exporters on Permanent Establishment (PE) exposure, DTAA treaty relief, and cross-border withholding disputes.",
    scope: [
      "Transfer pricing adjustments & Dispute Resolution Panel (DRP) objections",
      "DTAA treaty interpretation, royalty & FTS withholding litigation",
      "Cross-border structuring & advance ruling strategy"
    ],
    forums: ["Delhi High Court", "ITAT Special Bench", "Supreme Court of India"]
  },
  {
    number: "07",
    id: "regulatory-fema",
    title: "SEBI, FEMA & Corporate Regulatory Defense",
    shortDesc:
      "Representing enterprises and boards in FEMA compounding, RBI compliance inquiries, SEBI adjudication, and competition law reviews.",
    scope: [
      "FEMA contravention notices, compounding & ED corporate adjudication",
      "SEBI show-cause defense & Securities Appellate Tribunal (SAT) appeals",
      "Competition Commission (CCI) inquiries & corporate compliance audits"
    ],
    forums: ["SAT Mumbai", "Delhi High Court", "Supreme Court of India"]
  },
  {
    number: "08",
    id: "ip-technology",
    title: "Enterprise IP, Licensing & Tech Compliance",
    shortDesc:
      "Safeguarding corporate trademark portfolios, software licensing revenue, and enterprise data governance before High Court Commercial IP benches.",
    scope: [
      "Enterprise trademark & patent infringement injunctions before Delhi HC IPD",
      "SaaS licensing agreements, technology transfers & escrow contracts",
      "Corporate digital compliance, fintech terms & commercial trade secrets"
    ],
    forums: ["Delhi High Court (IPD)", "Madras High Court", "Karnataka High Court"]
  }
];

export const COUNSEL_TEAM: CounselMember[] = [
  {
    name: "Adv. Sanjay Kumar Singh",
    designation: "Principal Counsel · Corporate & Tax Law",
    barEnrollment: "Delhi High Court · Member of International Council Of Jurists",
    practiceFocus:
      "Direct Tax, GST & Customs Appeals, Corporate & NCLT Litigation, Tax Writs & Commercial Arbitration",
    bio: "Founder and Principal Counsel at SJ Associates in New Delhi. Practices exclusively in corporate and taxation law—representing companies, boards, and financial institutions before the High Court of Delhi, the Supreme Court of India, ITAT, CESTAT, and NCLAT.",
    isPrincipal: true
  },
  {
    name: "Adv. Meenakshi Iyer",
    designation: "Senior Associate — Corporate, M&A & IBC",
    barEnrollment: "Bar Council of Maharashtra & Goa",
    practiceFocus: "IBC Restructuring, NCLT Company Disputes & Commercial Banking",
    bio: "Leads corporate insolvency, shareholder litigation, and commercial debt recovery appearances at our Mumbai Fort desk before the Bombay High Court and NCLT."
  },
  {
    name: "Adv. Siddharth Kulkarni",
    designation: "Associate Counsel — Arbitration & Enterprise Contracts",
    barEnrollment: "Bar Council of Karnataka & Delhi",
    practiceFocus: "Commercial Arbitration, SaaS Licensing & Corporate IP",
    bio: "Advises technology companies, infrastructure contractors, and boards on high-value commercial arbitration, M&A contracts, and corporate IP enforcement in New Delhi and Bengaluru."
  },
  {
    name: "Adv. Rohini Chatterjee",
    designation: "Associate Counsel — Direct Tax, GST & Customs",
    barEnrollment: "Bar Council of West Bengal",
    practiceFocus: "Income Tax Appeals, GST Writs, Customs & FEMA Compliance",
    bio: "Handles GST show-cause defense, Section 148 reassessment writs, and indirect tax tribunal appeals across New Delhi, Kolkata, and Ahmedabad."
  }
];

export const CHAMBERS_OFFICES: OfficeLocation[] = [
  {
    city: "Delhi · Pitampura",
    label: "SJ Associates — Main Corporate & Tax Chambers",
    address: "Captain Satish Marg, Rishi Nagar, Pitampura, Delhi — 110034, India",
    landmark: "Near Rani Bagh Market & Road No. 43, Pitampura",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Captain+Satish+Marg,+Rishi+Nagar,+Pitampura,+Delhi,+110034,+India",
    phone: "+91 11 4308 9210",
    email: "sanjay@sjassociates.in",
    hours: "Mon–Sat · 09:30 AM to 07:00 PM IST"
  },
  {
    city: "Mumbai",
    label: "Fort Corporate & IBC Desk",
    address: "Suite 402, Horniman Circle Heritage Chambers, Fort, Mumbai — 400001",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Horniman+Circle,+Fort,+Mumbai,+400001,+India",
    phone: "+91 22 4912 7450",
    email: "mumbai@sjassociates.in",
    hours: "Mon–Fri · 09:30 AM to 07:00 PM IST"
  },
  {
    city: "Bengaluru",
    label: "MG Road Enterprise & Tax Desk",
    address: "Level 5, Barton Centre Annex, Mahatma Gandhi Road, Bengaluru — 560001",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mahatma+Gandhi+Road,+Bengaluru,+560001,+India",
    phone: "+91 80 4120 6830",
    email: "bengaluru@sjassociates.in",
    hours: "Mon–Fri · 09:30 AM to 06:30 PM IST"
  }
];

export type SolutionCategory =
  | "Taxation & GST"
  | "Registrations & Trade"
  | "Corporate & IP";

export interface CorporateSolutionItem {
  id: string;
  title: string;
  category: SolutionCategory;
  authority: string;
  turnaround: string;
  summary: string;
  isFeaturedBrand?: boolean;
}

export const CORPORATE_SOLUTIONS: CorporateSolutionItem[] = [
  {
    id: "sj-taxation-retainer",
    title: "S J Associates (Taxation & Corporate Advisory)",
    category: "Taxation & GST",
    authority: "Delhi HC · ITAT · CESTAT",
    turnaround: "Retainership & Briefings",
    summary:
      "End-to-end corporate legal and taxation counsel led by Adv. Sanjay Kumar Singh—covering GST writs, direct tax scrutiny, and statutory compliance.",
    isFeaturedBrand: true
  },
  {
    id: "iec-dgft",
    title: "IEC Code & DGFT Work",
    category: "Registrations & Trade",
    authority: "DGFT · Customs",
    turnaround: "3–5 Working Days",
    summary:
      "Import Export Code issuance, IEC modification, LUT/bond compliance, advance authorization, and DGFT show-cause representation."
  },
  {
    id: "gst-return-filing",
    title: "GST Return Filing",
    category: "Taxation & GST",
    authority: "GSTN · CBIC",
    turnaround: "Monthly & Annual",
    summary:
      "GSTR-1, GSTR-3B, GSTR-9/9C annual reconciliation, Input Tax Credit (ITC) audit matching, and DRC-01/ASMT-10 notice replies."
  },
  {
    id: "gstat-tribunal-appeal",
    title: "GST Appellate Tribunal (GSTAT Appeal)",
    category: "Taxation & GST",
    authority: "GSTAT · CGST Sec. 112",
    turnaround: "Sec. 107 / 108 Appeals",
    summary:
      "Second-level appellate representation under Section 112 of the CGST Act against orders of First Appellate (Sec. 107) and Revisional Authorities (Sec. 108)—including GSTAT e-Filing Portal submissions and case status tracking."
  },
  {
    id: "income-tax-consultant",
    title: "Income Tax Consultant",
    category: "Taxation & GST",
    authority: "Income Tax · ITAT",
    turnaround: "Assessment & Advisory",
    summary:
      "Corporate & promoter ITR filings, Section 143(2) / 148 reassessment defense, tax audit compliance, and CIT(A) / ITAT appeals."
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration",
    category: "Corporate & IP",
    authority: "IP India · Delhi HC IPD",
    turnaround: "TM Filing & Replies",
    summary:
      "Class clearance searches, TM-A trademark filings, examination report objections, oppositions, and corporate brand protection."
  },
  {
    id: "tds-return-filing",
    title: "TDS Return Filing",
    category: "Taxation & GST",
    authority: "TRACES · Income Tax",
    turnaround: "Quarterly Compliance",
    summary:
      "Form 24Q, 26Q, and 27Q quarterly TDS/TCS filings, lower-deduction certificates, Form 16/16A issuance, and default rectifications."
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    category: "Taxation & GST",
    authority: "Schedule III · Audit Prep",
    summary:
      "Monthly general ledger management, GST-ready invoicing audits, balance sheet finalization, and statutory financial controls.",
    turnaround: "Monthly Retainer"
  },
  {
    id: "gst-registration",
    title: "GST Registration",
    category: "Registrations & Trade",
    authority: "Central & State GST",
    turnaround: "7 Working Days",
    summary:
      "New GSTIN onboarding for companies and branches, core/non-core amendments, clarification replies, and revocation of cancelled GSTINs."
  },
  {
    id: "msme-registration",
    title: "MSME Registration",
    category: "Registrations & Trade",
    authority: "Udyam · MSME Samadhaan",
    turnaround: "1–2 Working Days",
    summary:
      "Udyam enterprise registration, NIC classification alignment, and statutory delayed-payment recovery claims under the MSMED Act."
  },
  {
    id: "partnership-registration",
    title: "Partnership Firm Registration",
    category: "Corporate & IP",
    authority: "Registrar of Firms · MCA",
    turnaround: "5–7 Working Days",
    summary:
      "Partnership deed drafting, Registrar of Firms enrollment, PAN/TAN onboarding, and conversion of partnerships into LLPs or Private Limited entities."
  },
  {
    id: "company-incorporation",
    title: "Company Incorporation",
    category: "Corporate & IP",
    authority: "MCA · ROC",
    turnaround: "5–10 Working Days",
    summary:
      "SPICe+ incorporation for Private Limited, LLP, One Person Company, and Section 8 entities—including MOA/AOA, DIN, and commencement filings."
  }
];

export interface HonourCertificateItem {
  id: string;
  slotNumber: string;
  title: string;
  issuingBody: string;
  category: string;
  recipient: string;
  citation: string;
  seat: string;
}

export const HONOURS_CERTIFICATES: HonourCertificateItem[] = [
  {
    id: "icj-membership-certificate",
    slotNumber: "01",
    title: "Member — International Council Of Jurists",
    issuingBody: "International Council Of Jurists (ICJ)",
    category: "International Jurists Honour",
    recipient: "Adv. Sanjay Kumar Singh",
    citation:
      "Recognized for corporate & taxation advocacy and contribution to cross-border commercial jurisprudence.",
    seat: "London · New Delhi"
  },
  {
    id: "delhi-hc-bar-certificate",
    slotNumber: "02",
    title: "High Court of Delhi & Bar Practice Honour",
    issuingBody: "Bar Enrollment & Constitutional Practice",
    category: "Court Standing Certificate",
    recipient: "Adv. Sanjay Kumar Singh",
    citation:
      "Certificate of standing before the High Court of Delhi, GST Appellate Tribunal (GSTAT), ITAT, CESTAT, and NCLAT.",
    seat: "New Delhi"
  },
  {
    id: "corporate-tax-chambers-award",
    slotNumber: "03",
    title: "Corporate & Direct Tax Chambers Citation",
    issuingBody: "National Tax & Enterprise Law Forum",
    category: "Chambers Recognition",
    recipient: "SJ Associates · Adv. Sanjay Kumar Singh",
    citation:
      "Honoured for dedicated representation in GST writs, Section 148 income tax appeals, customs & corporate governance.",
    seat: "Pitampura, Delhi"
  }
];

