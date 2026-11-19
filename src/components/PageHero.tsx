import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  subtitle: string;
  breadcrumb: { label: string; path?: string }[];
  primaryCta?: { label: string; onClick?: () => void; to?: string };
  secondaryCta?: { label: string; onClick?: () => void; to?: string };
  darkTheme?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, highlightWord, subtitle, breadcrumb, primaryCta, secondaryCta, darkTheme = false }) => (
  <section className={`pg-page-hero${darkTheme ? ' pg-page-hero-dark' : ''}`}>
    <div className="pg-page-hero-inner">
      <nav className="pg-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link>{breadcrumb.map((item, index) => <React.Fragment key={index}><ChevronRight size={12} />{item.path ? <Link to={item.path}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</React.Fragment>)}</nav>
      <div className="pg-page-hero-body">
        <div className="pg-page-hero-copy"><div className="pg-page-eyebrow"><span />{eyebrow}</div><h1>{title}{highlightWord && <> <em>{highlightWord}</em></>}</h1><p>{subtitle}</p>
          {(primaryCta || secondaryCta) && <div className="pg-page-actions">{[primaryCta, secondaryCta].map((cta, index) => cta && (cta.to ? <Link key={index} to={cta.to} className={`pg-page-cta${index ? ' pg-page-cta-secondary' : ''}`}>{cta.label}</Link> : <button key={index} onClick={cta.onClick} className={`pg-page-cta${index ? ' pg-page-cta-secondary' : ''}`}>{cta.label}</button>))}</div>}
        </div>
        <div className="pg-page-flower" aria-hidden="true"><svg viewBox="0 0 240 240"><g fill="currentColor">{Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="120" cy="72" rx="26" ry="65" transform={`rotate(${i * 45} 120 120)`} />)}</g><circle cx="120" cy="120" r="23" className="pg-page-flower-center" /></svg><span>GROWING POSSIBILITIES, TOGETHER.</span></div>
      </div>
    </div>
  </section>
);
