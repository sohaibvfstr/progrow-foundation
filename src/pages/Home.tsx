import { useRef, useState, type PointerEvent, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Sprout, MoveDown, Heart, Pause, Play } from 'lucide-react';
import { GrowthGarden } from '../components/GrowthGarden';
import { ImpactEstimator } from '../components/ImpactEstimator';
import '../home.css';

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const pillars = [
  { name: 'Education', title: 'A brighter future starts with a curious mind.', description: 'Opening doors to foundational learning and digital education, so a child’s postcode doesn’t define their possibilities.', image: 'learning.jpg', alt: 'Students sharing a moment in the classroom', tags: ['Foundational learning', 'Digital classrooms', 'STEM discovery'], path: 'education' },
  { name: 'Skill development', title: 'Turn “what if” into “I can”.', description: 'Practical, industry-aligned learning that connects young people with the confidence and skills to take their next step.', image: 'skills.jpg', alt: 'Young people working together on a digital project', tags: ['Digital skills', 'Career readiness', 'Workplace confidence'], path: 'skill-development' },
  { name: 'Youth leadership', title: 'The next generation is ready to lead.', description: 'Creating space for young voices, bold ideas, and mentors who help ambition become meaningful action.', image: 'together.jpg', alt: 'A group of young adults collaborating around a table', tags: ['Mentorship', 'Youth fellowships', 'Community leadership'], path: 'youth-empowerment' },
  { name: 'Entrepreneurship', title: 'Big possibilities. Local beginnings.', description: 'Helping aspiring entrepreneurs build the knowledge, networks, and confidence to create livelihoods of their own.', image: 'skills.jpg', alt: 'Collaborative learning and enterprise planning', tags: ['Financial literacy', 'Women-led enterprise', 'Market access'], path: 'entrepreneurship' },
  { name: 'Community', title: 'When we grow together, we go further.', description: 'Stronger communities begin with shared spaces, local participation, and opportunities that reach everyone.', image: 'learning.jpg', alt: 'A shared learning environment', tags: ['Learning hubs', 'Local participation', 'Shared opportunity'], path: 'community-development' },
];
const steps = [
  { name: 'Listen deeply.', text: 'Every community has its own story. We begin with conversations, local insights, and a shared understanding of what people actually need.' },
  { name: 'Build together.', text: 'We bring communities, educators, and partners into the same conversation to shape practical programmes around a clear purpose.' },
  { name: 'Make it happen.', text: 'From a first lesson to a new skill, we turn a shared plan into hands-on learning, mentorship, and pathways to opportunity.' },
  { name: 'Learn. Grow. Repeat.', text: 'We measure progress, listen to feedback, and improve along the way. Lasting change is a practice, not a finish line.' },
];

export function Flower({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M50 31C21-10 0 22 31 50C-10 79 22 100 50 69C79 110 100 78 69 50C110 21 78 0 50 31Z" /><circle cx="50" cy="50" r="9" fill="var(--flower-center, #f6f5ef)" /></svg>;
}

export function Home({ onOpenCsrModal }: { onOpenCsrModal: () => void }) {
  const [activePillar, setActivePillar] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [tickerPaused, setTickerPaused] = useState(false);
  const heroArt = useRef<HTMLDivElement>(null);
  const pillar = pillars[activePillar];
  const moveArt = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 14}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 14}px`);
  };
  const selectTab = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % pillars.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + pillars.length) % pillars.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = pillars.length - 1;
    else return;
    event.preventDefault(); setActivePillar(next);
    document.getElementById(`pillar-tab-${next}`)?.focus();
  };

  return <div className="growth-home">
    <section className="growth-hero growth-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="growth-eyebrow hero-enter"><span className="eyebrow-line" /> PEOPLE. POSSIBILITIES. PROGRESS.</p>
        <h1 id="hero-title" className="hero-title"><span className="hero-line"><span>Potential is</span></span><span className="hero-line"><span>everywhere.</span></span><span className="hero-line"><span className="hero-title-accent">Let’s grow it.<svg viewBox="0 0 550 30" preserveAspectRatio="none" aria-hidden="true"><path d="M5 21Q230 0 540 12M85 28Q320 11 495 19" /></svg></span></span></h1>
        <p className="hero-description hero-enter">A little opportunity can change a whole life.<br className="desktop-break" /> We bring learning, skills, and possibility to the people<br className="desktop-break" /> and communities ready to grow.</p>
        <div className="hero-actions hero-enter"><a className="growth-button growth-button-dark" href="#our-work">Explore our work <Sprout size={19} /></a><button className="growth-text-button" onClick={onOpenCsrModal}>Be part of the change <Plus size={18} /></button></div>
        <div className="hero-footnote hero-enter"><span className="mini-flower"><Flower /></span><p>Rooted in purpose.<br /><strong>Growing a more inclusive India.</strong></p></div>
      </div>
      <div className="hero-art" ref={heroArt} onPointerMove={moveArt} onPointerLeave={() => { heroArt.current?.style.setProperty('--pointer-x', '0px'); heroArt.current?.style.setProperty('--pointer-y', '0px'); }}>
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-photo-wrap"><img className="hero-photo" src={asset('together.jpg')} alt="Young people sharing ideas and learning together" width="1100" height="733" fetchPriority="high" /><div className="hero-photo-shade" /><span className="hero-image-caption">Room to learn. Space to become.</span></div>
        <div className="hero-orange-flower"><Flower /></div>
        <div className="hero-stamp"><svg viewBox="0 0 140 140" aria-hidden="true"><defs><path id="stamp-circle" d="M70 70m-49 0a49 49 0 1 1 98 0a49 49 0 1 1-98 0" /></defs><text><textPath href="#stamp-circle" textLength="307">SMALL STEPS. LASTING CHANGE. • </textPath></text></svg><Sprout size={37} strokeWidth={1.4} /></div>
        <div className="hero-note"><span>Good things<br />grow together.</span><svg viewBox="0 0 100 55" aria-hidden="true"><path d="M8 8Q65 0 70 40M58 28L70 42L85 28" /></svg></div>
        <div className="hero-photo-small"><img src={asset('learning.jpg')} alt="Learning opens new possibilities" width="240" height="280" /><span>A future worth growing.</span></div>
        <span className="hero-spark spark-one" aria-hidden="true">✳</span><span className="hero-spark spark-two" aria-hidden="true">✦</span>
      </div>
      <a href="#our-belief" className="hero-scroll"><MoveDown size={16} /><span>A little scroll. A bigger picture.</span></a>
      <span className="hero-side-label" aria-hidden="true">THE FUTURE IS A SHARED PROJECT</span>
    </section>

    <div className={`growth-ticker ${tickerPaused ? 'is-paused' : ''}`}>
      <div className="ticker-track" aria-hidden="true">{[0, 1, 2, 3].map(i => <div className="ticker-copy" key={i}><span>More opportunity.</span><Flower /><span>More possibility.</span><Flower /><span>More together.</span><Flower /></div>)}</div>
      <p className="sr-only">More opportunity. More possibility. More together.</p>
      <button className="ticker-control" onClick={() => setTickerPaused(!tickerPaused)} aria-label={tickerPaused ? 'Play moving banner' : 'Pause moving banner'}>{tickerPaused ? <Play size={15} /> : <Pause size={15} />}</button>
    </div>

    <section className="belief-section growth-container" id="our-belief">
      <div className="belief-heading reveal"><p className="growth-eyebrow">THE IDEA THAT DRIVES US</p><Flower className="belief-flower" /><span className="belief-handwriting">A simple belief.<br />An extraordinary possibility.</span></div>
      <div className="belief-content reveal"><h2>Talent is universal.<br />Opportunity <span className="muted-word">isn’t.</span><br />We’re here to <em>change that.</em></h2><div className="belief-description"><p>At Progrow Foundation, we see a future where everyone has the opportunity to shape their own story. We connect education, skills, and community to help make that future possible.</p><Link to="/about" className="growth-underlined-link">Get to know Progrow <Plus size={17} /></Link></div><div className="belief-facts"><div><strong>5</strong><span>connected focus areas</span></div><div><strong>1</strong><span>shared purpose</span></div><div><strong>∞</strong><span>possibilities ahead</span></div></div></div>
    </section>

    <section className="work-section" id="our-work" aria-labelledby="work-title"><div className="growth-container">
      <div className="section-topline reveal"><div><p className="growth-eyebrow">WHERE POSSIBILITY TAKES ROOT</p><h2 id="work-title">Different paths.<br /><span className="serif-word">Shared progress.</span></h2></div><p>Real change is connected.<br />So is everything we do.</p></div>
      <div className="pillar-tabs reveal" role="tablist" aria-label="Explore our focus areas">{pillars.map((item, i) => <button id={`pillar-tab-${i}`} key={item.name} role="tab" aria-selected={activePillar === i} aria-controls="pillar-panel" tabIndex={activePillar === i ? 0 : -1} onKeyDown={e => selectTab(e, i)} onClick={() => setActivePillar(i)}><span>{item.name}</span>{activePillar === i && <span className="tab-dot" />}</button>)}</div>
      <div className="pillar-panel" role="tabpanel" id="pillar-panel" aria-labelledby={`pillar-tab-${activePillar}`} tabIndex={0}>
        <div className="pillar-image" key={`image-${activePillar}`}><img src={asset(pillar.image)} alt={pillar.alt} loading="lazy" width="1000" height="750" /><span className="photo-label"><Sprout size={17} /> POSSIBILITY IN PRACTICE</span></div>
        <div className="pillar-content" key={`content-${activePillar}`}><Flower className="pillar-flower" /><h3>{pillar.title}</h3><p>{pillar.description}</p><div className="pillar-tags">{pillar.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link className="growth-button growth-button-light" to={`/focus-areas#${pillar.path}`}>Explore {pillar.name.toLowerCase()} <Plus size={18} /></Link></div>
      </div>
      <div className="work-bottom"><span>Education. Livelihoods. Leadership. A future that connects them all.</span><Link to="/initiatives">Discover our initiatives <Plus size={16} /></Link></div>
    </div></section>

    <section className="garden-section growth-container" aria-labelledby="garden-title"><div className="garden-intro reveal"><p className="growth-eyebrow">A SMALL ACTION. A BEAUTIFUL RIPPLE.</p><h2 id="garden-title">Change starts<br />with <span className="serif-word">one of us.</span></h2><p>A little care creates room for something new.<br />Plant a possibility. See what grows.</p><Link to="/get-involved" className="growth-underlined-link">Find your way to make a difference <Plus size={17} /></Link></div><GrowthGarden /></section>

    <section className="process-section growth-container"><div className="process-intro reveal"><p className="growth-eyebrow">PURPOSE, PUT INTO PRACTICE</p><h2>Good intentions.<br /><span className="serif-word">Thoughtful action.</span></h2><p>Lasting change takes more than a moment.<br />Here’s how we work toward it, together.</p><div className="process-drawing" aria-hidden="true"><span /><Sprout size={72} strokeWidth={1.2} /><span /></div></div><div className="process-steps reveal">{steps.map((step, i) => <div className={`process-step ${activeStep === i ? 'is-open' : ''}`} key={step.name}><h3><button aria-expanded={activeStep === i} aria-controls={`process-content-${i}`} id={`process-button-${i}`} onClick={() => setActiveStep(activeStep === i ? null : i)}><span>{step.name}</span><span className="process-toggle">{activeStep === i ? <Minus size={20} /> : <Plus size={20} />}</span></button></h3><div className="process-answer" role="region" id={`process-content-${i}`} aria-labelledby={`process-button-${i}`} hidden={activeStep !== i}><p>{step.text}</p></div></div>)}</div></section>

    <section className="partnership-section"><div className="growth-container"><div className="partnership-heading reveal"><div><p className="growth-eyebrow">FOR PARTNERS WITH PURPOSE</p><h2>Imagine what we<br />could <span className="serif-word">grow together.</span></h2></div><div><p>Bring your ambition. We’ll bring a collaborative approach to education, skills, and community. Explore an indicative programme budget to start the conversation.</p><button className="growth-underlined-link" onClick={onOpenCsrModal}>Let’s build something meaningful <Plus size={17} /></button></div></div><div className="reveal estimator-wrap"><ImpactEstimator onSelectModel={onOpenCsrModal} /></div></div></section>
    <section className="closing-note growth-container reveal"><Heart size={24} strokeWidth={1.4} /><p>Progress is a collective story.<br /><span>There’s a place for you in ours.</span></p><Link className="growth-button growth-button-dark" to="/get-involved">Find your place <Sprout size={18} /></Link></section>
  </div>;
}
