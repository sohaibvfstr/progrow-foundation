import React, { useState, useEffect, useRef } from 'react';
import { useDialogAccessibility, inquiryEmail, downloadInquiry } from './dialogUtils';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building2, User, Mail, Phone, MapPin, IndianRupee, Sparkles } from 'lucide-react';

interface CsrModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFocusArea?: string;
}

export const CsrModal: React.FC<CsrModalProps> = ({ isOpen, onClose, initialFocusArea }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    budgetBracket: 'INR 15 Lakhs - 30 Lakhs (Pilot Cohort)',
    focusArea: initialFocusArea || 'Industry-Aligned Skill Development (Item ii)',
    geography: 'Tier-2 / Tier-3 Semi-Urban Hubs',
    projectScope: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogAccessibility(isOpen, onClose, dialogRef);
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      if (initialFocusArea) setFormData(previous => ({ ...previous, focusArea: initialFocusArea }));
    }
  }, [isOpen, initialFocusArea]);
  const recipient = 'csr@progrowfoundation.org';
  const subject = `CSR partnership inquiry — ${formData.companyName}`;
  const body = [
    `Company: ${formData.companyName}`, `Contact: ${formData.contactName}`,
    `Email: ${formData.email}`, `Phone: ${formData.phone}`,
    `Budget: ${formData.budgetBracket}`, `Focus: ${formData.focusArea}`,
    `Geography: ${formData.geography}`, '', formData.projectScope
  ].join('\n');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-fade-in">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="csr-dialog-title" tabIndex={-1}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elevated border border-sage relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close partnership inquiry"
          className="absolute top-5 right-5 p-2 rounded-full bg-ivory hover:bg-sage text-forest transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6" role="status">
            <div className="w-16 h-16 bg-emerald-subtle rounded-2xl flex items-center justify-center text-emerald-brand mx-auto">
              <Mail className="w-8 h-8" />
            </div>
            <h2 id="csr-dialog-title" className="text-2xl sm:text-3xl font-extrabold text-forest">Your inquiry is ready</h2>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto">
              Open the draft in your email app, review it, and press Send to contact our team.
              Your inquiry has not been sent yet.
            </p>
            <div className="p-4 rounded-2xl bg-ivory border border-sage/80 text-left text-xs space-y-2">
              <p><strong>To:</strong> {recipient}</p>
              <p><strong>Organisation:</strong> {formData.companyName}</p>
              <p><strong>Focus:</strong> {formData.focusArea}</p>
              <p><strong>Budget:</strong> {formData.budgetBracket}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={inquiryEmail(recipient, subject, body)} className="py-3 px-6 rounded-xl bg-forest text-white font-bold text-sm">Open email draft</a>
              <button type="button" onClick={() => downloadInquiry('progrow-partnership-inquiry.txt', recipient, subject, body)} className="py-3 px-6 rounded-xl border border-sage text-forest font-bold text-sm">Download draft</button>
            </div>
            <p className="text-xs text-charcoal-muted">No email app configured? Download the draft and paste it into your webmail.</p>
            <div className="flex justify-center gap-5">
              <button type="button" onClick={() => setSubmitted(false)} className="text-sm underline text-forest">Edit details</button>
              <button type="button" onClick={handleReset} className="text-sm underline text-forest">Close</button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-brand mb-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Corporate CSR Co-Creation Portal</span>
              </div>
              <h2 id="csr-dialog-title" className="text-2xl sm:text-3xl font-extrabold text-forest">
                Initiate a CSR Partnership
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Collaborate with Progrow Foundation to design, implement, and monitor high-impact Schedule VII programmes with complete governance and third-party audit readiness.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="csr-company-organisation-name" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                    Company / Organisation Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
                    <input id="csr-company-organisation-name"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Enterprises Ltd."
                      className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="csr-contact-person-name" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
                    <input id="csr-contact-person-name"
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Rajesh Khurana"
                      className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="csr-corporate-email-address" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                    Corporate Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
                    <input id="csr-corporate-email-address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="csr-phone-mobile-number" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
                    <input id="csr-phone-mobile-number"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="csr-annual-csr-allocation-bracket" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                    Annual CSR Allocation Bracket
                  </label>
                  <select id="csr-annual-csr-allocation-bracket"
                    value={formData.budgetBracket}
                    onChange={(e) => setFormData({ ...formData, budgetBracket: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                  >
                    <option>INR 15 Lakhs - 30 Lakhs (Pilot Cohort)</option>
                    <option>INR 30 Lakhs - 75 Lakhs (Regional Hub)</option>
                    <option>INR 75 Lakhs - 2 Crores (Multi-District)</option>
                    <option>INR 2 Crores - 5 Crores+ (Statewide Coalition)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="csr-target-focus-area-schedule-vii" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                    Target Focus Area (Schedule VII)
                  </label>
                  <select id="csr-target-focus-area-schedule-vii"
                    value={formData.focusArea}
                    onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                  >
                    {initialFocusArea && <option>{initialFocusArea}</option>}
                    <option>Industry-Aligned Skill Development (Item ii)</option>
                    <option>Digital & Foundational School Education (Item ii)</option>
                    <option>Women Micro-Enterprise & Livelihood (Item iii)</option>
                    <option>Youth Career Readiness & Finishing School (Item ii)</option>
                    <option>Green Skills & Climate-Resilient Livelihoods (Item iv)</option>
                    <option>Integrated Community Hubs (Item x)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="csr-target-geographic-preference" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                  Target Geographic Preference
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
                  <input id="csr-target-geographic-preference"
                    type="text"
                    value={formData.geography}
                    onChange={(e) => setFormData({ ...formData, geography: e.target.value })}
                    placeholder="e.g., Near Plant in Pune / NCR / Aspirational Districts / Pan-India"
                    className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="csr-project-vision-custom-requirements-optional" className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                  Project Vision & Custom Requirements (Optional)
                </label>
                <textarea id="csr-project-vision-custom-requirements-optional"
                  rows={3}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Share any specific goals, target cohorts (e.g. women in tech, rural schools), or timeline expectations..."
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-ivory/50"
                />
              </div>

              {/* Compliance Note */}
              <div className="p-3 bg-sage/30 rounded-xl border border-sage/60 flex items-start gap-2.5 text-[11px] text-charcoal-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-brand shrink-0 mt-0.5" />
                <span>
                  Prepare an email inquiry below. You can review and send it from your email app, or download a copy. Nothing is sent automatically.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Prepare partnership inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

