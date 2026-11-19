import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Award, Users, Compass, FileText } from 'lucide-react';
import { initiatives } from '../data/initiativesData';
import { focusAreas } from '../data/focusAreasData';
import { impactStories } from '../data/impactStoriesData';
import { resources } from '../data/resourcesData';
import { useDialogAccessibility } from './dialogUtils';

interface QuickSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({ isOpen, onClose, onOpen }) => {
  const [query, setQuery] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useDialogAccessibility(isOpen, onClose, dialogRef);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (isOpen) onClose();
        else if (!document.querySelector('[role="dialog"]')) onOpen?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onOpen]);

  useEffect(() => { if (isOpen) setQuery(''); }, [isOpen]);
  if (!isOpen) return null;

  const term = query.trim().toLowerCase();
  const groups = [
    { label: 'Initiatives', icon: Award, items: initiatives.map(item => ({ id: item.id, title: item.name, description: item.summary, path: `/initiatives#${item.id}` })) },
    { label: 'Focus areas', icon: Compass, items: focusAreas.map(item => ({ id: item.id, title: item.title, description: item.tagline, path: `/focus-areas#${item.id}` })) },
    { label: 'Stories', icon: Users, items: impactStories.map(item => ({ id: item.id, title: `${item.name} — ${item.headline}`, description: `${item.location} · ${item.programmeTag}`, path: `/impact-stories#${item.id}` })) },
    { label: 'Resources', icon: FileText, items: resources.map(item => ({ id: item.id, title: item.title, description: `${item.type} · ${item.tags.join(' ')}`, path: `/media-resources#${item.id}` })) }
  ].map(group => ({ ...group, items: group.items.filter(item => `${item.title} ${item.description}`.toLowerCase().includes(term)) }));
  const count = groups.reduce((total, group) => total + group.items.length, 0);
  const select = (path: string) => { onClose(); navigate(path); };
  const popular = [
    ['Our story', '/about'], ['Our initiatives', '/initiatives'], ['CSR partnerships', '/csr-partnerships'],
    ['Get involved', '/get-involved'], ['Youth empowerment', '/youth-empowerment'], ['Contact us', '/contact']
  ];

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-forest-dark/70 backdrop-blur-sm animate-fade-in">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="site-search-title" tabIndex={-1}
        className="bg-white rounded-3xl max-w-2xl w-full shadow-elevated border border-sage overflow-hidden"
        onClick={event => event.stopPropagation()}>
        <h2 id="site-search-title" className="sr-only">Search Progrow Foundation</h2>
        <div className="p-4 sm:p-5 border-b border-sage flex items-center gap-3">
          <Search className="w-5 h-5 text-forest shrink-0" aria-hidden="true" />
          <input type="search" data-initial-focus aria-label="Search initiatives, focus areas, stories and resources"
            value={query} onChange={event => setQuery(event.target.value)} placeholder="What would you like to explore?"
            className="w-full text-sm font-medium text-forest placeholder-charcoal-muted/60 focus:outline-none" />
          <button onClick={onClose} aria-label="Close search" className="p-2 rounded-full hover:bg-sage text-charcoal-muted"><X className="w-5 h-5" /></button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!term && <div>
            <h3 className="text-[11px] uppercase tracking-wider font-bold text-charcoal-muted mb-3">Start exploring</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {popular.map(([label, path]) => <button key={path} onClick={() => select(path)} className="p-3 rounded-xl border border-sage hover:border-forest text-left text-xs font-semibold text-forest hover:bg-ivory transition-colors">{label}</button>)}
            </div>
          </div>}
          <p className="sr-only" role="status" aria-live="polite">{count} matching results</p>
          {groups.filter(group => group.items.length > 0).map(group => <section key={group.label}>
            <h3 className="text-[11px] uppercase tracking-wider font-bold text-charcoal-muted mb-2 flex items-center gap-2">
              <group.icon className="w-4 h-4" aria-hidden="true" />{group.label} ({group.items.length})
            </h3>
            <div className="space-y-1">
              {group.items.map(item => <button key={item.id} onClick={() => select(item.path)} className="w-full p-3 rounded-xl hover:bg-ivory transition-colors border border-transparent hover:border-sage text-left">
                <span className="block text-sm font-bold text-forest">{item.title}</span>
                <span className="block text-xs text-charcoal-muted line-clamp-1 mt-1">{item.description}</span>
              </button>)}
            </div>
          </section>)}
          {count === 0 && <p className="text-center py-8 text-charcoal-muted text-sm">No results for “{query}”. Try “skills”, “education” or “fellowship”.</p>}
        </div>
        <div className="p-3 bg-ivory border-t border-sage text-center text-[11px] text-charcoal-muted">Use Tab to browse · Enter to open · Esc to close</div>
      </div>
    </div>
  );
};
