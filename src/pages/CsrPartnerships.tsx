import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, Award, FileCheck, Users, 
  ArrowUpRight, ArrowRight, IndianRupee, Sparkles, Building2, 
  MapPin, Clock, Download, ChevronRight, HelpCircle 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ImpactEstimator } from '../components/ImpactEstimator';
import { faqs } from '../data/faqData';

interface CsrPartnershipsProps {
  onOpenCsrModal: () => void;
}

export const CsrPartnerships: React.FC<CsrPartnershipsProps> = ({ onOpenCsrModal }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('csr-1');

  const csrFaqs = faqs.filter(f => f.category === 'CSR & Compliance');

  const complianceBadges = [
    {
      title: 'MCA Form CSR-1',
      subtitle: 'Official MCA Registration',
      desc: 'Formally authorized by the Ministry of Corporate Affairs to undertake Section 135 corporate social responsibility programmes across India.'
    },
    {
      title: 'Section 12A & 80G',
      subtitle: 'Income Tax Exemption',
      desc: 'Tax-exempt status verified by the Director General of Income Tax (Exemption). Corporate and donor funds qualify for 50% deduction.'
    },
    {
      title: 'Schedule VII Aligned',
      subtitle: 'Statutory Prescribed Scope',
      desc: 'Programmes meticulously mapped to Items (ii), (iii), (iv) and (x) of Schedule VII under the Companies Act 2013.'
    },
    {
      title: 'Independent CA Audits',
      subtitle: 'Quarterly Utilization Certificates',
      desc: 'Rigorous milestone-linked fund deployment with independent statutory audits, bank reconciliation logs, and itemized accounts.'
    }
  ];

  const lifecycleStages = [
    {
      num: '01',
      title: 'Needs Assessment & Feasibility',
      desc: 'We conduct scientific baseline surveys around your corporate manufacturing plants, operational offices, or selected aspirational districts, analyzing skill deficits, school infrastructure, and women’s economic mobility.'
    },
    {
      num: '02',
      title: 'Bespoke Co-Creation & MoU',
      desc: 'We tailor the project charter, target KPIs, governance timeline, and budget heads to mirror your Board CSR Committee mandate, signing a detailed bipartite or tripartite MoU.'
    },
    {
      num: '03',
      title: 'Ground Mobilization & Rollout',
      desc: 'We deploy master instructors, set up solar-powered learning hubs or mobile skilling units, onboard beneficiaries through transparent socioeconomic screening, and commence coursework.'
    },
    {
      num: '04',
      title: 'Audited Governance & Reporting',
      desc: 'We submit quarterly progress reports, geo-tagged photographic verifications, beneficiary attendance ledgers, and certified CA Utilization Certificates (UCs).'
    },
    {
      num: '05',
      title: 'Third-Party Impact Evaluation',
      desc: 'Independent accredited rating agencies evaluate social return on investment (SROI), career wage uplift, and long-term community resilience, delivering board-ready impact disclosures.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero — Dark Theme for Premium Corporate Gravitas */}
      <PageHero
        darkTheme={true}
        eyebrow="Corporate CSR Partnerships Hub"
        title="Your CSR Mandate."
        highlightWord="Our Ground Integrity."
        subtitle="Collaborate with Progrow Foundation to design, implement, and monitor high-impact Schedule VII programmes with complete governance, zero co-mingling of capital, and verifiable third-party impact assessments."
        breadcrumb={[{ label: 'CSR Partnerships' }]}
        primaryCta={{ label: 'Initiate CSR Dialogue', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'Test CSR Impact Calculator', to: '#calculator' }}
      />

      {/* Statutory Credibility Seals Strip */}
      <section className="py-16 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Statutory Due Diligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-forest">
              Corporate Compliance & Fiduciary Standards
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Built from the ground up to satisfy the strictest ESG and audit requirements of Fortune 500, BSE/NSE listed, and multinational corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceBadges.map((badge, i) => (
              <div
                key={i}
                className="bg-ivory rounded-2xl p-6 border border-sage shadow-subtle hover:shadow-premium transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-forest">{badge.title}</h3>
                  <p className="text-xs font-semibold text-emerald-brand">{badge.subtitle}</p>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Schedule VII Mapping Matrix */}
      <section className="py-24 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark">
                Statutory Alignment
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight leading-[1.15]">
                Direct Alignment with Schedule VII (Companies Act 2013)
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Under Section 135 of the Indian Companies Act, eligible companies are mandated to allocate 2% of average net profits towards social development. Progrow Foundation’s programmes are designed to map precisely into prescribed Schedule VII categories.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-sage space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-forest">Schedule VII, Item (ii)</span>
                    <span className="text-[10px] bg-sage px-2 py-0.5 rounded font-bold text-forest">Education & Skilling</span>
                  </div>
                  <p className="text-xs text-charcoal-muted">
                    Promoting education, including special education and employment enhancing vocational skills especially among children, women, and youth.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sage space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-forest">Schedule VII, Item (iii)</span>
                    <span className="text-[10px] bg-sage px-2 py-0.5 rounded font-bold text-forest">Gender Equality</span>
                  </div>
                  <p className="text-xs text-charcoal-muted">
                    Promoting gender equality, empowering women, setting up self-help collectives, and livelihood enhancement projects.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sage space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-forest">Schedule VII, Item (iv)</span>
                    <span className="text-[10px] bg-sage px-2 py-0.5 rounded font-bold text-forest">Sustainability</span>
                  </div>
                  <p className="text-xs text-charcoal-muted">
                    Ensuring environmental sustainability, ecological balance, agroforestry, and renewable clean energy training.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Box */}
            <div className="lg:col-span-6 bg-forest rounded-3xl p-8 sm:p-10 text-white border border-forest-light shadow-premium space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gold">
                The Progrow Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                How We Protect Corporate Donor Capital
              </h3>
              
              <ul className="space-y-3 text-xs text-ivory/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Dedicated Escrow/Project Accounts:</strong> Zero pooling or diversion of funds. Every partner project maintains a segregated bank ledger.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Real-Time Digital Beneficiary Audits:</strong> Biometric/photo attendance and Aadhaar-masked identification preventing ghost enrollments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Board-Ready Dossiers:</strong> We provide slide decks, executive summaries, and audited UCs tailored for your Board CSR Committee meetings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Employee Engagement Opportunities:</strong> We facilitate structured volunteering days, mentorship hours, and corporate leadership visits.</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenCsrModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Request Statutory CSR Pitch Deck
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 360-Degree CSR Lifecycle */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              End-to-End Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              The 360° CSR Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              From exploratory concept discussion to post-completion third-party impact assessment, our five-stage lifecycle guarantees complete oversight.
            </p>
          </div>

          <div className="space-y-4">
            {lifecycleStages.map((stage, i) => (
              <div
                key={i}
                className="bg-ivory rounded-2xl p-6 sm:p-8 border border-sage shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-2 flex items-center gap-3">
                  <span className="text-3xl font-black text-gold font-mono">{stage.num}</span>
                  <span className="text-xs uppercase font-bold text-forest">Stage</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-lg font-bold text-forest">{stage.title}</h3>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive CSR Calculator Anchor Section */}
      <section id="calculator" className="py-24 bg-sage/20 border-b border-sage/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark">
              Simulation Tool
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              Model Your CSR Investment Outcomes
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              Select your proposed budget, targeted thematic pillar, and intervention geography to calculate immediate projected deliverables and social ROI.
            </p>
          </div>

          <ImpactEstimator onSelectModel={() => onOpenCsrModal()} />

        </div>
      </section>

      {/* CSR FAQ Accordion */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Due Diligence FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-forest tracking-tight">
              Frequently Asked Compliance Questions
            </h2>
            <p className="text-sm text-charcoal-muted">
              Key questions addressed for Corporate Sustainability Heads, Legal Counsels, and CSR Committees.
            </p>
          </div>

          <div className="space-y-4">
            {csrFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-sage bg-ivory overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-forest"
                  >
                    <span>{faq.question}</span>
                    <span className={`text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-sage/40 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Enterprise Contact Strip */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Schedule an Executive CSR Briefing
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto">
            Our Director of Strategic Partnerships is available to meet with your Board CSR Committee or Sustainability Leads to present tailored concept notes and financial budgets.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCsrModal}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Connect with CSR Directorate</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-forest-light hover:bg-forest-light/40 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Contact Regional Offices
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

