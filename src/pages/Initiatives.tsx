import React, { useState } from 'react';
import { 
  Award, BookOpen, Clock, MapPin, Users, 
  ArrowUpRight, ArrowRight, ShieldCheck, Download, 
  CheckCircle2, Filter, Search, Sparkles, FileText, X 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { initiatives, Initiative } from '../data/initiativesData';

interface InitiativesProps {
  onOpenCsrModal: (initialFocus?: string) => void;
}

export const Initiatives: React.FC<InitiativesProps> = ({ onOpenCsrModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedConceptForDeck, setSelectedConceptForDeck] = useState<Initiative | null>(null);

  const categories = ['All', 'Skilling', 'Youth', 'Entrepreneurship', 'Education', 'Community'];

  const filteredInitiatives = initiatives.filter(init => {
    const matchesCategory = activeCategory === 'All' || init.category === activeCategory;
    const matchesSearch = init.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          init.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          init.scheduleVII.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Turn-Key Programme Frameworks"
        title="Structured Social Initiatives."
        highlightWord="Ready for Co-Creation."
        subtitle="Explore our comprehensive blueprint catalogue of outcome-driven programme models. Each framework includes audited syllabi, cost models, and milestone schedules ready for corporate CSR sponsorship."
        breadcrumb={[{ label: 'Our Initiatives' }]}
        primaryCta={{ label: 'Explore CSR Partnership', onClick: () => onOpenCsrModal() }}
        secondaryCta={{ label: 'Download CSR Guide', to: '/media-resources' }}
      />

      {/* Concept Disclaimer Strip */}
      <div className="bg-sage/40 border-b border-sage py-3 text-center px-4 text-xs text-charcoal-muted font-medium">
        <span className="font-bold text-forest">CSR Advisory Notice:</span> The initiatives featured below represent structured, ready-to-deploy programme concept blueprints designed for corporate co-creation, pilot testing, and multi-district scaling.
      </div>

      {/* Main Filter & Initiatives Section */}
      <section className="py-20 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Categories & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-xl font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-forest text-white shadow-xs'
                      : 'bg-white border border-sage text-charcoal-muted hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-charcoal-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blueprints & syllabi..."
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-sage focus:outline-none focus:border-forest bg-white"
              />
            </div>

          </div>

          {/* Initiatives Cards Grid */}
          <div className="space-y-12">
            {filteredInitiatives.map((init) => (
              <div
                key={init.id}
                id={init.id}
                className="bg-white rounded-3xl border border-sage shadow-premium overflow-hidden scroll-mt-28"
              >
                {/* Top Banner Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-sage">
                  
                  {/* Photo & Status */}
                  <div className="lg:col-span-5 relative min-h-[300px]">
                    <img
                      src={init.image}
                      alt={init.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-white/95 text-forest text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                        {init.status}
                      </span>
                      <span className="bg-forest-dark/90 text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/40">
                        {init.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1">
                        Timeline & Footprint
                      </div>
                      <div className="text-xs font-semibold text-ivory flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold" /> {init.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gold" /> {init.geographicReach}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Header Content */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-brand">
                        <Award className="w-4 h-4 text-gold" />
                        <span>Concept Architecture Blueprint</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-forest">
                        {init.name}
                      </h3>

                      <p className="text-sm font-semibold text-charcoal">
                        {init.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                        {init.overview}
                      </p>

                      {/* Schedule VII Box */}
                      <div className="p-3.5 bg-sage/30 rounded-xl border border-sage/60 text-xs">
                        <span className="font-bold text-forest block">Companies Act 2013 Fit:</span>
                        <span className="text-charcoal-muted">{init.scheduleVII}</span>
                      </div>
                    </div>

                    {/* Projections Strip */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-sage/60">
                      {init.impactProjections.map((p, i) => (
                        <div key={i} className="p-3 rounded-xl bg-ivory border border-sage/40 text-center">
                          <div className="text-base sm:text-lg font-black text-forest">{p.value}</div>
                          <div className="text-[9px] uppercase font-bold text-charcoal-muted tracking-wider mt-0.5 line-clamp-1">
                            {p.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Details: Modular Syllabus & Actions */}
                <div className="p-6 sm:p-10 bg-ivory/50">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Curriculum Modules */}
                    <div className="lg:col-span-8 space-y-3">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-forest block">
                        Modular Curriculum Architecture:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {init.curriculumOrPillars.map((mod, i) => (
                          <div key={i} className="p-3 rounded-xl bg-white border border-sage/80 shadow-xs space-y-1">
                            <div className="text-xs font-bold text-forest">{mod.title}</div>
                            <div className="text-[11px] text-charcoal-muted leading-relaxed">{mod.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="lg:col-span-4 space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-sage/60 lg:pl-8 flex flex-col justify-center">
                      <button
                        onClick={() => onOpenCsrModal(init.name)}
                        className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 group"
                      >
                        <span>Sponsor / Co-Create Blueprint</span>
                        <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <button
                        onClick={() => setSelectedConceptForDeck(init)}
                        className="w-full py-3 px-6 rounded-xl bg-white hover:bg-sage/40 text-forest border border-sage font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                      >
                        <FileText className="w-4 h-4 text-forest" />
                        <span>Preview Concept Deck Summary</span>
                      </button>

                      <div className="text-[10px] text-center text-charcoal-muted">
                        Full financial models & MoU templates available on request.
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}

            {filteredInitiatives.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-sage p-8">
                <p className="text-sm font-semibold text-charcoal-muted">
                  No initiative concepts found matching "{searchQuery}".
                </p>
                <button
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-3 text-xs font-bold text-forest underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Concept Deck Modal */}
      {selectedConceptForDeck && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-sage shadow-elevated relative">
            <button
              onClick={() => setSelectedConceptForDeck(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-ivory hover:bg-sage text-forest"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-brand">
                <FileText className="w-4 h-4 text-gold" />
                <span>Executive Concept Deck Summary</span>
              </div>

              <h3 className="text-2xl font-black text-forest">
                {selectedConceptForDeck.name}
              </h3>

              <div className="p-4 rounded-2xl bg-ivory border border-sage space-y-2 text-xs">
                <div><strong className="text-forest">Statutory Item:</strong> {selectedConceptForDeck.scheduleVII}</div>
                <div><strong className="text-forest">Target Group:</strong> {selectedConceptForDeck.targetBeneficiaries}</div>
                <div><strong className="text-forest">Duration:</strong> {selectedConceptForDeck.duration}</div>
                <div><strong className="text-forest">Recommended Cohort:</strong> {selectedConceptForDeck.impactProjections[0].value}</div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest">Curriculum Pillars:</h4>
                <div className="space-y-2">
                  {selectedConceptForDeck.curriculumOrPillars.map((p, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-sage/20 border border-sage text-xs">
                      <span className="font-bold text-forest block">{p.title}</span>
                      <span className="text-charcoal-muted">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-sage flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const conceptName = selectedConceptForDeck.name;
                    setSelectedConceptForDeck(null);
                    onOpenCsrModal(conceptName);
                  }}
                  className="py-3 px-6 rounded-xl bg-forest text-white font-bold text-xs uppercase tracking-wider flex-1 text-center"
                >
                  Request Customized CSR Proposal
                </button>
                <button
                  onClick={() => setSelectedConceptForDeck(null)}
                  className="py-3 px-6 rounded-xl border border-sage text-forest font-bold text-xs uppercase tracking-wider"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Have a Specific CSR Theme or Geographic Catchment in Mind?
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto">
            We regularly formulate bespoke pilot frameworks for enterprise partners looking to solve specific regional or demographic challenges.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCsrModal()}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 mx-auto"
            >
              <span>Initiate Custom Framework Dialogue</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

