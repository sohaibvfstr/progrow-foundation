export interface FocusArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  sdg: string[];
  keyInterventions: string[];
  metrics: { label: string; value: string }[];
  image: string;
  iconName: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: 'education',
    title: 'Foundational & Digital Education',
    tagline: 'Bridging the learning divide through quality digital tools and pedagogical excellence.',
    description: 'We believe education is the bedrock of societal equity. Our educational interventions focus on strengthening basic literacy and numeracy, establishing tech-enabled smart classrooms in under-resourced schools, and nurturing critical thinking among children from underserved backgrounds.',
    sdg: ['SDG 4: Quality Education', 'SDG 10: Reduced Inequalities'],
    keyInterventions: [
      'Smart classrooms & digital learning infrastructure in government schools',
      'Foundational literacy and STEM education labs',
      'Teacher enablement and pedagogical capacity workshops',
      'Merit-cum-means scholarship support for first-generation learners'
    ],
    metrics: [
      { label: 'Target School Reach', value: '150+' },
      { label: 'Child Learner Footprint', value: '25,000+' },
      { label: 'Learning Retention Lift', value: '38%' }
    ],
    image: '/images/learning.jpg',
    iconName: 'BookOpen'
  },
  {
    id: 'skill-development',
    title: 'Industry-Aligned Skill Development',
    tagline: 'Equipping youth with demand-driven technical and market-relevant competencies.',
    description: 'In an evolving global economy, technical skills must match industry realities. We design modular, market-linked vocational and technological training pathways that transform aspirational youth into job-ready professionals.',
    sdg: ['SDG 8: Decent Work & Economic Growth', 'SDG 4: Quality Education'],
    keyInterventions: [
      'Digital literacy, cloud basics, and data essentials bootcamps',
      'Vocational skilling in electronics, healthcare logistics, and retail management',
      'Workplace communication, interpersonal skills, and professional etiquette',
      'Corporate internship linkages and placement support drives'
    ],
    metrics: [
      { label: 'Core Technical Modules', value: '18+' },
      { label: 'Certified Youth Ratio', value: '92%' },
      { label: 'Industry Placement Rate', value: '74%' }
    ],
    image: '/images/skills.jpg',
    iconName: 'Award'
  },
  {
    id: 'youth-empowerment',
    title: 'Youth Leadership & Career Pathways',
    tagline: 'Transforming first-generation graduates into confident community leaders.',
    description: 'Empowerment transcends technical training. We cultivate leadership, civic responsibility, and strategic career navigation for young adults, connecting them with industry mentors and changemaker networks.',
    sdg: ['SDG 8: Decent Work', 'SDG 10: Reduced Inequalities', 'SDG 17: Partnerships'],
    keyInterventions: [
      'Progrow Youth Fellowship for grassroots community innovators',
      'One-on-one corporate executive mentorship pairings',
      'Career discovery workshops and mock interview bootcamps',
      'Civic engagement and youth-led local problem-solving pods'
    ],
    metrics: [
      { label: 'Fellowship Cohorts', value: '12' },
      { label: 'Corporate Mentors Active', value: '300+' },
      { label: 'First-Gen Career Transition', value: '85%' }
    ],
    image: '/images/together.jpg',
    iconName: 'Compass'
  },
  {
    id: 'entrepreneurship',
    title: 'Inclusive & Nano-Entrepreneurship',
    tagline: 'Catalyzing self-reliance through micro-enterprise incubation and market access.',
    description: 'Sustainable livelihoods emerge when local innovators have the tools to build their own enterprises. We empower women self-help collectives, rural artisans, and youth micro-entrepreneurs with seed mentorship, financial literacy, and supply-chain linkages.',
    sdg: ['SDG 5: Gender Equality', 'SDG 8: Decent Work', 'SDG 1: No Poverty'],
    keyInterventions: [
      'Micro-enterprise incubation and business planning bootcamps',
      'Financial inclusion, digital payments, and accounting literacy',
      'E-commerce onboarding and regional artisan market access',
      'Peer-group lending facilitation and micro-grant seed support'
    ],
    metrics: [
      { label: 'Micro-Enterprises Supported', value: '1,200+' },
      { label: 'Women-Led Ventures', value: '78%' },
      { label: 'Household Income Increase', value: '45%' }
    ],
    image: '/images/photo-1509062522246-3755977927d7.jpg',
    iconName: 'TrendingUp'
  },
  {
    id: 'community-development',
    title: 'Resilient Community Development',
    tagline: 'Fostering cohesive, sustainable and digitally connected local ecosystems.',
    description: 'True progress is rooted in the community. We collaborate with village councils, peri-urban resident associations, and local institutions to build shared digital community centers, promote health hygiene awareness, and drive environmental stewardship.',
    sdg: ['SDG 11: Sustainable Communities', 'SDG 3: Good Health', 'SDG 6: Clean Water'],
    keyInterventions: [
      'Digital Community Hubs providing public service access and internet learning',
      'Preventive community health, sanitation, and nutrition drives',
      'Solar lighting and green community resource management',
      'Community governance forums and citizen advisory circles'
    ],
    metrics: [
      { label: 'Community Hubs Operational', value: '40+' },
      { label: 'Families Engaged', value: '50,000+' },
      { label: 'Civic Service Touchpoints', value: '120k' }
    ],
    image: '/images/photo-1488521787991-ed7bbaae773c.jpg',
    iconName: 'Users'
  }
];

