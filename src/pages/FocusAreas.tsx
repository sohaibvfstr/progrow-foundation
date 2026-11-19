import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Award, Compass, TrendingUp, Users, 
  CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck, 
  Target, Sparkles, ChevronRight 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { focusAreas, FocusArea } from '../data/focusAreasData';

interface FocusAreasProps {
  onOpenCsrModal: () => void;
}

export const FocusAreas: React.FC<FocusAreasProps> = ({ onOpenCsrModal }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(focusAreas[0].id);

  const selectedArea = focusAreas.find(a => a.id === selectedPillarId) || focusAreas[0];

  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
    Compass: <Compass className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />
  };

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Strategic Pillars of Transformation"
        title="Comprehensive Impact."
        highlightWord="Architected for Scale."
        subtitle="Explore our five core focus areas engineered to transform individual trajectories, foster grassroots economic autonomy, and build resilient community ecosystems."
        breadcrumb={[{ label: 'Our Focus Areas' }]}
        primaryCta={{ label: 'Co-Create A CSR Programme', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'View Ready Initiatives', to: '/initiatives' }}
      />

      {/* Interactive Pillar Switcher Section */}
      <section className="py-20 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pillar Tabs Bar */}
          <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-12">
            {focusAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedPillarId(area.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl whitespace-nowrap text-xs font-bold transition-all border shrink-0 ${
                  selectedPillarId === area.id
                    ? 'bg-forest text-white border-forest shadow-md'
                    : 'bg-white text-charcoal-muted border-sage hover:border-forest/50 hover:text-forest'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${selectedPillarId === area.id ? 'bg-forest-light text-gold' : 'bg-sage/40 text-forest'}`}>
                  {iconMap[area.iconName]}
                </div>
                <span>{area.title}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Deep Dive Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-sage shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {selectedArea.sdg.map((sdg, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-bold uppercase tracking-wider bg-sage/50 text-forest px-3 py-1 rounded-full border border-sage"
                  >
                    {sdg}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-forest tracking-tight">
                {selectedArea.title}
              </h2>

              <p className="text-base font-semibold text-emerald-brand leading-relaxed">
                "{selectedArea.tagline}"
              </p>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                {selectedArea.description}
              </p>

              {/* Key Interventions */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-forest block">
                  Core Tactical Interventions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedArea.keyInterventions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory border border-sage/60 text-xs text-charcoal font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Matrix */}
              <div className="pt-4 border-t border-sage/60 grid grid-cols-3 gap-4">
                {selectedArea.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-sage/30 text-center">
                    <div className="text-xl sm:text-2xl font-black text-forest">{m.value}</div>
                    <div className="text-[10px] uppercase font-bold text-charcoal-muted tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenCsrModal}
                  className="px-6 py-3 rounded-full bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 group"
                >
                  <span>Co-Create Programme in this Pillar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <Link
                  to="/initiatives"
                  className="text-xs font-bold text-forest hover:text-emerald-brand flex items-center gap-1 transition-colors"
                >
                  <span>See Related Ready Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] relative">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-forest-dark/80 px-2 py-0.5 rounded-full inline-block">
                    Verified Outcome Pillar
                  </span>
                  <div className="text-sm font-bold text-ivory">
                    {selectedArea.title}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Comprehensive Pillars Overview Matrix */}
      <section className="py-24 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-brand">
              Holistic Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-forest tracking-tight">
              An Interconnected Development Matrix
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              We do not view these five focus areas in isolation. True community resilience emerges when education feeds into skilling, skilling opens career opportunities, and local micro-entrepreneurs fuel community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => (
              <div 
                key={area.id}
                id={area.id}
                className="bg-ivory rounded-3xl p-6 sm:p-8 border border-sage shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between scroll-mt-28"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-forest text-gold">
                      {iconMap[area.iconName]}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted bg-white border border-sage px-2.5 py-1 rounded-full">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-forest">
                    {area.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-brand">
                    {area.tagline}
                  </p>

                  <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3">
                    {area.description}
                  </p>

                  <div className="pt-2 border-t border-sage/40 space-y-1.5">
                    {area.keyInterventions.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sage/60 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedPillarId(area.id);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-forest hover:text-emerald-brand flex items-center gap-1 transition-colors"
                  >
                    <span>View Deep Dive</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenCsrModal}
                    className="text-[11px] font-bold text-white bg-forest hover:bg-forest-light px-3 py-1.5 rounded-full transition-colors"
                  >
                    Co-Create
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CSR Alignment Banner */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-dark border border-forest-light text-gold text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Mandates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Tailor These Pillars to Your CSR Mandate
          </h2>

          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Every corporation has unique CSR objectives—whether it is advancing women in STEM, empowering youth around manufacturing clusters, or building foundational smart classrooms. We work with you to customize scope, geography, and KPIs.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCsrModal}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Request Strategic Co-Creation Brief</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
            <Link
              to="/csr-partnerships"
              className="px-8 py-4 rounded-full border border-forest-light hover:bg-forest-light/40 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Explore CSR Partnership Models
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

