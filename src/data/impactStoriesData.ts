export interface ImpactStory {
  id: string;
  name: string;
  age: number;
  location: string;
  programmeCategory: 'Education' | 'Skilling' | 'Youth' | 'Entrepreneurship';
  programmeTag: string;
  headline: string;
  quote: string;
  story: string;
  beforeSituation: string;
  afterTransformation: string;
  metrics: { label: string; value: string }[];
  image: string;
  partnerCompany?: string;
  sdgTag: string;
}

export const impactStories: ImpactStory[] = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    age: 21,
    location: 'Peri-urban Jaipur, Rajasthan',
    programmeCategory: 'Skilling',
    programmeTag: 'Digital Skills for Tomorrow',
    headline: 'From Data Hesitation to Corporate Cloud Associate',
    quote: 'In our community, girls were expected to pause education after school. Having access to a structured tech lab gave me more than technical syntax—it gave me the dignity of economic independence.',
    story: 'Priya was the first in her family to attend college, pursuing a general B.Sc. degree. Lacking access to a personal computer or internet at home, her prospects for white-collar employment appeared bleak. Through the structured technical skilling cohort, Priya completed 320 hours of hands-on data analytics and cloud collaboration labs, coupled with rigorous English communication coaching. Today, she works as a junior data analyst at an IT services provider, contributing 60% of her household income.',
    beforeSituation: 'Uncertain career trajectory with no personal computer or workplace fluency.',
    afterTransformation: 'Full-time IT professional earning INR 28,000/month with health insurance for her family.',
    metrics: [
      { label: 'Household Income Increase', value: '3.1x' },
      { label: 'Lab Training Hours', value: '320 Hrs' },
      { label: 'Technical Certifications', value: '2 Credentials' }
    ],
    image: '/images/photo-1573496359142-b8d87734a5a2.jpg',
    partnerCompany: 'Tech CSR Co-Creation Model',
    sdgTag: 'SDG 8: Decent Work'
  },
  {
    id: 'anita-devi',
    name: 'Anita Devi & Collective',
    age: 34,
    location: 'Varanasi District, Uttar Pradesh',
    programmeCategory: 'Entrepreneurship',
    programmeTag: 'Women & Youth Micro-Entrepreneurship',
    headline: 'Reviving Traditional Weaving into a Direct-to-Consumer Micro-Brand',
    quote: 'Before the business training, local middlemen took 75% of our profit margins. Learning digital UPI payments and catalog photography restored ownership back to our artisans.',
    story: 'Anita led an informal cluster of 14 handloom weavers who struggled with volatile seasonal earnings and exploitative intermediary markups. Participating in the micro-enterprise incubation module, Anita mastered digital ledger management, standard quality packaging, and ONDC onboarding. The collective secured a direct corporate gifting contract, tripling their net earnings while preserving generational heritage.',
    beforeSituation: 'Intermediary dependency, unpredictable seasonal income, zero formal credit history.',
    afterTransformation: 'Formally registered producer group generating regular monthly income across 14 rural households.',
    metrics: [
      { label: 'Net Margin Increase', value: '+74%' },
      { label: 'Women Artisans Reached', value: '14 Weavers' },
      { label: 'Digital Payment Adoption', value: '100% UPI' }
    ],
    image: '/images/photo-1544717305-2782549b5136.jpg',
    partnerCompany: 'Handicraft CSR Initiative',
    sdgTag: 'SDG 5: Gender Equality'
  },
  {
    id: 'rahul-kumar',
    name: 'Rahul Kumar',
    age: 19,
    location: 'North-East Delhi Slum Cluster',
    programmeCategory: 'Education',
    programmeTag: 'Community Learning Hubs',
    headline: 'Breaking Generational Cycles Through Foundational STEM',
    quote: 'The learning hub was my sanctuary. It had solar lights when power went out, computers with fast internet, and teachers who never gave up when I stumbled on algebra.',
    story: 'Growing up in a one-room tenement shared with five family members, Rahul struggled to find quiet study hours. The local community center provided a solar-powered learning sanctuary equipped with STEM kits, digital tablets, and empathetic mentors. Rahul mastered 10th-grade mathematics with an 88% distinction and secured admission to an engineering polytechnic diploma program on full scholarship.',
    beforeSituation: 'High risk of school dropout due to home overcrowding and math anxiety.',
    afterTransformation: 'Top decile school board graduate admitted into government polytechnic college.',
    metrics: [
      { label: 'Math Score Improvement', value: '+42% Points' },
      { label: 'Weekly Study Hours Logged', value: '18 Hrs' },
      { label: 'Scholarship Grant', value: '100% Tuition' }
    ],
    image: '/images/photo-1509062522246-3755977927d7.jpg',
    partnerCompany: 'Foundational Learning CSR Pool',
    sdgTag: 'SDG 4: Quality Education'
  },
  {
    id: 'deepak-verma',
    name: 'Deepak Verma',
    age: 22,
    location: 'Aurangabad, Maharashtra',
    programmeCategory: 'Youth',
    programmeTag: 'Career Readiness & Employability',
    headline: 'Empowering Aspirational Engineers for the Modern Workplace',
    quote: 'Knowledge from books is only half the battle. Learning how to express my ideas, lead team discussions, and handle high-pressure corporate interviews made all the difference.',
    story: 'Deepak graduated from a Tier-3 engineering college with solid academic transcripts but zero confidence in English technical interviews. Over 12 weeks of career readiness coaching, Deepak participated in mock corporate assessment centers, business writing workshops, and received one-on-one mentorship from an enterprise software architect. He secured a position at an automotive technology firm.',
    beforeSituation: 'Rejected in 6 consecutive campus recruitment drives due to interview hesitation.',
    afterTransformation: 'Employed at tier-1 automotive tech engineering team with competitive compensation.',
    metrics: [
      { label: 'Placement Time', value: '3 Weeks Post-Cohort' },
      { label: 'Communication Index', value: '+65%' },
      { label: 'Mentorship Sessions', value: '14 Hours' }
    ],
    image: '/images/photo-1534528741775-53994a69daeb.jpg',
    partnerCompany: 'Automotive CSR Framework',
    sdgTag: 'SDG 8: Decent Work'
  }
];

