import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Compass, Award, Users, BookOpen, 
  ArrowUpRight, ArrowRight, CheckCircle2, HeartHandshake, 
  Clock, MapPin, Send, ShieldCheck, Star, Briefcase 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { useDialogAccessibility, inquiryEmail, downloadInquiry } from '../components/dialogUtils';

interface YouthEmpowermentProps {
  onOpenCsrModal: () => void;
}

export const YouthEmpowerment: React.FC<YouthEmpowermentProps> = ({ onOpenCsrModal }) => {
  const [fellowshipModalOpen, setFellowshipModalOpen] = useState(false);
  const [fellowshipSubmitted, setFellowshipSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    track: 'Progrow Youth Fellowship (6-Month Stipended)',
    statement: ''
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeFellowship = () => { setFellowshipModalOpen(false); setFellowshipSubmitted(false); };
  useDialogAccessibility(fellowshipModalOpen, closeFellowship, dialogRef);
  const recipient = 'mentors@progrowfoundation.org';
  const subject = `Youth fellowship inquiry — ${applicant.name}`;
  const body = [`Name: ${applicant.name}`, `Email: ${applicant.email}`, `Phone: ${applicant.phone}`, `College: ${applicant.college}`, `City: ${applicant.city}`, `Track: ${applicant.track}`, '', applicant.statement].join('\n');

  const handleFellowshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFellowshipSubmitted(true);
  };

  const tracks = [
    {
      title: 'The Progrow Youth Fellowship',
      tag: 'Flagship 6-Month Cohort',
      desc: 'An immersive grassroots leadership residency pairing tier-2 college graduates with local community development labs, supported by a monthly stipend and senior executive mentorship.',
      stipend: 'Stipended Cohort',
      duration: '6 Months Full-Time',
      icon: Compass,
      highlights: [
        'Real-world community problem-solving capstone projects',
        'Direct mentorship from Fortune 500 corporate leaders',
        'Stipend support to eliminate economic pressure',
        'Alumni transition into social impact & corporate careers'
      ]
    },
    {
      title: 'Mentor Connect Network',
      tag: '1-on-1 Executive Pairing',
      desc: 'Connecting ambitious first-generation learners with corporate professionals for weekly guidance in resume design, interview simulations, workplace psychology, and career pathing.',
      stipend: 'Zero Cost for Students',
      duration: '12 Weeks (Weekly Sessions)',
      icon: Users,
      highlights: [
        'Curated 1-on-1 mentor matching based on career aspirations',
        'Industry insider insights into tech, finance, and logistics',
        'Confidence building and conversational English polish',
        'Direct LinkedIn and professional networking assistance'
      ]
    },
    {
      title: 'Innovation & Social Hackathons',
      tag: 'Collegiate Problem Solving',
      desc: 'Annual hackathons challenging collegiate youth to design tech-first solutions for local municipal, agricultural, water conservation, and healthcare issues.',
      stipend: 'Seed Grant Awards',
      duration: 'Annual Hackathon + Incubator',
      icon: Award,
      highlights: [
        'Inter-college multidisciplinary design teams',
        'Prototyping grants up to INR 1,50,000 for top concepts',
        'Technical workshops by experienced software architects',
        'Incubation runway through Progrow Udyam initiative'
      ]
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Youth Empowerment & Leadership"
        title="Unleashing Ambition."
        highlightWord="Shaping Tomorrow's Leaders."
        subtitle="Empowering first-generation college students and grassroots changemakers with technical competencies, executive mentorship, leadership fellowships, and high-growth career pathways."
        breadcrumb={[{ label: 'Youth Empowerment' }]}
        primaryCta={{ label: 'Apply for Youth Fellowship', onClick: () => setFellowshipModalOpen(true) }}
        secondaryCta={{ label: 'Become a Corporate Mentor', to: '/get-involved' }}
      />

      {/* Overview Manifesto */}
      <section className="py-20 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
                The Youth Dividend
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
                India’s Demographic Strength Demands Agency, Not Just Degrees.
              </h2>
              <p className="text-base text-charcoal-muted leading-relaxed">
                Millions of young people across India earn college degrees every year, yet nearly half lack the practical workplace readiness, digital fluencies, and professional networks needed to thrive in modern competitive economies.
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Progrow Youth Hub creates a launchpad where aspirational youth transition from passive job-seekers into proactive problem-solvers. We combine technical rigor with emotional resilience, ensuring students have the confidence to walk into any boardroom or startup pitch.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-ivory border border-sage">
                  <div className="text-2xl font-black text-forest">85%</div>
                  <div className="text-xs text-charcoal-muted mt-0.5">First-generation college transition rate.</div>
                </div>
                <div className="p-4 rounded-2xl bg-ivory border border-sage">
                  <div className="text-2xl font-black text-forest">300+</div>
                  <div className="text-xs text-charcoal-muted mt-0.5">Corporate volunteer mentors mobilized.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3]">
                <img
                  src="/images/together.jpg"
                  alt="Youth team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Core Youth Program Tracks */}
      <section className="py-24 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark">
              Structured Pathways
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              Pillars of the Youth Hub
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              Whether you are an aspiring student, a corporate volunteer eager to mentor, or an enterprise looking to sponsor a youth cohort, here is how we deliver transformative growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sage shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center">
                      {React.createElement(track.icon, { className: 'w-6 h-6' })}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-brand bg-emerald-subtle px-3 py-1 rounded-full">
                      {track.stipend}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      {track.tag}
                    </span>
                    <h3 className="text-xl font-bold text-forest mt-0.5">
                      {track.title}
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {track.desc}
                  </p>

                  <div className="pt-2 border-t border-sage/40 space-y-2">
                    <span className="text-[11px] font-bold text-forest block">Programme Highlights:</span>
                    {track.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-brand shrink-0 mt-0.5" />
                        <span className="text-[11px]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sage/60 mt-6 flex items-center justify-between">
                  <div className="text-[11px] text-charcoal-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{track.duration}</span>
                  </div>

                  <button
                    onClick={() => setFellowshipModalOpen(true)}
                    className="text-xs font-bold text-forest hover:text-emerald-brand flex items-center gap-1 transition-colors"
                  >
                    <span>Apply / Inquire</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Student Voices & Testimonials */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Youth Voices
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              From Hesitation to Confident Leadership
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              First-hand perspectives from youth who navigated our skilling and fellowship cohorts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-ivory border border-sage shadow-subtle space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-sage">
                  <img
                    src="/images/photo-1534528741775-53994a69daeb.jpg"
                    alt="Pooja Verma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest">Pooja Verma, 21</h4>
                  <p className="text-xs text-charcoal-muted">Fellowship Cohort 3 • From Bareilly, UP</p>
                </div>
              </div>
              <blockquote className="text-sm font-serif italic text-forest leading-relaxed">
                "The fellowship gave me a safe space to fail, iterate, and build. Working on a local water-testing iot sensor project alongside senior tech mentors taught me more about real-world engineering than four years of lecture notes."
              </blockquote>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-sage shadow-subtle space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-sage">
                  <img
                    src="/images/photo-1507003211169-0a1dd7228f2d.jpg"
                    alt="Karthik Nair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest">Karthik Nair, 22</h4>
                  <p className="text-xs text-charcoal-muted">Mentor Connect Scholar • From Mysore, Karnataka</p>
                </div>
              </div>
              <blockquote className="text-sm font-serif italic text-forest leading-relaxed">
                "Having a corporate vice president review my resume and run mock interviews every Saturday gave me the courage to crack campus recruitment. I am the first person in my family with an IT appointment letter."
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* Application Modal */}
      {fellowshipModalOpen && (
        <div onClick={closeFellowship} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-fade-in">
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="fellowship-dialog-title" tabIndex={-1} onClick={event => event.stopPropagation()} className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-sage shadow-elevated relative">
            
            {fellowshipSubmitted ? (
              <div className="text-center py-8 space-y-5" role="status">
                <Send className="w-10 h-10 text-forest mx-auto" />
                <h3 id="fellowship-dialog-title" className="text-2xl font-black text-forest">Your fellowship inquiry is ready</h3>
                <p className="text-sm text-charcoal-muted">Open the draft in your email app and press Send to reach our team. Your inquiry has not been sent yet.</p>
                <a href={inquiryEmail(recipient, subject, body)} className="block py-3 px-6 rounded-xl bg-forest text-white text-sm font-bold">Open email draft</a>
                <button type="button" onClick={() => downloadInquiry('progrow-fellowship-inquiry.txt', recipient, subject, body)} className="py-3 px-6 rounded-xl border border-sage text-forest text-sm font-bold">Download draft for webmail</button>
                <div className="flex justify-center gap-5">
                  <button type="button" onClick={() => setFellowshipSubmitted(false)} className="text-sm underline text-forest">Edit details</button>
                  <button type="button" onClick={closeFellowship} className="text-sm underline text-forest">Close</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-sage mb-4">
                  <div>
                    <h3 id="fellowship-dialog-title" className="text-xl font-black text-forest">Explore a youth fellowship</h3>
                    <p className="text-xs text-charcoal-muted">Free of charge for eligible college students & graduates.</p>
                  </div>
                  <button
                    onClick={closeFellowship}
                    aria-label="Close fellowship inquiry"
                    className="text-xs font-bold text-charcoal-muted hover:text-forest"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleFellowshipSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor="fellowship-your-full-name" className="block text-xs font-bold text-forest uppercase mb-1">Your Full Name *</label>
                    <input id="fellowship-your-full-name"
                      type="text"
                      required
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      placeholder="e.g. Aarti Deshmukh"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="fellowship-email" className="block text-xs font-bold text-forest uppercase mb-1">Email *</label>
                      <input id="fellowship-email"
                        type="email"
                        required
                        value={applicant.email}
                        onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                        placeholder="aarti@gmail.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="fellowship-phone-number" className="block text-xs font-bold text-forest uppercase mb-1">Phone Number *</label>
                      <input id="fellowship-phone-number"
                        type="tel"
                        required
                        value={applicant.phone}
                        onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="fellowship-college-institution" className="block text-xs font-bold text-forest uppercase mb-1">College / Institution</label>
                      <input id="fellowship-college-institution"
                        type="text"
                        value={applicant.college}
                        onChange={(e) => setApplicant({ ...applicant, college: e.target.value })}
                        placeholder="e.g. Govt. College of Arts & Science"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="fellowship-city-district" className="block text-xs font-bold text-forest uppercase mb-1">City / District</label>
                      <input id="fellowship-city-district"
                        type="text"
                        value={applicant.city}
                        onChange={(e) => setApplicant({ ...applicant, city: e.target.value })}
                        placeholder="e.g. Nashik, Maharashtra"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fellowship-preferred-track" className="block text-xs font-bold text-forest uppercase mb-1">Preferred Track</label>
                    <select id="fellowship-preferred-track"
                      value={applicant.track}
                      onChange={(e) => setApplicant({ ...applicant, track: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    >
                      <option>Progrow Youth Fellowship (6-Month Stipended)</option>
                      <option>Mentor Connect (1-on-1 Executive Pairing)</option>
                      <option>Tech & Data Skills Bootcamp</option>
                      <option>Collegiate Innovation Hackathon</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fellowship-why-do-you-wish-to-join-brief-statement" className="block text-xs font-bold text-forest uppercase mb-1">Why do you wish to join? (Brief statement)</label>
                    <textarea id="fellowship-why-do-you-wish-to-join-brief-statement"
                      rows={2}
                      value={applicant.statement}
                      onChange={(e) => setApplicant({ ...applicant, statement: e.target.value })}
                      placeholder="Share your goals and what you hope to achieve..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>

                  <p className="text-xs text-charcoal-muted">Prepare a draft to review and send through your email app.</p>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Prepare fellowship inquiry
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Corporate Sponsorship Invitation */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Sponsor a Youth Fellowship Cohort
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto">
            Enable 50 to 500 first-generation college graduates in your factory or office catchment area to receive stipends, tech certifications, and corporate placements.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenCsrModal}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 mx-auto"
            >
              <span>Explore Youth CSR Sponsorship Models</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

