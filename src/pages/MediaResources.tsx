import React, { useState, useRef } from 'react';
import { 
  FileText, Download, ArrowUpRight, ArrowRight, Search, 
  Sparkles, ShieldCheck, CheckCircle2, Clock, 
  Tag, ExternalLink, X, BookOpen 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { useDialogAccessibility, inquiryEmail, downloadInquiry } from '../components/dialogUtils';
import { resources, ResourceItem } from '../data/resourcesData';

interface MediaResourcesProps {
  onOpenCsrModal: () => void;
}

export const MediaResources: React.FC<MediaResourcesProps> = ({ onOpenCsrModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewDoc, setPreviewDoc] = useState<ResourceItem | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogAccessibility(Boolean(previewDoc), () => setPreviewDoc(null), dialogRef);
  const requestSubject = `Resource request: ${previewDoc?.title ?? ''}`;
  const requestBody = `Hello Progrow team,\n\nI would like to request a copy of “${previewDoc?.title ?? ''}”. Please let me know whether this document is available.\n\nThank you.`;

  const filters = ['All', 'Whitepaper', 'Policy Brief', 'Annual Report', 'Governance', 'Case Study'];

  const filteredResources = resources.filter(r => {
    const matchesFilter = activeFilter === 'All' || r.type === activeFilter;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Research, Governance & Publications"
        title="Knowledge Repository."
        highlightWord="Empirical Rigor."
        subtitle="Access our research whitepapers, policy briefs, audited statutory financial filings, and annual impact frameworks designed for CSR decision-makers and policy researchers."
        breadcrumb={[{ label: 'Media & Resources' }]}
        primaryCta={{ label: 'Explore CSR Synergies', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'Request Media Kit', onClick: () => setPreviewDoc(resources[4]) }}
      />

      {/* Main Filter & Resources Grid */}
      <section className="py-20 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {filters.map((f) => (
                <button
                  key={f}
                  aria-pressed={activeFilter === f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs px-4 py-2 rounded-xl font-bold transition-all ${
                    activeFilter === f
                      ? 'bg-forest text-white shadow-xs'
                      : 'bg-white border border-sage text-charcoal-muted hover:text-forest'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
              <input
                type="search"
                aria-label="Search publications and reports"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications & reports..."
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
              />
            </div>

          </div>

          {/* Publications Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                id={res.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sage shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between scroll-mt-28"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-forest bg-sage/50 px-3 py-1 rounded-full border border-sage">
                      {res.type}
                    </span>
                    <span className="text-xs text-charcoal-muted font-medium">
                      {res.date} • {res.pages}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-forest leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {res.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {res.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-ivory text-charcoal-muted border border-sage px-2 py-0.5 rounded-md font-semibold">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sage/60 mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-charcoal-muted">
                    {res.format}
                  </span>

                  <button
                    onClick={() => setPreviewDoc(res)}
                    className="py-2.5 px-4 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <span>View details & request</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-sage p-8">
              <p className="text-sm font-semibold text-charcoal-muted">
                No publication found matching "{searchQuery}".
              </p>
              <button
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-forest underline"
              >
                Reset search filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Press Releases & News Section */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Announcements & Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-forest tracking-tight">
              Institutional Updates & Press Releases
            </h2>
          </div>

          <div className="divide-y divide-sage/60">
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider">November 2024</span>
                <h4 className="text-base font-bold text-forest">Progrow Foundation Announces Strategic Skilling Alignment with NEP 2020 Guidelines</h4>
                <p className="text-xs text-charcoal-muted">Modular vocational courses formally mapped against credit frameworks for undergraduate colleges.</p>
              </div>
              <button
                onClick={() => setPreviewDoc(resources[0])}
                className="text-xs font-bold text-forest hover:text-emerald-brand flex items-center gap-1 shrink-0"
              >
                <span>Read Release</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider">September 2024</span>
                <h4 className="text-base font-bold text-forest">Completion of Independent Social Return on Investment (SROI) Audit for FY 23-24</h4>
                <p className="text-xs text-charcoal-muted">Third-party evaluators validate a 3.4x return on social capital across education and nano-enterprise cohorts.</p>
              </div>
              <button
                onClick={() => setPreviewDoc(resources[2])}
                className="text-xs font-bold text-forest hover:text-emerald-brand flex items-center gap-1 shrink-0"
              >
                <span>Read Release</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Document Preview & Download Modal */}
      {previewDoc && (
        <div onClick={() => setPreviewDoc(null)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-fade-in">
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="resource-dialog-title" tabIndex={-1} onClick={event => event.stopPropagation()} className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-sage shadow-elevated relative space-y-5">
            <button
              onClick={() => setPreviewDoc(null)}
              aria-label="Close resource details"
              className="absolute top-5 right-5 p-2 rounded-full bg-ivory hover:bg-sage text-forest"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-brand">
                {previewDoc.type} • {previewDoc.format}
              </span>
              <h3 id="resource-dialog-title" className="text-xl font-black text-forest mt-1">
                {previewDoc.title}
              </h3>
            </div>

            <p className="text-xs text-charcoal-muted leading-relaxed">
              {previewDoc.summary}
            </p>

            <div className="p-3 bg-ivory rounded-xl border border-sage text-xs text-charcoal-muted space-y-1">
              <div><strong>Publication Date:</strong> {previewDoc.date}</div>
              <div><strong>Document Size:</strong> {previewDoc.pages} ({previewDoc.format})</div>
              <div><strong>Availability:</strong> Request a copy from the team. No download is currently attached.</div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a href={inquiryEmail('secretariat@progrowfoundation.org', requestSubject, requestBody)}
                className="w-full py-3 px-4 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors text-center">
                Request document by email
              </a>
              <button type="button" onClick={() => downloadInquiry('progrow-resource-request.txt', 'secretariat@progrowfoundation.org', requestSubject, requestBody)} className="w-full py-3 px-4 text-xs text-forest border border-sage rounded-xl font-bold">Download request for webmail</button>
              <p className="text-xs text-charcoal-muted text-center">Review and send the request in your email app. Nothing is sent automatically.</p>
              
              <button
                onClick={() => setPreviewDoc(null)}
                className="w-full py-2.5 px-4 text-xs font-bold text-charcoal-muted hover:text-forest"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Need Custom Research or CSR Advisory?
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto">
            Our research and strategic partnerships team prepares customized district baseline dossiers and CSR compliance feasibility studies for corporate partners.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenCsrModal}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 mx-auto"
            >
              <span>Request Custom Research Dossier</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

