import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, TrendingUp, Sparkles, ArrowRight, 
  ArrowUpRight, Heart, ShieldCheck, MapPin, CheckCircle2 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { impactStories, ImpactStory } from '../data/impactStoriesData';

interface ImpactStoriesProps {
  onOpenCsrModal: () => void;
}

export const ImpactStories: React.FC<ImpactStoriesProps> = ({ onOpenCsrModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedStory, setSelectedStory] = useState<ImpactStory | null>(null);

  const categories = ['All', 'Skilling', 'Education', 'Entrepreneurship', 'Youth'];

  const filteredStories = activeCategory === 'All'
    ? impactStories
    : impactStories.filter(s => s.programmeCategory === activeCategory);

  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="Voices of Dignity & Transformation"
        title="Human Potential in Focus."
        highlightWord="Stories of Real Change."
        subtitle="Explore verified narrative chronicles demonstrating how structured education, technical skilling, and micro-enterprise incubation unlock generational freedom."
        breadcrumb={[{ label: 'Impact Stories' }]}
        primaryCta={{ label: 'Sponsor an Impact Cohort', onClick: onOpenCsrModal }}
        secondaryCta={{ label: 'Explore Initiatives', to: '/initiatives' }}
      />

      {/* Illustrative Notice Strip */}
      <div className="bg-sage/40 border-b border-sage py-3 text-center px-4 text-xs text-charcoal-muted font-medium">
        <span className="font-bold text-forest">Editorial Note:</span> These case chronicles illustrate the transformative human potential of structured CSR interventions, based on real beneficiary cohorts and field outcomes.
      </div>

      {/* Live Impact Numbers Dashboard */}
      <section className="py-16 bg-white border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-ivory border border-sage space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-forest">25,000+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">Students Reached</div>
              <div className="text-[10px] text-emerald-brand font-semibold">In smart digital classrooms</div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-sage space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-forest">4,800+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">Youth Certified</div>
              <div className="text-[10px] text-emerald-brand font-semibold">In technical & cloud skills</div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-sage space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-forest">1,200+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">Women Micro-Enterprises</div>
              <div className="text-[10px] text-emerald-brand font-semibold">Incubated with UPI linkage</div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-sage space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-forest">40+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">Community Learning Hubs</div>
              <div className="text-[10px] text-emerald-brand font-semibold">Solar-powered permanent nodes</div>
            </div>
          </div>

        </div>
      </section>

      {/* Filter and Story Cards Grid */}
      <section className="py-20 bg-ivory border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
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

          {/* Stories List */}
          <div className="space-y-12">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                id={story.id}
                className="bg-white rounded-3xl border border-sage shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12 scroll-mt-28"
              >
                {/* Photo Column */}
                <div className="lg:col-span-5 relative min-h-[350px]">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 text-forest text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {story.programmeTag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                    <div className="text-xs font-semibold text-ivory flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>{story.location}</span>
                    </div>
                    <div className="text-sm font-bold text-gold">
                      {story.sdgTag}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-forest">{story.name}, {story.age}</h3>
                        <p className="text-xs font-semibold text-emerald-brand">{story.headline}</p>
                      </div>
                      {story.partnerCompany && (
                        <span className="text-[10px] font-bold text-charcoal-muted bg-ivory border border-sage px-2.5 py-1 rounded-lg hidden sm:block">
                          {story.partnerCompany}
                        </span>
                      )}
                    </div>

                    <blockquote className="text-sm sm:text-base font-serif italic text-forest border-l-2 border-gold pl-4 py-1 leading-relaxed">
                      "{story.quote}"
                    </blockquote>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {story.story}
                    </p>

                    {/* Before & After Transformation Comparison */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-ivory border border-sage/60 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-charcoal-muted tracking-wider block">
                          Before Intervention:
                        </span>
                        <p className="text-xs text-charcoal-muted leading-snug">
                          {story.beforeSituation}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-sage/30 border border-sage/60 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-emerald-brand tracking-wider block">
                          After Transformation:
                        </span>
                        <p className="text-xs font-medium text-forest leading-snug">
                          {story.afterTransformation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantitative Metrics Bar */}
                  <div className="pt-4 border-t border-sage/60 grid grid-cols-3 gap-2">
                    {story.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-ivory border border-sage/40 text-center">
                        <div className="text-base font-black text-forest">{m.value}</div>
                        <div className="text-[9px] uppercase font-bold text-charcoal-muted tracking-wider mt-0.5 line-clamp-1">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={onOpenCsrModal}
                      className="py-2.5 px-5 rounded-full bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 group"
                    >
                      <span>Sponsor a Cohort Like This</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <Link
                      to="/csr-partnerships"
                      className="text-xs font-bold text-forest hover:text-emerald-brand transition-colors"
                    >
                      View CSR Alignment →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Help Write the Next Story of Growth
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto">
            Your corporate CSR partnership provides the seed capital, tools, and mentorship that turn latent potential into thriving livelihood.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenCsrModal}
              className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 mx-auto"
            >
              <span>Explore Sponsorship Opportunities</span>
              <ArrowUpRight className="w-4 h-4 text-forest" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

