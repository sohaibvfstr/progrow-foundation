import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, Award, Users, Compass, 
  ArrowUpRight, Heart, Sparkles, FileCheck, Eye, Layers 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { teamMembers } from '../data/teamData';

interface AboutUsProps {
  onOpenCsrModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenCsrModal }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Leadership' | 'CSR Governance' | 'Advisory Council'>('All');

  const filteredTeam = activeCategory === 'All' 
    ? teamMembers 
    : teamMembers.filter(m => m.category === activeCategory);

  const values = [
    {
      title: 'Uncompromising Integrity',
      desc: 'Transparent fiscal stewardship, zero conflict of interest, and third-party certified fund utilization on every rupee deployed.'
    },
    {
      title: 'Dignity & Inclusivity',
      desc: 'We reject pity-based narratives. We work alongside communities as co-creators, respecting localized cultural wisdom and human agency.'
    },
    {
      title: 'Pedagogical Excellence',
      desc: 'High-quality syllabus design, experiential labs, and industry-validated certifications that meet contemporary workforce standards.'
    },
    {
      title: 'Measurable Accountability',
      desc: 'Robust baseline surveys, digital beneficiary tracking, and verifiable social return on investment (SROI) evaluations.'
    },
    {
      title: 'Long-Term Sustainability',
      desc: 'Empowering local community youth to operate learning hubs and self-help federations independently beyond the initial CSR cycle.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Our Story & Institutional Purpose"
        title="Building Pathways. Enabling Dignity."
        highlightWord="Transforming Futures."
        subtitle="Progrow Foundation is a premier Section 8 nonprofit dedicated to creating structured, auditable, and enduring opportunities across education, skilling, and inclusive community enterprise."
        breadcrumb={[{ label: 'About Us' }]}
        primaryCta={{ label: 'Explore CSR Governance', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'Meet Our Leadership', to: '#leadership' }}
      />

      {/* Genesis & Philosophy Section */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
                Born From a Simple Truth: Potential is Everywhere.
              </h2>
              <p className="text-base text-charcoal-muted leading-relaxed">
                Across India’s tier-2, tier-3 cities, peri-urban informal settlements, and rural heartlands, millions of capable young individuals and aspirational women possess extraordinary drive, yet encounter steep barriers of unequal access.
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Progrow Foundation was established by development economists, corporate leaders, and educationists to dismantle these structural barriers. We replace ad-hoc charity with institutional-grade skilling frameworks, tech-enabled classrooms, and micro-enterprise accelerators that convert raw ambition into verified socioeconomic mobility.
              </p>

              {/* Core Belief Highlight Box */}
              <div className="p-6 rounded-2xl bg-ivory border border-sage/80 space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-dark">
                  The Progrow Core Belief
                </span>
                <blockquote className="text-xl font-serif italic text-forest">
                  "Every individual deserves an opportunity to grow."
                </blockquote>
                <p className="text-xs text-charcoal-muted">
                  Not as an act of charity, but as a foundational human right and economic imperative for a flourishing society.
                </p>
              </div>
            </div>

            {/* Split Visuals */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-subtle border border-sage aspect-[3/4]">
                <img
                  src="/images/together.jpg"
                  alt="Progrow youth collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-subtle border border-sage aspect-square">
                  <img
                    src="/images/learning.jpg"
                    alt="Digital learning lab in action"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-forest text-white">
                  <div className="text-2xl font-black text-gold">100%</div>
                  <div className="text-xs text-ivory/80 mt-1">Section 135 & Schedule VII compliant programme frameworks.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-24 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="bg-forest text-white p-8 sm:p-10 rounded-3xl border border-forest-light shadow-premium space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gold">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                An Equitable India Where Every Talent Finds Its Pathway.
              </h3>
              <p className="text-sm text-ivory/80 leading-relaxed">
                To build an inclusive nation where socio-economic background never dictates an individual's ceiling, and where every motivated child, youth, and woman is equipped with the skills and agency to lead a life of dignity, financial independence, and social contribution.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sage shadow-premium space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-forest">
                Bridging Aspiration to Opportunity with Precision.
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                To engineer, deploy, and scale outcome-driven development initiatives in foundational education, digital skilling, youth employability, and micro-entrepreneurship—collaborating transparently with corporate CSR partners, community institutions, and government stakeholders.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark">
                Guiding Principles
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-forest">
                Our Institutional Values
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-sage shadow-subtle flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-sage/60 text-forest flex items-center justify-center font-bold text-xs">
                      0{i + 1}
                    </div>
                    <h4 className="text-sm font-bold text-forest">{v.title}</h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Theory of Change & Operational Architecture */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Framework of Action
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              Our Theory of Change
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              How our structured pipeline converts corporate CSR commitments and community trust into compounding, multi-generational socio-economic impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            <div className="bg-ivory p-5 rounded-2xl border border-sage space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-gold-dark">01. Inputs</span>
              <h4 className="text-sm font-bold text-forest">CSR Capital & Expertise</h4>
              <p className="text-xs text-charcoal-muted">
                Statutory CSR funding, corporate employee volunteers, tech infrastructure, and pedagogical partnerships.
              </p>
            </div>

            <div className="bg-ivory p-5 rounded-2xl border border-sage space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-gold-dark">02. Activities</span>
              <h4 className="text-sm font-bold text-forest">Targeted Interventions</h4>
              <p className="text-xs text-charcoal-muted">
                Establishing smart hubs, 320-hr digital bootcamps, teacher enablement, and micro-business incubation.
              </p>
            </div>

            <div className="bg-ivory p-5 rounded-2xl border border-sage space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-gold-dark">03. Outputs</span>
              <h4 className="text-sm font-bold text-forest">Direct Deliverables</h4>
              <p className="text-xs text-charcoal-muted">
                Certified youth, functional STEM smart classrooms, active women micro-enterprises, and learning hours logged.
              </p>
            </div>

            <div className="bg-ivory p-5 rounded-2xl border border-sage space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-gold-dark">04. Outcomes</span>
              <h4 className="text-sm font-bold text-forest">Livelihood Transitions</h4>
              <p className="text-xs text-charcoal-muted">
                74% corporate placement rate, 2.5x household income uplift, and reduced school dropout rates.
              </p>
            </div>

            <div className="bg-forest text-white p-5 rounded-2xl border border-forest-light space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-gold">05. Long-term Impact</span>
              <h4 className="text-sm font-bold text-white">Generational Freedom</h4>
              <p className="text-xs text-ivory/80">
                Self-sustaining community hubs, breaking cycles of poverty, and enduring local leadership.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Governance, Statutory Compliance & Audits */}
      <section id="governance" className="py-24 bg-sage/20 border-b border-sage/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
                Institutional Credibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-forest tracking-tight">
                Governance, Transparency & Fiduciary Vigilance
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Corporate CSR decision-makers demand absolute fiduciary rigor. Progrow Foundation operates under a strict three-tier governance architecture audited by independent statutory Chartered Accountants.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sage">
                  <ShieldCheck className="w-5 h-5 text-emerald-brand shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-forest block">Form CSR-1 Registered</span>
                    <span className="text-charcoal-muted">Authorized by Ministry of Corporate Affairs (MCA) to implement CSR projects.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sage">
                  <ShieldCheck className="w-5 h-5 text-emerald-brand shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-forest block">Sections 12A & 80G Certified</span>
                    <span className="text-charcoal-muted">50% income tax deduction for corporate and individual donors under Indian law.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sage">
                  <ShieldCheck className="w-5 h-5 text-emerald-brand shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-forest block">Zero-Conflict Fiduciary Charter</span>
                    <span className="text-charcoal-muted">No board member or key management personnel derives financial dividends.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Checklist Grid */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-sage shadow-premium space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-sage/60">
                <span className="text-xs uppercase font-bold tracking-wider text-forest">
                  Corporate Due Diligence Factsheet
                </span>
                <span className="text-[11px] font-bold text-emerald-brand bg-emerald-subtle px-2.5 py-0.5 rounded-full">
                  Fully Verified FY 2024-25
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-ivory border border-sage/60 space-y-1">
                  <div className="text-charcoal-muted">Legal Entity</div>
                  <div className="font-bold text-forest">Section 8 Not-For-Profit Company</div>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory border border-sage/60 space-y-1">
                  <div className="text-charcoal-muted">Registration Act</div>
                  <div className="font-bold text-forest">Companies Act 2013, Ministry of Corporate Affairs</div>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory border border-sage/60 space-y-1">
                  <div className="text-charcoal-muted">Income Tax Exemption</div>
                  <div className="font-bold text-forest">Section 12A & 80G Validated</div>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory border border-sage/60 space-y-1">
                  <div className="text-charcoal-muted">MCA CSR Approval</div>
                  <div className="font-bold text-forest">CSR-1 Unique Regn. Approved</div>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory border border-sage/60 space-y-1">
                  <div className="text-charcoal-muted">NITI Aayog Portal</div>
                  <div className="font-bold text-forest">Enlisted on NGO Darpan</div>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory border border-sage/60 space-y-1">
                  <div className="text-charcoal-muted">Statutory Audits</div>
                  <div className="font-bold text-forest">Annual Independent CA Audits</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCsrModal}
                  className="py-3 px-6 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex-1 text-center"
                >
                  Request Due Diligence Dossier
                </button>
                <Link
                  to="/media-resources#governance"
                  className="py-3 px-6 rounded-xl border border-sage hover:border-forest text-forest font-bold text-xs uppercase tracking-wider transition-colors text-center"
                >
                  View Audited Disclosures
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership & Advisory Board */}
      <section id="leadership" className="py-24 bg-white border-b border-sage/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark">
                People of Purpose
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
                Leadership & Advisory Council
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted">
                Steered by seasoned practitioners across public policy, corporate sustainability, legal governance, and higher education.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(['All', 'Leadership', 'CSR Governance', 'Advisory Council'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-colors ${
                    activeCategory === cat
                      ? 'bg-forest text-white'
                      : 'bg-ivory border border-sage text-charcoal-muted hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member, i) => (
              <div 
                key={i}
                className="bg-ivory rounded-3xl p-6 border border-sage shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm shrink-0"
                    />
                    <div>
                      <h3 className="text-base font-bold text-forest">{member.name}</h3>
                      <p className="text-xs font-semibold text-emerald-brand">{member.role}</p>
                      <span className="text-[10px] uppercase font-bold text-charcoal-muted tracking-wider block mt-0.5">
                        {member.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-forest-light bg-sage/30 px-3 py-1.5 rounded-xl border border-sage/40">
                    {member.background}
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Partner With a Trust-First Social Institution
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto">
            Schedule an introductory briefing with our leadership team to discuss co-creating structured Schedule VII interventions.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenCsrModal}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 mx-auto"
            >
              <span>Schedule Exploratory CSR Dialogue</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

