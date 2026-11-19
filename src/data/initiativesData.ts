export interface Initiative {
  id: string;
  name: string;
  category: 'Education' | 'Skilling' | 'Youth' | 'Entrepreneurship' | 'Community';
  tagline: string;
  summary: string;
  scheduleVII: string;
  targetBeneficiaries: string;
  duration: string;
  geographicReach: string;
  status: 'Ready for CSR Co-Creation' | 'Pilot Blueprint' | 'Scalable Framework';
  sdgs: string[];
  image: string;
  highlights: string[];
  impactProjections: { label: string; value: string }[];
  overview: string;
  curriculumOrPillars: { title: string; desc: string }[];
}

export const initiatives: Initiative[] = [
  {
    id: 'digital-skills-for-tomorrow',
    name: 'Digital Skills for Tomorrow (TechSaksham Concept)',
    category: 'Skilling',
    tagline: 'Bridging tier-2 & tier-3 youth into high-demand 21st-century technological roles.',
    summary: 'A structured 16-week modular programme delivering practical, project-based training in cloud foundations, data literacy, digital tools, and remote workplace collaboration for underprivileged college students.',
    scheduleVII: 'Item (ii) - Promoting education, employment enhancing vocational skills',
    targetBeneficiaries: 'Final-year students & recent graduates from low-income government colleges',
    duration: '16 Weeks (320 Learning Hours)',
    geographicReach: 'Peri-urban clusters across NCR, Maharashtra, Karnataka & Telangana',
    status: 'Ready for CSR Co-Creation',
    sdgs: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 10: Reduced Inequalities'],
    image: '/images/skills.jpg',
    highlights: [
      'Industry-aligned syllabus audited by enterprise tech leaders',
      'Capstone real-world micro-projects for portfolio creation',
      'Weekly corporate volunteer guest lectures and code reviews',
      'Placement linkage with fast-growing tech and business services firms'
    ],
    impactProjections: [
      { label: 'Projected Cohort Size', value: '500-2,500 Youth/Yr' },
      { label: 'Target Employment Rate', value: '75%' },
      { label: 'Average Wage Uplift', value: '2.4x' }
    ],
    overview: 'In an era where technology drives every sector, youth from underrepresented regions often lack access to structured, modern tech training. "Digital Skills for Tomorrow" is formulated as a turn-key CSR initiative that pairs experiential digital coursework with career coaching and verified digital credentials.',
    curriculumOrPillars: [
      { title: 'Module 1: Digital Core & Workplace Productivity', desc: 'Advanced spreadsheets, business communications, cloud collaboration suites, and remote workflow hygiene.' },
      { title: 'Module 2: Data Literacy & Visualization', desc: 'Data handling, basic SQL/BI tools, customer analytics, and analytical problem-solving.' },
      { title: 'Module 3: Web & Cloud Fundamentals', desc: 'No-code web development, cloud service architectures, and cybersecurity awareness.' },
      { title: 'Module 4: Career Launchpad & Interview Mastery', desc: 'Resume engineering, LinkedIn personal branding, behavioral interviews, and corporate etiquette.' }
    ]
  },
  {
    id: 'career-readiness-and-employability',
    name: 'Career Readiness & Employability (Pragati Concept)',
    category: 'Youth',
    tagline: 'A comprehensive finishing-school model equipping graduates with workplace confidence.',
    summary: 'An intensive finishing school designed to bridge the gap between academic graduation and modern workplace expectations, addressing communication, problem-solving, and emotional intelligence.',
    scheduleVII: 'Item (ii) - Vocational skills especially among children and youth',
    targetBeneficiaries: 'Undergraduate youth from economically vulnerable backgrounds',
    duration: '12 Weeks (180 Hours)',
    geographicReach: 'Tier-2 and Tier-3 urban centers',
    status: 'Scalable Framework',
    sdgs: ['SDG 4: Quality Education', 'SDG 8: Decent Work'],
    image: '/images/together.jpg',
    highlights: [
      'Interactive English communication and presentation labs',
      'Problem-solving simulations and design thinking basics',
      'Personal finance management and banking essentials',
      'Employer-connect job fairs and apprenticeship linkages'
    ],
    impactProjections: [
      { label: 'Target Candidates', value: '1,000+ per Cluster' },
      { label: 'Candidate Retention Rate', value: '94%' },
      { label: 'Interview Conversion', value: '68%' }
    ],
    overview: 'Degree holders from rural and semi-urban colleges frequently face barriers not due to lack of intellect, but lack of workplace exposure and conversational fluency. Pragati provides a psychologically safe, high-energy environment for transformative personal growth.',
    curriculumOrPillars: [
      { title: 'Professional Communication', desc: 'Spoken English confidence, active listening, business email writing, and telephone etiquette.' },
      { title: 'Cognitive & Problem Solving', desc: 'Root-cause analysis, situational judgment, conflict resolution, and agile execution.' },
      { title: 'Financial & Digital Prudence', desc: 'Understanding salary structures, banking, mutual funds basics, and tax compliance.' },
      { title: 'Simulated Assessment Centers', desc: 'Mock group discussions, panel interviews, and video portfolio building.' }
    ]
  },
  {
    id: 'women-and-youth-entrepreneurship',
    name: 'Women & Youth Micro-Entrepreneurship (Udyam Concept)',
    category: 'Entrepreneurship',
    tagline: 'Transforming local craftswomen and youth into sustainable micro-enterprise owners.',
    summary: 'A grassroots incubation and seed capital accelerator providing women self-help groups and youth artisans with design coaching, digital bookkeeping, inventory management, and direct retail linkages.',
    scheduleVII: 'Item (iii) - Promoting gender equality and empowering women',
    targetBeneficiaries: 'Women artisans, rural SHG members, and youth micro-business owners',
    duration: '6 Months Incubator + 6 Months Mentored Scaling',
    geographicReach: 'Aspirational districts and semi-rural handicraft / agri hubs',
    status: 'Ready for CSR Co-Creation',
    sdgs: ['SDG 5: Gender Equality', 'SDG 8: Decent Work', 'SDG 1: No Poverty'],
    image: '/images/photo-1509062522246-3755977927d7.jpg',
    highlights: [
      'Localized vernacular curriculum tailored to non-English speakers',
      'Micro-seed grant disbursement mechanism with zero-interest return',
      'Onboarding onto open network digital commerce (ONDC) and regional fairs',
      'Collective bargaining and bulk raw material procurement support'
    ],
    impactProjections: [
      { label: 'Enterprises Incubated', value: '250 / District' },
      { label: 'Women Financial Autonomy', value: '88%' },
      { label: 'Annual Revenue Surge', value: '+62%' }
    ],
    overview: 'Local micro-enterprises represent the lifeblood of rural livelihoods. By removing middlemen and unlocking digital financial tools, Udyam converts informal trade into scalable, formalised community micro-enterprises.',
    curriculumOrPillars: [
      { title: 'Product Standardization & Quality', desc: 'Packaging, hygienic handling, batch consistency, and modern design adaptation.' },
      { title: 'Digital Bookkeeping & UPI', desc: 'Smart accounting apps, automated ledger tracking, invoice generation, and creditworthiness.' },
      { title: 'Market Linkages & Logistics', desc: 'Exhibition curation, B2B wholesale orders, packaging for courier transit, and customer care.' },
      { title: 'Collective Leadership', desc: 'Governance in women self-help clusters, peer dispute mediation, and shared emergency reserves.' }
    ]
  },
  {
    id: 'community-learning-initiatives',
    name: 'Community Learning Hubs (Shiksha Setu Concept)',
    category: 'Education',
    tagline: 'Neighborhood solar-powered digital access spaces for after-school learning and STEM.',
    summary: 'Physical and digital neighborhood spaces in low-income settlements that provide safe after-school study environments, smart screen learning, STEM kits, and remedial academic tutoring.',
    scheduleVII: 'Item (ii) - Promoting education, including special education',
    targetBeneficiaries: 'School students (Grades 5-10) in low-income urban clusters',
    duration: 'Multi-year Community Anchor Program',
    geographicReach: 'Urban informal settlements and underserved resettlement colonies',
    status: 'Ready for CSR Co-Creation',
    sdgs: ['SDG 4: Quality Education', 'SDG 11: Sustainable Communities'],
    image: '/images/learning.jpg',
    highlights: [
      'Solar-backed uninterrupted electricity and high-speed broadband connection',
      'Community youth trained as localized Hub Managers and peer mentors',
      'Interactive hands-on science and robotics experiment kits',
      'Parental engagement councils to prevent student dropouts'
    ],
    impactProjections: [
      { label: 'Active Hubs Planned', value: '20 Hubs' },
      { label: 'Student Daily Reach', value: '3,000+' },
      { label: 'Dropout Reduction', value: '45%' }
    ],
    overview: 'Overcrowded homes and lack of study lighting in informal settlements severely handicap children during critical developmental years. Shiksha Setu transforms community spaces into vibrant sanctuaries of discovery and peer collaboration.',
    curriculumOrPillars: [
      { title: 'Remedial Math & Science Labs', desc: 'Gamified digital learning software that adapts to individual student learning paces.' },
      { title: 'Library & Reading Nooks', desc: 'Bilingual illustrated storybooks and science journals to nurture the joy of reading.' },
      { title: 'Experiential STEM Projects', desc: 'Hands-on simple robotics, circuit building, and eco-science experiments.' },
      { title: 'Life Skills & Child Rights', desc: 'Emotional safety, hygiene awareness, adolescent counseling, and digital safety.' }
    ]
  },
  {
    id: 'green-skills-and-livelihoods',
    name: 'Green Skills & Circular Livelihoods (Prakriti Concept)',
    category: 'Community',
    tagline: 'Preparing youth for emerging clean energy, waste upcycling, and climate resilient jobs.',
    summary: 'A forward-looking technical training program preparing rural and semi-urban youth for decentralized solar installation, electric two-wheeler maintenance, and decentralized organic waste processing.',
    scheduleVII: 'Item (iv) - Ensuring environmental sustainability and ecological balance',
    targetBeneficiaries: 'Vocational trainees, ITI pass-outs, and rural youth',
    duration: '14 Weeks (280 Hours)',
    geographicReach: 'High-solar potential belts and municipal green zones',
    status: 'Pilot Blueprint',
    sdgs: ['SDG 7: Affordable & Clean Energy', 'SDG 8: Decent Work', 'SDG 13: Climate Action'],
    image: '/images/photo-1497435334941-8c899ee9e8e9.jpg',
    highlights: [
      'Certified solar rooftop installation and inverter maintenance training',
      'Electric vehicle (EV) battery swapping and basic diagnostics module',
      'Community composting and decentralised waste-to-wealth models',
      'Green entrepreneurship mentorship for localized service franchises'
    ],
    impactProjections: [
      { label: 'Technicians Certified', value: '600 / Year' },
      { label: 'Clean Energy Deployed', value: '1.2 MW Equiv' },
      { label: 'Green Job Placement', value: '80%' }
    ],
    overview: 'The transition to a net-zero future offers unprecedented livelihood opportunities for India’s workforce. Prakriti bridges grassroots technical aspirants with the burgeoning renewable energy and sustainable mobility sector.',
    curriculumOrPillars: [
      { title: 'Rooftop Solar & Electrical Safety', desc: 'PV module alignment, wiring diagnostics, grid sync, and safety protocols.' },
      { title: 'EV Maintenance & Diagnostics', desc: 'Lithium battery handling, motor controller checks, and smart charging station operations.' },
      { title: 'Waste Management Systems', desc: 'Decentralized composting, plastics separation, and secondary raw material trading.' },
      { title: 'Eco-Enterprise Incubator', desc: 'Starting a local solar servicing agency or battery maintenance workshop.' }
    ]
  }
];

