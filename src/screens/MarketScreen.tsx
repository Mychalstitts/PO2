import { useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { LISTINGS } from '../data/listings';
import { ListingCard } from '../components/ui/ListingCard';
import { BackButton } from '../components/ui/BackButton';
import { AnimalType } from '../types';

export function MarketScreen() {
  const { showToast } = useApp();
  const [filter, setFilter] = useState<AnimalType | 'all'>('all');
  const [showFilter, setShowFilter] = useState(false);

  const filtered = filter === 'all' ? LISTINGS : LISTINGS.filter(l => l.type === filter);

  const chips: { label: string; value: AnimalType | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: '🐂 Beef', value: 'beef' },
    { label: '🐷 Pork', value: 'pork' },
    { label: '🐑 Lamb', value: 'lamb' },
    { label: '🦌 Venison', value: 'venison' },
    { label: '🐔 Poultry', value: 'poultry' },
  ];

  const closeFilterSheet = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowFilter(false);
  }, []);

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Marketplace</div>
        <button className="icon-btn" onClick={() => setShowFilter(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
        </button>
      </div>

      <div className="search-bar">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input type="text" placeholder="Search breeds, farms, locations..." />
      </div>

      <div className="chip-row">
        {chips.map(c => (
          <div key={c.value} className={`chip${filter === c.value ? ' active' : ''}`} onClick={() => setFilter(c.value)}>
            {c.label}
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {filtered.map(l => <ListingCard key={l.id} listing={l} compact />)}
      </div>

      {/* Filter Sheet */}
      {showFilter && (
        <div className="overlay" onClick={closeFilterSheet}>
          <div className={`bottom-sheet open`}>
            <span className="sheet-handle" />
            <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--primary)', marginBottom: 20 }}>Filter Listings</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Animal Type</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
              {['Beef 🐂', 'Pork 🐷', 'Lamb 🐑', 'Venison 🦌'].map((t, i) => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '2px solid var(--neutral-dark)', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={i === 0} style={{ width: 16, height: 16, accentColor: 'var(--accent)' }} /> {t}
                </label>
              ))}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Price per lb</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
              <div><label className="form-label">Min</label><input className="form-input" type="number" placeholder="$0" defaultValue={0} /></div>
              <div><label className="form-label">Max</label><input className="form-input" type="number" placeholder="$25" defaultValue={25} /></div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Certifications</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {['USDA', 'Grass-Fed', 'Non-GMO'].map((c, i) => (
                <label key={c} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 100, border: '2px solid var(--neutral-dark)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
                  <input type="checkbox" defaultChecked={i === 0} style={{ accentColor: 'var(--accent)' }} /> {c}
                </label>
              ))}
            </div>
            <button className="btn btn-primary btn-full" onClick={() => { showToast('Filters applied'); setShowFilter(false); }}>Apply Filters</button>
          </div>
        </div>
      )}
    </div>
  );
}
