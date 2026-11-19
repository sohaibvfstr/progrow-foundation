export interface FAQItem {
  id: string;
  category: 'CSR & Compliance' | 'Programmes & Impact' | 'Volunteering & Mentorship' | 'General';
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'csr-1',
    category: 'CSR & Compliance',
    question: 'Is Progrow Foundation eligible to receive corporate CSR funds under Section 135?',
    answer: 'Yes. Progrow Foundation holds active registration under Ministry of Corporate Affairs Form CSR-1, has valid 12A and 80G tax-exempt certifications, and operates in full compliance with the Companies Act 2013 (Schedule VII activities) and MCA CSR Amendment Rules 2021.'
  },
  {
    id: 'csr-2',
    category: 'CSR & Compliance',
    question: 'How do you structure milestone-based CSR reporting and audits?',
    answer: 'We provide structured quarterly governance reports including beneficiary attendance rosters, geo-tagged photographic verifications, third-party impact assessments, and certified fund utilization certificates (UCs) audited by an independent Chartered Accountancy firm.'
  },
  {
    id: 'csr-3',
    category: 'CSR & Compliance',
    question: 'Can corporate partners co-create bespoke programmes tailored to their geographic focus?',
    answer: 'Absolutely. We actively encourage co-creation. Corporate partners can choose targeted geographies (near factory units, corporate headquarters, or aspirational districts), customize programmatic focus (e.g. women in STEM, digital literacy, vocational skilling), and define custom KPI milestones.'
  },
  {
    id: 'prog-1',
    category: 'Programmes & Impact',
    question: 'How does Progrow Foundation ensure sustainability after a project cycle ends?',
    answer: 'Our community anchor model trains localized youth and community leaders as permanent Hub Facilitators and mobilizes self-governing village/neighborhood committees. This ensures ongoing local ownership, maintenance, and continuity long after the initial CSR funding cycle completes.'
  },
  {
    id: 'prog-2',
    category: 'Programmes & Impact',
    question: 'Are the featured initiatives on the website existing or proposed concepts?',
    answer: 'Our initiatives (such as TechSaksham, Pragati, and Udyam) represent structured, ready-to-deploy programme concept frameworks designed with complete pedagogical syllabi, cost models, and impact indicators, awaiting corporate CSR co-creation and pilot sponsorship.'
  },
  {
    id: 'vol-1',
    category: 'Volunteering & Mentorship',
    question: 'How can corporate employees participate in employee engagement and volunteering?',
    answer: 'We offer structured employee volunteering playbooks, including weekend mock interview panels, one-on-one virtual mentorship for first-generation college students, guest webinars on corporate culture, and on-site STEM lab setup hackathons.'
  },
  {
    id: 'gen-1',
    category: 'General',
    question: 'Can individual donors contribute and receive tax exemption benefits?',
    answer: 'Yes, individual contributions are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act. Instant 80G digital receipts with unique transaction reference numbers are issued upon donation receipt.'
  }
];

