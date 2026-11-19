import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import '../shell.css';

interface NavbarProps {
  onOpenCsrModal: () => void;
  onOpenSearch: () => void;
}

const workLinks = [
  { to: '/focus-areas', title: 'Our focus areas', detail: 'Five pathways. One shared purpose.' },
  { to: '/initiatives', title: 'Our initiatives', detail: 'Ideas that move communities forward.' },
  { to: '/youth-empowerment', title: 'Youth empowerment', detail: 'Room for the next generation to grow.' },
  { to: '/csr-partnerships', title: 'CSR partnerships', detail: 'Make meaningful change, together.' },
  { to: '/media-resources', title: 'Resources & insights', detail: 'Explore the thinking behind our work.' },
  { to: '/contact', title: 'Get in touch', detail: 'Every good thing starts with a conversation.' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCsrModal, onOpenSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const workButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); setWorkOpen(false); }, [location.pathname, location.hash]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) { setWorkOpen(false); setMenuOpen(false); }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerdown', onOutside);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerdown', onOutside); };
  }, []);

  const active = (path: string) => location.pathname === path ? 'page' as const : undefined;
  const openSearch = () => { setMenuOpen(false); setWorkOpen(false); onOpenSearch(); };

  return (
    <header ref={headerRef} className={`pg-header${scrolled ? ' is-scrolled' : ''}`} onKeyDown={event => {
      if (event.key === 'Escape') {
        if (workOpen) { setWorkOpen(false); workButtonRef.current?.focus(); }
        if (menuOpen) { setMenuOpen(false); menuButtonRef.current?.focus(); }
      }
    }}>
      <div className="pg-nav-wrap">
        <Link to="/" className="pg-brand" aria-label="Progrow Foundation home">
          <svg className="pg-brand-symbol" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M20 3V37M3 20H37M8 8L32 32M8 32L32 8" stroke="currentColor" strokeWidth="7" />
          </svg>
          <span className="pg-brand-name">progrow<span>FOUNDATION</span></span>
        </Link>
        <nav className="pg-desktop-nav" aria-label="Main navigation">
          <Link to="/about" aria-current={active('/about')}>Our story</Link>
          <div className="pg-work-nav">
            <button ref={workButtonRef} aria-expanded={workOpen} aria-controls="pg-work-menu" className={workLinks.some(item => item.to === location.pathname) ? 'is-active' : ''} onClick={() => setWorkOpen(!workOpen)}>
              Our work <ChevronDown size={13} className={workOpen ? 'is-turned' : ''} />
            </button>
            {workOpen && <div id="pg-work-menu" className="pg-work-menu">
              <span className="pg-menu-eyebrow">POSSIBILITY IN ACTION</span>
              {workLinks.map(item => <Link to={item.to} key={item.to} aria-current={active(item.to)}><span><strong>{item.title}</strong><small>{item.detail}</small></span></Link>)}
            </div>}
          </div>
          <Link to="/impact-stories" aria-current={active('/impact-stories')}>The difference</Link>
          <Link to="/get-involved" aria-current={active('/get-involved')}>Get involved</Link>
        </nav>
        <div className="pg-nav-actions">
          <button onClick={openSearch} className="pg-search-button" aria-label="Search the site" title="Search the site"><Search size={19} /></button>
          <button className="pg-nav-cta" onClick={onOpenCsrModal}>Let’s grow together </button>
          <button ref={menuButtonRef} onClick={() => setMenuOpen(!menuOpen)} className="pg-menu-toggle" aria-expanded={menuOpen} aria-controls="pg-mobile-nav" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>
      {menuOpen && <nav id="pg-mobile-nav" className="pg-mobile-nav" aria-label="Mobile navigation">
        <span className="pg-menu-eyebrow">A WORLD OF POSSIBILITIES</span>
        {[{ to: '/', title: 'Home' }, { to: '/about', title: 'Our story' }, ...workLinks.slice(0, 4), { to: '/impact-stories', title: 'The difference' }, { to: '/get-involved', title: 'Get involved' }, ...workLinks.slice(4)].map((item, index) => <Link key={item.to} to={item.to} aria-current={active(item.to)}><span><small>{String(index + 1).padStart(2, '0')}</small>{item.title}</span></Link>)}
        <button className="pg-nav-cta" onClick={() => { setMenuOpen(false); onOpenCsrModal(); }}>Let’s grow together </button>
      </nav>}
    </header>
  );
};
