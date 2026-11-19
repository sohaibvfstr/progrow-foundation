import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';
import '../motion.css';

/** Progressive enhancement: content remains visible until observation is ready. */
export const usePageMotion = (enabled: boolean, pathname: string) => {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = enabled ? 'full' : 'reduced';
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!enabled || !('IntersectionObserver' in window)) {
      root.classList.remove('motion-ready');
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -35px 0px' });

    // Never conceal content already in view or targeted by an anchor link.
    elements.forEach(element => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom >= 0) element.classList.add('is-visible');
      else observer.observe(element);
    });
    root.classList.add('motion-ready');

    const revealFocused = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest?.('.reveal');
      if (element) { element.classList.add('is-visible'); observer.unobserve(element); }
    };
    document.addEventListener('focusin', revealFocused);
    return () => {
      observer.disconnect();
      document.removeEventListener('focusin', revealFocused);
      root.classList.remove('motion-ready');
    };
  }, [enabled, pathname]);
};

interface MotionControlProps {
  enabled: boolean;
  onToggle: () => void;
}

export const MotionControl: React.FC<MotionControlProps> = ({ enabled, onToggle }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(requestUpdate) : null;
    resizeObserver?.observe(document.body);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      resizeObserver?.disconnect();
    };
  }, [pathname]);

  return <>
    <div ref={progressRef} className="pg-scroll-progress" aria-hidden="true" />
    <button type="button" className="pg-motion-control" onClick={onToggle} aria-label={enabled ? 'Pause animations' : 'Enable animations'} title={enabled ? 'Pause animations' : 'Enable animations'}>
      {enabled ? <Pause size={15} strokeWidth={1.8} aria-hidden="true" /> : <Play size={15} strokeWidth={1.8} aria-hidden="true" />}
      <span className="pg-motion-tooltip" aria-hidden="true">{enabled ? 'Pause animations' : 'Enable animations'}</span>
    </button>
  </>;
};
