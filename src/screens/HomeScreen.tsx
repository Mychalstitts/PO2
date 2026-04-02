import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { LISTINGS } from '../data/listings';
import { ListingCard } from '../components/ui/ListingCard';
import { AnimalType } from '../types';

export function HomeScreen() {
  const { goTo } = useApp();
  const [filter, setFilter] = useState<AnimalType | 'all'>('all');
  const [beefPrice, setBeefPrice] = useState(13.75);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeefPrice(prev => +(prev + (Math.random() * 0.12 - 0.06)).toFixed(2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const chips: { label: string; value: AnimalType | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: '🐂 Beef', value: 'beef' },
    { label: '🐷 Pork', value: 'pork' },
    { label: '🐑 Lamb', value: 'lamb' },
    { label: '🦌 Venison', value: 'venison' },
    { label: '🐔 Poultry', value: 'poultry' },
  ];

  const filtered = filter === 'all' ? LISTINGS.slice(0, 3) : LISTINGS.filter(l => l.type === filter).slice(0, 3);

  return (
    <div className="screen">
      {/* Header */}
      <div className="top-header">
        <div className="logo">PROTEIN<span>OUTFITTERS</span></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="icon-btn" onClick={() => goTo('alerts')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            <span className="badge" />
          </button>
          <button className="icon-btn" onClick={() => goTo('profile')}>
            <img
              src="https://imagine-public.x.ai/imagine-public/images/afaa1857-6fa0-4e1a-b72f-e55e02b9eadc.jpg"
              style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }}
              alt="avatar"
              onError={(e) => { (e.target as HTMLImageElement).outerHTML = '<div style="width:28px;height:28px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:12px;">JM</div>'; }}
            />
          </button>
        </div>
      </div>

      {/* Price Ticker */}
      <div className="price-ticker">
        <div className="ticker-track">
          {[1, 2].map(i => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="ticker-item">🐂 Beef <b className="ticker-up">${beefPrice.toFixed(2)}/lb ↑</b></span>
              <span className="ticker-item">🐷 Pork <b className="ticker-up">$9.25/lb ↑</b></span>
              <span className="ticker-item">🐑 Lamb <b>$14.50/lb →</b></span>
              <span className="ticker-item">🦌 Venison <b className="ticker-up">$18.00/lb ↑</b></span>
              <span className="ticker-item">🐔 Poultry <b className="ticker-down">$4.20/lb ↓</b></span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="stat-grid" style={{ marginTop: 16 }}>
        <div className="stat-card dark">
          <div className="stat-label">Active Shares</div>
          <div className="stat-value">12,842</div>
          <div className="stat-sub">+12.4% this week</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg. Price/lb</div>
          <div className="stat-value">$13.75</div>
          <div className="stat-sub">Beef — Live</div>
        </div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input type="text" placeholder="Search breeds, farms, cuts..." onClick={() => goTo('market')} readOnly />
        <button style={{ background: 'var(--primary)', border: 'none', borderRadius: 8, padding: '6px 12px', color: 'white', fontSize: 12, fontWeight: 700, cursor: 'pointer' }} onClick={() => goTo('processors')}>Map</button>
      </div>

      {/* Browse by Animal */}
      <div className="section-header" style={{ padding: '4px 20px 8px' }}>
        <div className="section-title">Browse by Animal</div>
      </div>
      <div className="chip-row">
        {chips.map(c => (
          <div key={c.value} className={`chip${filter === c.value ? ' active' : ''}`} onClick={() => setFilter(c.value)}>
            {c.label}
          </div>
        ))}
      </div>

      {/* Featured Listings */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">Featured Listings</div>
          <div className="section-action" onClick={() => goTo('market')}>See All →</div>
        </div>
      </div>
      <div style={{ padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
        {filtered.map(l => <ListingCard key={l.id} listing={l} />)}
      </div>

      {/* Nearby Processors */}
      <div className="section" style={{ marginTop: 8 }}>
        <div className="section-header">
          <div className="section-title">Nearby Processors</div>
          <div className="section-action" onClick={() => goTo('processors')}>View Map →</div>
        </div>
      </div>
      <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="card-flat" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => goTo('processor-detail')}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)' }}>Bemidji Meat Processing</div>
            <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>USDA Certified · 8 mi · Opens 6am</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <span className="tag tag-accent">USDA</span>
              <span className="tag tag-dark">Beef</span>
              <span className="tag tag-dark">Pork</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>4.8 ★</div>
            <div style={{ fontSize: 11, color: 'var(--gray)' }}>47 reviews</div>
          </div>
        </div>
        <div className="card-flat" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => goTo('processor-detail')}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)' }}>Northern MN Custom Meats</div>
            <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>State Certified · 14 mi · Opens 7am</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <span className="tag tag-dark">State</span>
              <span className="tag tag-dark">Lamb</span>
              <span className="tag tag-dark">Venison</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>4.5 ★</div>
            <div style={{ fontSize: 11, color: 'var(--gray)' }}>31 reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}
