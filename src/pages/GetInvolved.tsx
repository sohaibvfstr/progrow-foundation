import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, Users, Building2, School, Heart, 
  CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck, 
  Send, Sparkles, Clock, Globe 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { inquiryEmail, downloadInquiry } from '../components/dialogUtils';

interface GetInvolvedProps {
  onOpenCsrModal: () => void;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({ onOpenCsrModal }) => {
  const [activeTab, setActiveTab] = useState<'volunteer' | 'institution' | 'donor'>('volunteer');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Mock Interviewer & Resume Coach',
    availability: '2-3 Hours / Fortnight (Virtual)',
    campus: '',
    message: ''
  });

  const recipient = activeTab === 'volunteer' ? 'mentors@progrowfoundation.org' : 'secretariat@progrowfoundation.org';
  const subject = `Progrow ${activeTab === 'volunteer' ? 'mentorship' : activeTab === 'institution' ? 'institutional partnership' : 'donor'} inquiry`;
  const body = [`Name: ${volunteerForm.name}`, `Email: ${volunteerForm.email}`, `Phone: ${volunteerForm.phone}`, `Organisation: ${volunteerForm.organization}`, ...(activeTab === 'volunteer' ? [`Mentorship: ${volunteerForm.role}`, `Availability: ${volunteerForm.availability}`] : []), ...(activeTab === 'institution' ? [`Campus: ${volunteerForm.campus}`] : []), '', volunteerForm.message].join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const pathways = [
    {
      id: 'corporate',
      title: 'Corporate CSR Partners',
      icon: Building2,
      tag: 'Strategic Co-Creation',
      desc: 'Collaborate with us under Schedule VII to fund and deploy turn-key skilling hubs, smart school classrooms, or women micro-enterprise incubators.',
      actionLabel: 'Explore CSR Gateways',
      onClick: onOpenCsrModal,
      points: [
        'MCA Form CSR-1, 12A, and 80G compliant',
        'Independent quarterly CA utilization audits',
        'Custom geographical mapping around corporate sites'
      ]
    },
    {
      id: 'volunteer',
      title: 'Professional Mentors & Volunteers',
      icon: Users,
      tag: 'Skill-Based Volunteering',
      desc: 'Share your professional expertise with first-generation college students through 1-on-1 virtual mentoring, mock interviews, and technical masterclasses.',
      actionLabel: 'Apply as Mentor Below',
      onClick: () => {
        setActiveTab('volunteer');
        setFormSubmitted(false);
        const el = document.getElementById('volunteer-form');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
      points: [
        'Curated 1-on-1 student pairing matching your domain',
        'Flexible virtual schedule (2 hours per fortnight)',
        'Structured curriculum playbooks provided'
      ]
    },
    {
      id: 'institution',
      title: 'Colleges & Academic Institutions',
      icon: School,
      tag: 'Hub Host & Referral Node',
      desc: 'Partner with Progrow Foundation to establish tech skilling labs and career finishing schools on your campus, elevating student placement metrics.',
      actionLabel: 'Institutional Inquiry',
      onClick: () => {
        setActiveTab('institution');
        setFormSubmitted(false);
        const el = document.getElementById('volunteer-form');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
      points: [
        'Complimentary employability modules for students',
        'Guest lectures from Fortune 500 leaders',
        'Industry linkage drives and recruitment networks'
      ]
    },
    {
      id: 'donor',
      title: 'Individual Donors & Philanthropists',
      icon: Heart,
      tag: 'Tax-Deductible 80G Gifts',
      desc: 'Sponsor a child’s STEM education or a youth’s technical certification grant. Every contribution is backed by immediate 80G tax exemption receipts.',
      actionLabel: 'Support A Learner',
      onClick: () => {
        setActiveTab('donor');
        setFormSubmitted(false);
        const el = document.getElementById('volunteer-form');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
      points: [
        '50% tax deduction under Section 80G',
        'Instant digital receipts with transaction reference',
        'Annual impact report detailing learner progress'
      ]
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Join the Coalition for Growth"
        title="Be the Catalyst."
        highlightWord="Enable the Opportunity."
        subtitle="Social progress is built through collaborative human commitment. Discover the diverse pathways through which corporations, leaders, educators, and mentors join hands with Progrow Foundation."
        breadcrumb={[{ label: 'Get Involved' }]}
        primaryCta={{ label: 'Corporate CSR Partnership', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'Volunteer as Mentor', to: '#volunteer-form' }}
      />

      {/* 4 Clear Engagement Channels Grid */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Collaborative Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              Four Pathways to Meaningful Action
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              Choose the channel that aligns with your organizational capabilities or personal philanthropic aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((p) => (
              <div
                key={p.id}
                className="bg-ivory rounded-3xl p-6 sm:p-8 border border-sage shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center">
                      {React.createElement(p.icon, { className: 'w-6 h-6' })}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-brand bg-emerald-subtle px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-forest">{p.title}</h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed mt-1">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-sage/40 space-y-2">
                    {p.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-brand shrink-0 mt-0.5" />
                        <span className="text-[11px]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sage/60 mt-6">
                  <button
                    onClick={p.onClick}
                    className="w-full py-3 px-4 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>{p.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Engagement Intake Form Section */}
      <section id="volunteer-form" className="py-24 bg-sage/20 border-b border-sage/60 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-sage shadow-premium overflow-hidden">
            
            {/* Header Tabs */}
            <div className="bg-forest p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-gold block mb-1">
                  Engagement Intake Portal
                </span>
                <h3 className="text-2xl font-black">Register Your Interest</h3>
              </div>

              {/* Tabs */}
              <div role="group" aria-label="Choose how to get involved" className="flex flex-wrap bg-forest-dark p-1 rounded-xl border border-forest-light">
                <button
                  aria-pressed={activeTab === 'volunteer'}
                  onClick={() => { setActiveTab('volunteer'); setFormSubmitted(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'volunteer' ? 'bg-gold text-forest' : 'text-ivory/70 hover:text-white'
                  }`}
                >
                  Mentor / Volunteer
                </button>
                <button
                  aria-pressed={activeTab === 'institution'}
                  onClick={() => { setActiveTab('institution'); setFormSubmitted(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'institution' ? 'bg-gold text-forest' : 'text-ivory/70 hover:text-white'
                  }`}
                >
                  College Partner
                </button>
                <button
                  aria-pressed={activeTab === 'donor'}
                  onClick={() => { setActiveTab('donor'); setFormSubmitted(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'donor' ? 'bg-gold text-forest' : 'text-ivory/70 hover:text-white'
                  }`}
                >
                  Individual Donor
                </button>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-10">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-5" role="status">
                  <Send className="w-10 h-10 text-forest mx-auto" />
                  <h4 className="text-2xl font-black text-forest">Let’s start a conversation</h4>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto">Your inquiry is prepared. Open your email draft, review it, and press Send. Nothing has been sent yet.</p>
                  <p className="text-xs text-charcoal-muted">To: {recipient}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href={inquiryEmail(recipient, subject, body)} className="py-3 px-6 rounded-xl bg-forest text-white text-sm font-bold">Open email draft</a>
                    <button type="button" onClick={() => downloadInquiry('progrow-get-involved.txt', recipient, subject, body)} className="py-3 px-6 rounded-xl border border-sage text-forest text-sm font-bold">Download draft</button>
                  </div>
                  <p className="text-xs text-charcoal-muted">Use the download if you prefer webmail or don’t have an email app.</p>
                  <button onClick={() => setFormSubmitted(false)} className="text-sm text-forest underline">Edit your details</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="involved-full-name" className="block text-xs font-bold text-forest uppercase mb-1">Full Name *</label>
                      <input id="involved-full-name"
                        type="text"
                        required
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        placeholder="e.g. Anand Murthy"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="involved-email-address" className="block text-xs font-bold text-forest uppercase mb-1">Email Address *</label>
                      <input id="involved-email-address"
                        type="email"
                        required
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        placeholder="anand@company.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="involved-phone-number" className="block text-xs font-bold text-forest uppercase mb-1">Phone Number *</label>
                      <input id="involved-phone-number"
                        type="tel"
                        required
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="involved-company-institution" className="block text-xs font-bold text-forest uppercase mb-1">Company / Institution</label>
                      <input id="involved-company-institution"
                        type="text"
                        value={volunteerForm.organization}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, organization: e.target.value })}
                        placeholder="e.g. Infosys / Govt Arts College"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>
                  </div>

                  {activeTab === 'volunteer' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="involved-area-of-mentorship" className="block text-xs font-bold text-forest uppercase mb-1">Area of Mentorship</label>
                        <select id="involved-area-of-mentorship"
                          value={volunteerForm.role}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                        >
                          <option>Mock Interviewer & Resume Coach</option>
                          <option>Tech & Coding Mentor (Python, Cloud, Data)</option>
                          <option>Business & Spoken English Facilitator</option>
                          <option>Women Micro-Enterprise Business Advisor</option>
                          <option>Guest Keynote / Leadership Speaker</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="involved-time-availability" className="block text-xs font-bold text-forest uppercase mb-1">Time Availability</label>
                        <select id="involved-time-availability"
                          value={volunteerForm.availability}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                        >
                          <option>2 Hours / Week (Virtual)</option>
                          <option>2-3 Hours / Fortnight (Virtual)</option>
                          <option>Weekend Hackathon Evaluator</option>
                          <option>Monthly 1-Hour Masterclass</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeTab === 'institution' && (
                    <div>
                      <label htmlFor="involved-campus-profile-student-strength" className="block text-xs font-bold text-forest uppercase mb-1">Campus Profile & Student Strength</label>
                      <input id="involved-campus-profile-student-strength"
                        type="text"
                        value={volunteerForm.campus}
                        onChange={event => setVolunteerForm({ ...volunteerForm, campus: event.target.value })}
                        placeholder="e.g. Tier-3 autonomous college with 1,200 final-year arts and science graduates"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>
                  )}

                  {activeTab === 'donor' && (
                    <div className="p-4 bg-gold-subtle rounded-xl border border-gold/40 text-xs text-charcoal-muted">
                      <strong className="text-forest block mb-1">80G Tax Exemption Notice:</strong>
                      Progrow Foundation is certified under Section 80G of the Income Tax Act 1961. All eligible contributions receive a verified digital tax certificate with automated filing support.
                    </div>
                  )}

                  <div>
                    <label htmlFor="involved-message-or-comments-optional" className="block text-xs font-bold text-forest uppercase mb-1">Message or Comments (Optional)</label>
                    <textarea id="involved-message-or-comments-optional"
                      rows={2}
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      placeholder="Share any questions or relevant skills you'd like to contribute..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Prepare email inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

