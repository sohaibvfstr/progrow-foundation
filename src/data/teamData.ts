export interface TeamMember {
  name: string;
  role: string;
  background: string;
  bio: string;
  image: string;
  category: 'Leadership' | 'Advisory Council' | 'CSR Governance';
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Aruna Natarajan',
    role: 'Co-Founder & Executive Director',
    background: 'Former Senior Social Policy Consultant, World Bank & Tata Trusts',
    bio: 'Over 22 years of experience leading grassroots community transformations, institutional policy design, and public-private education coalitions across South Asia.',
    image: '/images/photo-1573496359142-b8d87734a5a2.jpg',
    category: 'Leadership'
  },
  {
    name: 'Vikramaditya Sen',
    role: 'Director of Strategic Partnerships & CSR',
    background: 'Ex-VP CSR & Sustainability, Top Tier Infrastructure Conglomerate',
    bio: 'Specialist in Section 135 compliance, ESG disclosures, and co-creating multi-year CSR programmes aligned with United Nations Sustainable Development Goals.',
    image: '/images/photo-1507003211169-0a1dd7228f2d.jpg',
    category: 'Leadership'
  },
  {
    name: 'Meenakshi Sundaram',
    role: 'Head of Youth Employability & Skilling',
    background: 'Former Lead Curriculum Architect, National Skill Development Ecosystem',
    bio: 'Pioneered modular vocational frameworks that have placed over 18,000 first-generation college graduates into formal technology and service careers.',
    image: '/images/photo-1580489944761-15a19d654956.jpg',
    category: 'Leadership'
  },
  {
    name: 'Justice (Retd.) K. R. Nambiar',
    role: 'Senior Governance & Ethics Advisor',
    background: 'Former High Court Judge & Public Institutional Ombudsman',
    bio: 'Guides our institutional statutory compliance, safeguarding policies, independent fiduciary controls, and transparent stakeholder reporting.',
    image: '/images/photo-1472099645785-5658abf4ff4e.jpg',
    category: 'CSR Governance'
  },
  {
    name: 'Sunita Rao, FCA',
    role: 'Chair, Audit & Financial Compliance Committee',
    background: 'Senior Partner, Forensic Audit & Governance Advisory',
    bio: 'Oversees Progrow’s rigorous three-tier financial audits, Section 8 compliance, 80G documentation, and milestone-linked fund deployment verification.',
    image: '/images/photo-1573497019940-1c28c88b4f3e.jpg',
    category: 'CSR Governance'
  },
  {
    name: 'Prof. Anirudh Bhattacharya',
    role: 'Strategic Advisor - Higher Education & STEM',
    background: 'Visiting Professor of Development Economics, IIM & Oxford Alum',
    bio: 'Advises on quantitative baseline impact evaluations, randomized control trial (RCT) metrics, and programmatic return on social investment (SROI).',
    image: '/images/photo-1500648767791-00dcc994a43e.jpg',
    category: 'Advisory Council'
  },
  {
    name: 'Shalini Pillai',
    role: 'Advisor - Women Enterprise & Microfinance',
    background: 'Former Regional Director, Micro-Enterprise Development Alliances',
    bio: 'Expert in designing women self-help collective federations, supply-chain backward integration, and rural financial literacy ecosystems.',
    image: '/images/photo-1567532939604-b6b5b0db2604.jpg',
    category: 'Advisory Council'
  }
];

