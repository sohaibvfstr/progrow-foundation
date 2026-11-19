import { useState, type CSSProperties, type MouseEvent } from 'react';
import { Plus, RotateCcw } from 'lucide-react';

type Plant = { id: number; x: number; height: number; color: string; petals: number; lean: number };
const colors = ['#ff623b', '#d4df8d', '#f0be55', '#f5adbb', '#eee9dc'];
const initialPlants: Plant[] = [
  { id: 0, x: 88, height: 155, color: colors[1], petals: 8, lean: -12 },
  { id: 1, x: 170, height: 258, color: colors[0], petals: 6, lean: 10 },
  { id: 2, x: 275, height: 193, color: colors[3], petals: 8, lean: -12 },
  { id: 3, x: 385, height: 285, color: colors[2], petals: 7, lean: -10 },
  { id: 4, x: 480, height: 180, color: colors[1], petals: 6, lean: 12 },
];

export function GrowthGarden() {
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [message, setMessage] = useState('Every possibility begins with a little care.');
  const addPlant = (x?: number) => {
    if (plants.length >= 22) { setMessage('Your garden is in full bloom. Start fresh to keep growing.'); return; }
    const id = plants.length;
    setPlants(current => [...current, { id, x: x ?? 65 + ((id * 137.5) % 470), height: 100 + ((id * 61) % 195), color: colors[id % colors.length], petals: 6 + id % 3, lean: (id % 2 ? -1 : 1) * 14 }]);
    setMessage(`${id - 4} ${id === 5 ? 'new possibility planted' : 'new possibilities planted'}. Look what a little care can do.`);
  };
  const plantAtPointer = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0) { addPlant(); return; }
    const rect = event.currentTarget.getBoundingClientRect();
    addPlant(Math.max(55, Math.min(545, (event.clientX - rect.left) / rect.width * 600)));
  };

  return <div className="growth-garden reveal">
    <div className="garden-top"><span><span className="garden-status" /> THE POSSIBILITY GARDEN</span><button onClick={() => { setPlants(initialPlants); setMessage('A fresh start. What will you grow?'); }} aria-label="Reset the possibility garden" title="Start fresh"><RotateCcw size={17} /></button></div>
    <button className="garden-canvas" onClick={plantAtPointer} aria-label="Plant a possibility in the garden. Click, tap, or press Enter to grow a flower." aria-describedby="garden-description">
      <svg viewBox="0 0 600 400" aria-hidden="true">
        <defs><pattern id="garden-dots" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#ffffff" opacity=".09" /></pattern></defs>
        <rect width="600" height="400" fill="url(#garden-dots)" />
        <circle cx="510" cy="72" r="32" fill="none" stroke="#a5b6a4" strokeWidth="1" opacity=".45" />
        <circle cx="510" cy="72" r="22" fill="#d4df8d" opacity=".85" />
        <path d="M0 375Q180 365 300 376T600 375" fill="none" stroke="#a5b6a4" strokeWidth="1" />
        {plants.map(plant => <g key={plant.id} transform={`translate(${plant.x} 374)`}>
          <g className="garden-plant" style={{ '--sway-delay': `${-plant.id * 0.7}s`, '--plant-lean': `${plant.lean / 4}deg` } as CSSProperties}>
            <path d={`M0 0 Q${plant.lean * 2} ${-plant.height / 2} ${plant.lean} ${-plant.height}`} fill="none" stroke="#a6b999" strokeWidth="2.5" />
            <path d={`M${plant.lean / 2} ${-plant.height * .34}q-48-5-43-45q43 2 43 45`} fill="#809a76" />
            <path d={`M${plant.lean / 2} ${-plant.height * .58}q40-1 39-36q-36-1-39 36`} fill="#a5b78d" />
            <g transform={`translate(${plant.lean} ${-plant.height})`}>
              <g className="garden-bloom">{Array.from({ length: plant.petals }, (_, i) => <ellipse key={i} cx="0" cy="-22" rx="14" ry="25" transform={`rotate(${i * 360 / plant.petals})`} fill={plant.color} />)}<circle r="13" fill="#20332d" /><circle r="6" fill="#f5e2b5" /></g>
            </g>
          </g>
        </g>)}
        <path d="M34 82h14m-7-7v14M316 45h10m-5-5v10M557 216h14m-7-7v14" stroke="#f5e2b5" strokeWidth="1.5" opacity=".6" />
      </svg>
      <span className="garden-plant-hint"><Plus size={16} /> Click anywhere to grow</span>
    </button>
    <div className="garden-bottom"><p id="garden-description" aria-live="polite">{message}</p><button className="garden-add" onClick={() => addPlant()} disabled={plants.length >= 22}>Plant a possibility <Plus size={16} /></button></div>
  </div>;
}
