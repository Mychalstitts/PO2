import { useApp } from '../context/AppContext';

export function ListingDetailScreen() {
  const { currentListing, goBack, goTo, addToBag, toggleFav } = useApp();
  if (!currentListing) return null;
  const l = currentListing;

  return (
    <div className="screen" style={{ paddingBottom: 100 }}>
      {/* Hero */}
      <div className="hero" style={{ position: 'relative' }}>
        <img src={l.img} alt="Animal" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(6,27,14,0.8) 100%)' }} />
        <button onClick={goBack} style={{ position: 'absolute', top: 16, left: 16, width: 38, height: 38, borderRadius: '50%', background: 'rgba(0,0,0,0.35)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={() => toggleFav(l.id)} style={{ position: 'absolute', top: 16, right: 16, width: 38, height: 38, borderRadius: '50%', background: 'rgba(0,0,0,0.35)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
        </button>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 }}>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(8px)', marginBottom: 8 }}>{l.breed}</span>
          <div style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>{l.title}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 3 }}>{l.farm} · {l.location}</div>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        {/* Price & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Price per lb</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--primary)' }}>{l.price}</div>
          </div>
          <button className="btn btn-primary" onClick={() => { addToBag(l); setTimeout(() => goTo('bag'), 1200); }} style={{ padding: '14px 28px' }}>
            Add to Bag
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" /></svg>
          </button>
        </div>

        {/* Compliance Score */}
        <div className="card-flat" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div className="compliance-ring" style={{ background: `conic-gradient(var(--accent) 0% ${l.score}%, var(--neutral-dark) ${l.score}% 100%)` }}>
            <span className="compliance-inner">{l.score}</span>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Compliance Score</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>Excellent</div>
            <div style={{ fontSize: 12, color: 'var(--gray)' }}>USDA Certified · Grass-Fed · Non-GMO</div>
          </div>
        </div>

        {/* AI Yield Estimator */}
        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>AI Yield Estimator</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--primary)' }}>{l.weight.toLocaleString()}<span style={{ fontSize: 12 }}>lbs</span></div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase' }}>Live Wt.</div>
            </div>
            <div style={{ textAlign: 'center', borderLeft: '1px solid var(--neutral-dark)', borderRight: '1px solid var(--neutral-dark)' }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--accent)' }}>{Math.round(l.weight * 0.6).toLocaleString()}<span style={{ fontSize: 12 }}>lbs</span></div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase' }}>Dressed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--primary)' }}>{Math.round(l.weight * 0.45).toLocaleString()}<span style={{ fontSize: 12 }}>lbs</span></div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase' }}>Take-Home</div>
            </div>
          </div>
          <div style={{ marginBottom: 8, fontSize: 12, color: 'var(--gray)' }}>60% take-home yield estimated</div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '60%' }} /></div>
        </div>

        {/* Quick specs */}
        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Animal Details</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div><div className="label-xs" style={{ color: 'var(--gray-light)', marginBottom: 2 }}>Breed</div><div style={{ fontWeight: 700, fontSize: 14 }}>{l.breed}</div></div>
            <div><div className="label-xs" style={{ color: 'var(--gray-light)', marginBottom: 2 }}>Gender</div><div style={{ fontWeight: 700, fontSize: 14 }}>Steer</div></div>
            <div><div className="label-xs" style={{ color: 'var(--gray-light)', marginBottom: 2 }}>Feed</div><div style={{ fontWeight: 700, fontSize: 14 }}>{l.feed}</div></div>
            <div><div className="label-xs" style={{ color: 'var(--gray-light)', marginBottom: 2 }}>Available</div><div style={{ fontWeight: 700, fontSize: 14 }}>{l.avail}</div></div>
          </div>
        </div>

        <button className="btn btn-secondary btn-full" onClick={() => goTo('cutsheet')} style={{ marginBottom: 12 }}>
          Customize Cut Sheet →
        </button>

        {/* Description */}
        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>About This Animal</div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{l.desc}</div>
        </div>
      </div>
    </div>
  );
}
