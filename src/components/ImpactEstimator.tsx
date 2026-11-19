import React, { useState } from 'react';
import { inquiryEmail } from './dialogUtils';
import { 
  Calculator, Users, Award, TrendingUp, IndianRupee, 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin 
} from 'lucide-react';

interface ImpactEstimatorProps {
  onSelectModel?: (details: any) => void;
}

export const ImpactEstimator: React.FC<ImpactEstimatorProps> = ({ onSelectModel }) => {
  const [budgetLakhs, setBudgetLakhs] = useState<number>(50); // in INR Lakhs
  const [pillar, setPillar] = useState<'skilling' | 'education' | 'women' | 'green'>('skilling');
  const [geography, setGeography] = useState<string>('Tier-2 / Tier-3 Semi-Urban');

  // Multipliers based on pillar
  const pillarConfigs = {
    skilling: {
      name: 'Digital Skills & Tech Readiness',
      scheduleVII: 'Schedule VII (Item ii) - Vocational Skilling',
      costPerBeneficiary: 22000, // INR per certified youth (incl. labs, coaching, placement drives)
      sdgs: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 10: Reduced Inequalities'],
      primaryMetric: 'Industry-Certified Youth',
      secondaryMetric: 'Projected Corporate Placements',
      secondaryMultiplier: 0.74,
      hoursMultiplier: 320,
      hubMultiplier: 25, // Lakhs per smart hub
      description: 'Hands-on technical modules in cloud, data basics, workplace communication, and job placement linkage.'
    },
    education: {
      name: 'Smart School Classrooms & STEM Labs',
      scheduleVII: 'Schedule VII (Item ii) - Promoting Education',
      costPerBeneficiary: 3800, // INR per student per year (tech infrastructure, teacher training, kits)
      sdgs: ['SDG 4: Quality Education', 'SDG 1: No Poverty'],
      primaryMetric: 'Students with Digital Classrooms',
      secondaryMetric: 'STEM Experiment Hours Delivered',
      secondaryMultiplier: 120,
      hoursMultiplier: 450,
      hubMultiplier: 15, // Lakhs per solar smart classroom
      description: 'Solar-backed interactive digital learning, foundational numeracy, and experiential STEM kits in low-income schools.'
    },
    women: {
      name: 'Women Micro-Enterprise & Livelihood',
      scheduleVII: 'Schedule VII (Item iii) - Gender Equality & Livelihoods',
      costPerBeneficiary: 18500, // INR per enterprise incubated (seed coaching, digital bookkeeping, market access)
      sdgs: ['SDG 5: Gender Equality', 'SDG 8: Decent Work', 'SDG 10: Reduced Inequalities'],
      primaryMetric: 'Women-Led Micro-Ventures',
      secondaryMetric: 'Indirect Household Members Impacted',
      secondaryMultiplier: 4.5,
      hoursMultiplier: 180,
      hubMultiplier: 20,
      description: 'Micro-seed grant facilitation, digital payment onboarding, quality packaging, and direct retail fair linkages.'
    },
    green: {
      name: 'Green Skills & Clean Energy Livelihoods',
      scheduleVII: 'Schedule VII (Item iv) - Environmental Sustainability',
      costPerBeneficiary: 26000,
      sdgs: ['SDG 7: Clean Energy', 'SDG 8: Decent Work', 'SDG 13: Climate Action'],
      primaryMetric: 'Solar & EV Technicians Certified',
      secondaryMetric: 'Clean Energy Installations Facilitated',
      secondaryMultiplier: 0.85,
      hoursMultiplier: 280,
      hubMultiplier: 30,
      description: 'Decentralized rooftop solar installation, electric two-wheeler maintenance, and sustainable circular waste management.'
    }
  };

  const currentConfig = pillarConfigs[pillar];
  const budgetInRupees = budgetLakhs * 100000;
  
  const directBeneficiaries = Math.floor(budgetInRupees / currentConfig.costPerBeneficiary);
  const secondaryImpact = Math.round(directBeneficiaries * currentConfig.secondaryMultiplier);
  const totalLearningHours = (directBeneficiaries * currentConfig.hoursMultiplier).toLocaleString();
  const estimatedHubs = Math.max(1, Math.round(budgetLakhs / currentConfig.hubMultiplier));

  return (
    <div className="bg-white rounded-3xl border border-sage shadow-premium overflow-hidden">
      {/* Top Bar */}
      <div className="bg-forest px-6 sm:px-8 py-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive CSR Impact Modeler</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            Design Your CSR Investment Blueprint
          </h3>
          <p className="text-xs text-ivory/70 mt-0.5">
            Explore illustrative scenarios for an initial conversation.
          </p>
        </div>

        <div className="bg-forest-dark/80 px-4 py-2.5 rounded-2xl border border-forest-light text-right">
          <div className="text-[10px] text-ivory/60 uppercase tracking-wider font-bold">MCA Statutory Fit</div>
          <div className="text-xs font-bold text-gold">{currentConfig.scheduleVII}</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Pillar Selector */}
          <div>
            <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-2.5">
              1. Select Strategic CSR Pillar
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                aria-pressed={pillar === 'skilling'}
                onClick={() => setPillar('skilling')}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  pillar === 'skilling' 
                    ? 'border-forest bg-sage/30 text-forest shadow-sm' 
                    : 'border-sage/80 bg-white text-charcoal-muted hover:border-forest/40'
                }`}
              >
                <div className="text-xs font-bold">Tech Skilling</div>
                <div className="text-[10px] text-charcoal-muted mt-0.5">College youth to IT jobs</div>
              </button>

              <button
                type="button"
                aria-pressed={pillar === 'education'}
                onClick={() => setPillar('education')}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  pillar === 'education' 
                    ? 'border-forest bg-sage/30 text-forest shadow-sm' 
                    : 'border-sage/80 bg-white text-charcoal-muted hover:border-forest/40'
                }`}
              >
                <div className="text-xs font-bold">Smart Classrooms</div>
                <div className="text-[10px] text-charcoal-muted mt-0.5">STEM in govt schools</div>
              </button>

              <button
                type="button"
                aria-pressed={pillar === 'women'}
                onClick={() => setPillar('women')}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  pillar === 'women' 
                    ? 'border-forest bg-sage/30 text-forest shadow-sm' 
                    : 'border-sage/80 bg-white text-charcoal-muted hover:border-forest/40'
                }`}
              >
                <div className="text-xs font-bold">Women Enterprise</div>
                <div className="text-[10px] text-charcoal-muted mt-0.5">Micro-incubation & UPI</div>
              </button>

              <button
                type="button"
                aria-pressed={pillar === 'green'}
                onClick={() => setPillar('green')}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  pillar === 'green' 
                    ? 'border-forest bg-sage/30 text-forest shadow-sm' 
                    : 'border-sage/80 bg-white text-charcoal-muted hover:border-forest/40'
                }`}
              >
                <div className="text-xs font-bold">Green Skills</div>
                <div className="text-[10px] text-charcoal-muted mt-0.5">Solar & EV technician jobs</div>
              </button>
            </div>
          </div>

          {/* Budget Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="csr-budget" className="text-xs font-bold text-forest uppercase tracking-wider">
                2. Proposed CSR Allocation
              </label>
              <div className="text-sm font-extrabold text-forest bg-gold-subtle px-3 py-1 rounded-full border border-gold/40">
                ₹{budgetLakhs} Lakhs <span className="text-[10px] text-charcoal-muted font-normal">({(budgetLakhs / 100).toFixed(2)} Cr)</span>
              </div>
            </div>

            <input
              id="csr-budget"
              aria-valuetext={`₹${budgetLakhs} lakhs`}
              type="range"
              min="15"
              max="250"
              step="5"
              value={budgetLakhs}
              onChange={(e) => setBudgetLakhs(Number(e.target.value))}
              className="w-full accent-forest cursor-pointer h-2 bg-sage rounded-lg"
            />

            {/* Quick Presets */}
            <div className="flex gap-2 mt-2.5">
              {[25, 50, 100, 200].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  aria-pressed={budgetLakhs === preset}
                  onClick={() => setBudgetLakhs(preset)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border font-semibold transition-colors ${
                    budgetLakhs === preset 
                      ? 'bg-forest text-white border-forest' 
                      : 'bg-ivory border-sage text-charcoal-muted hover:text-forest'
                  }`}
                >
                  ₹{preset}L
                </button>
              ))}
            </div>
          </div>

          {/* Geography Selector */}
          <div>
            <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-2">
              3. Target Intervention Geography
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                'Tier-2 / Tier-3 Semi-Urban',
                'NITI Aayog Aspirational Districts',
                'Peri-Industrial / Plant Clusters'
              ].map((geo) => (
                <button
                  key={geo}
                  type="button"
                  aria-pressed={geography === geo}
                  onClick={() => setGeography(geo)}
                  className={`p-2 rounded-xl border text-center text-[11px] font-medium transition-all ${
                    geography === geo 
                      ? 'border-forest bg-sage/40 text-forest font-bold' 
                      : 'border-sage bg-white text-charcoal-muted hover:border-forest/40'
                  }`}
                >
                  {geo}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-ivory rounded-xl border border-sage/60 text-xs text-charcoal-muted leading-relaxed">
            <span className="font-bold text-forest">{currentConfig.name}:</span> {currentConfig.description}
          </div>
        </div>

        {/* Right Output Projections */}
        <div className="lg:col-span-6 bg-sage/20 p-6 sm:p-7 rounded-2xl border border-sage/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-sage/60 mb-5">
              <span className="text-xs uppercase font-bold tracking-wider text-forest">
                Projected Social ROI Matrix
              </span>
              <span className="text-[11px] text-emerald-brand font-bold bg-emerald-subtle px-2.5 py-0.5 rounded-full">
                Illustrative model
              </span>
            </div>

            {/* Impact Metric Cards */}
            <div className="grid grid-cols-2 gap-3.5 mb-5">
              
              <div className="bg-white p-4 rounded-xl border border-sage/80 shadow-subtle">
                <div className="text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                  {currentConfig.primaryMetric}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-forest mt-1">
                  {directBeneficiaries.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-brand font-semibold mt-1">
                  Estimated participants
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-sage/80 shadow-subtle">
                <div className="text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                  {currentConfig.secondaryMetric}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-forest mt-1">
                  {secondaryImpact.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-brand font-semibold mt-1">
                  Modelled outcomes, not guarantees
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-sage/80 shadow-subtle">
                <div className="text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                  Training & Mentorship
                </div>
                <div className="text-2xl sm:text-3xl font-black text-forest mt-1">
                  {totalLearningHours}
                </div>
                <div className="text-[10px] text-charcoal-muted font-semibold mt-1">
                  Structured learning hours
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-sage/80 shadow-subtle">
                <div className="text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                  Community Hubs / Labs
                </div>
                <div className="text-2xl sm:text-3xl font-black text-forest mt-1">
                  {estimatedHubs} {estimatedHubs === 1 ? 'Hub' : 'Hubs'}
                </div>
                <div className="text-[10px] text-charcoal-muted font-semibold mt-1">
                  Indicative capacity
                </div>
              </div>

            </div>

            {/* SDG Alignment Tags */}
            <div className="space-y-1.5 mb-5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal-muted block">
                Aligned UN Sustainable Development Goals:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentConfig.sdgs.map((sdg) => (
                  <span 
                    key={sdg} 
                    className="text-[11px] bg-white border border-sage text-forest font-semibold px-2.5 py-1 rounded-lg"
                  >
                    {sdg}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 border-t border-sage/60">
            <button
              onClick={() => {
                if (onSelectModel) {
                  onSelectModel({
                    pillar: currentConfig.name,
                    budget: `₹${budgetLakhs} Lakhs`,
                    geography,
                    beneficiaries: directBeneficiaries
                  });
                } else {
                  window.location.href = inquiryEmail('csr@progrowfoundation.org', 'CSR model inquiry', `Pillar: ${currentConfig.name}\nBudget: ₹${budgetLakhs} lakhs\nGeography: ${geography}\nIllustrative participants: ${directBeneficiaries}`);
                }
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-forest hover:bg-forest-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 group"
            >
              <span>Initiate CSR Dialogue with this Model</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-center text-charcoal-muted mt-2">
              Indicative estimates use assumed unit costs. Geography is a planning preference; final reach, costs and outcomes require a project assessment.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

