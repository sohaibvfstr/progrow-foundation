export interface ResourceItem {
  id: string;
  title: string;
  type: 'Whitepaper' | 'Policy Brief' | 'Annual Report' | 'Governance' | 'Case Study';
  date: string;
  pages: string;
  format: string;
  summary: string;
  downloadUrl?: string;
  tags: string[];
}

export const resources: ResourceItem[] = [
  {
    id: 'csr-playbook-2025',
    title: 'The Next Decade of Impact: A Strategic Playbook for CSR in Skill Development & Education',
    type: 'Whitepaper',
    date: 'Q3 2024',
    pages: '36 Pages',
    format: 'PDF (2.4 MB)',
    summary: 'An analytical research document detailing the alignment between industry demand curves, National Education Policy (NEP 2020), and Section 135 CSR allocations in peri-urban India.',
    tags: ['CSR Strategy', 'NEP 2020', 'Vocational Skilling']
  },
  {
    id: 'women-entrepreneurship-study',
    title: 'Grassroots Catalysts: Micro-Enterprise Incubation for Rural & Semi-Urban Women',
    type: 'Policy Brief',
    date: 'Q2 2024',
    pages: '24 Pages',
    format: 'PDF (1.8 MB)',
    summary: 'Empirical insights into digital payment adoption, credit linkage challenges, and supply-chain disintermediation among 1,200 women self-help collective members.',
    tags: ['Women Empowerment', 'Financial Inclusion', 'SHG']
  },
  {
    id: 'annual-governance-report',
    title: 'Progrow Foundation Annual Strategic & Statutory Disclosure Framework',
    type: 'Governance',
    date: 'FY 2023-24',
    pages: '48 Pages',
    format: 'PDF (4.1 MB)',
    summary: 'Audited financial disclosures, balance sheets, CSR-1 filing validations, beneficiary demographic breakdowns, and third-party monitoring methodologies.',
    tags: ['Audited Accounts', '80G/12A', 'Transparency']
  },
  {
    id: 'stem-learning-impact-evaluation',
    title: 'Solar-Powered Smart Classrooms: Comparative Learning Retention in Low-Resource Schools',
    type: 'Case Study',
    date: 'Q1 2024',
    pages: '18 Pages',
    format: 'PDF (1.2 MB)',
    summary: 'Quantitative study evaluating student retention and STEM test scores before and after the introduction of interactive experiential learning kits.',
    tags: ['STEM Education', 'Digital Learning', 'Primary Schools']
  },
  {
    id: 'progrow-media-kit',
    title: 'Progrow Foundation Brand Identity, Media Assets & Official Factsheet',
    type: 'Governance',
    date: 'Updated Nov 2024',
    pages: '14 Pages',
    format: 'PDF (6.8 MB)',
    summary: 'High-resolution logo marks, brand typography guidelines, leadership biographies, approved high-res imagery, and boilerplate organization profiles.',
    tags: ['Media Kit', 'Brand Assets', 'Factsheet']
  }
];

