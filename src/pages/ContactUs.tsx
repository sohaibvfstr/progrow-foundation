import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  ShieldCheck, Clock, Building2, HelpCircle, ArrowUpRight 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { inquiryEmail, downloadInquiry } from '../components/dialogUtils';
import { faqs } from '../data/faqData';

interface ContactUsProps {
  onOpenCsrModal: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onOpenCsrModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    category: 'CSR Partnership Inquiry (Schedule VII)',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const recipient = formData.category.includes('Volunteering') ? 'mentors@progrowfoundation.org' : formData.category.includes('CSR') ? 'csr@progrowfoundation.org' : 'secretariat@progrowfoundation.org';
  const subject = formData.subject || formData.category;
  const body = [`Name: ${formData.name}`, `Email: ${formData.email}`, `Phone: ${formData.phone}`, `Organisation: ${formData.organization}`, `Category: ${formData.category}`, '', formData.message].join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      city: 'New Delhi (National Secretariat)',
      role: 'Statutory Affairs, Policy & Governance',
      address: '7th Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001',
      phone: '+91 (011) 4982 7100',
      email: 'delhi@progrowfoundation.org'
    },
    {
      city: 'Bengaluru (Innovation & Skilling Hub)',
      role: 'Curriculum Engineering, Labs & Tech Hubs',
      address: 'Tower B, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
      phone: '+91 (080) 4122 8900',
      email: 'bengaluru@progrowfoundation.org'
    },
    {
      city: 'Mumbai (Enterprise & CSR Directorate)',
      role: 'Corporate Alliances & ESG Reporting',
      address: 'One BKC, G Block, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051',
      phone: '+91 (022) 6744 3200',
      email: 'csr@progrowfoundation.org'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Connect With Our Team"
        title="Start the Dialogue."
        highlightWord="Let’s Shape the Future."
        subtitle="Whether you represent a corporate CSR committee seeking a trusted implementation partner, an academic institution looking to host a hub, or a passionate mentor, our leadership team is ready to connect."
        breadcrumb={[{ label: 'Contact Us' }]}
        primaryCta={{ label: 'Direct CSR Portal', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'Explore Offices', to: '#offices' }}
      />

      {/* Main Grid: Form & Direct Contact Desks */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 bg-ivory rounded-3xl p-6 sm:p-10 border border-sage shadow-premium">
              {submitted ? (
                <div className="text-center py-12 space-y-5" role="status">
                  <Mail className="w-10 h-10 text-forest mx-auto" />
                  <h3 className="text-2xl sm:text-3xl font-black text-forest">Your message is ready</h3>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto">Review the draft in your email app and press Send. Your message has not been sent yet.</p>
                  <p className="text-xs text-charcoal-muted">To: {recipient}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href={inquiryEmail(recipient, subject, body)} className="py-3 px-6 rounded-xl bg-forest text-white text-sm font-bold">Open email draft</a>
                    <button type="button" onClick={() => downloadInquiry('progrow-contact-inquiry.txt', recipient, subject, body)} className="py-3 px-6 rounded-xl border border-sage text-forest text-sm font-bold">Download draft</button>
                  </div>
                  <p className="text-xs text-charcoal-muted">No email app? Download the draft to use in your webmail.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-forest underline">Edit your message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand block mb-1">
                      Direct Communication Desk
                    </span>
                    <h3 className="text-2xl font-black text-forest">Send Us a Detailed Message</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-your-full-name" className="block text-xs font-bold text-forest uppercase mb-1">Your Full Name *</label>
                      <input id="contact-your-full-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sanya Kapoor"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-corporate-personal-email" className="block text-xs font-bold text-forest uppercase mb-1">Corporate / Personal Email *</label>
                      <input id="contact-corporate-personal-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sanya@company.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone-number" className="block text-xs font-bold text-forest uppercase mb-1">Phone Number *</label>
                      <input id="contact-phone-number"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-organization-affiliation" className="block text-xs font-bold text-forest uppercase mb-1">Organization / Affiliation</label>
                      <input id="contact-organization-affiliation"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Tata Consultancy Services"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-nature-of-inquiry" className="block text-xs font-bold text-forest uppercase mb-1">Nature of Inquiry</label>
                      <select id="contact-nature-of-inquiry"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                      >
                        <option>CSR Partnership Inquiry (Schedule VII)</option>
                        <option>Volunteering & Mentorship Program</option>
                        <option>Academic / College Collaboration</option>
                        <option>Research & Media Inquiry</option>
                        <option>General Support / 80G Receipts</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-forest uppercase mb-1">Subject</label>
                      <input id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief topic of discussion..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-your-message" className="block text-xs font-bold text-forest uppercase mb-1">Your Message *</label>
                    <textarea id="contact-your-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details of your proposed programme, query, or timeline..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-sage/60 flex items-center gap-2 text-[11px] text-charcoal-muted">
                    <ShieldCheck className="w-4 h-4 text-emerald-brand shrink-0" />
                    <span>This form prepares an email draft. Review and send it from your email app; nothing is sent automatically.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Prepare email draft</span>
                    <Send className="w-4 h-4 text-gold" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Desks & Quick Reach */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark block mb-1">
                    Direct Communications
                  </span>
                  <h3 className="text-2xl font-black text-forest">Dedicated Team Desks</h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                    Reach the relevant vertical directly for accelerated coordination.
                  </p>
                </div>

                {/* Desk Cards */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-ivory border border-sage space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-forest">Corporate CSR Desk</span>
                      <span className="text-[10px] bg-emerald-subtle text-emerald-brand px-2 py-0.5 rounded font-bold">Priority</span>
                    </div>
                    <div className="text-xs text-charcoal-muted">For Schedule VII project co-creation, proposals, and MCA CSR-1 documentation.</div>
                    <a href="mailto:csr@progrowfoundation.org" className="text-xs font-bold text-forest hover:text-emerald-brand block pt-1">
                      csr@progrowfoundation.org
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-ivory border border-sage space-y-1">
                    <div className="text-xs font-bold text-forest">Volunteer & Mentorship Hub</div>
                    <div className="text-xs text-charcoal-muted">For professionals joining our 1-on-1 student career pairing network.</div>
                    <a href="mailto:mentors@progrowfoundation.org" className="text-xs font-bold text-forest hover:text-emerald-brand block pt-1">
                      mentors@progrowfoundation.org
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-ivory border border-sage space-y-1">
                    <div className="text-xs font-bold text-forest">Statutory & Audit Secretariat</div>
                    <div className="text-xs text-charcoal-muted">For Section 80G tax receipts, balance sheets, and governance records.</div>
                    <a href="mailto:secretariat@progrowfoundation.org" className="text-xs font-bold text-forest hover:text-emerald-brand block pt-1">
                      secretariat@progrowfoundation.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Fast SLA Banner */}
              <div className="p-5 bg-forest text-white rounded-2xl border border-forest-light space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <Clock className="w-4 h-4" />
                  <span>Our Service Level Commitment</span>
                </div>
                <p className="text-xs text-ivory/80 leading-relaxed">
                  Every formal corporate CSR or institutional inquiry receives a personalized response from an executive director within <strong>24 business hours</strong>.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Office Locations Strip */}
      <section id="offices" className="py-24 bg-ivory border-b border-sage/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              National Presence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              Our Strategic Hubs
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              Operating out of three key regional nodes to facilitate close corporate collaboration and rapid grassroots field mobilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sage shadow-subtle hover:shadow-premium transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-forest">{office.city}</h3>
                    <p className="text-xs font-semibold text-emerald-brand mt-0.5">{office.role}</p>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {office.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-sage/60 space-y-1.5 text-xs">
                  <div className="text-charcoal font-medium">
                    <strong className="text-forest">Phone:</strong> {office.phone}
                  </div>
                  <div className="text-charcoal font-medium">
                    <strong className="text-forest">Email:</strong> {office.email}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* General FAQs Accordion */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-gold-dark">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-forest tracking-tight">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-sage bg-ivory overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-forest"
                  >
                    <span>{faq.question}</span>
                    <span className={`text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div id={`faq-answer-${faq.id}`} className="p-5 pt-0 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-sage/40 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

