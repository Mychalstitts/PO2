import { useApp } from '../context/AppContext';

export function ProcessorDetailScreen() {
  const { goBack, goTo, showToast } = useApp();

  return (
    <div className="screen" style={{ paddingBottom: 100 }}>
      <div style={{ position: 'relative' }}>
        <img
          src="https://imagine-public.x.ai/imagine-public/images/8a272570-12da-436e-bce4-25f7e1e6a0e1.jpg"
          style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
          alt="processor"
          onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = 'var(--neutral-dark)'; t.style.height = '120px'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(6,27,14,0.8) 100%)' }} />
        <button onClick={goBack} style={{ position: 'absolute', top: 16, left: 16, width: 38, height: 38, borderRadius: '50%', background: 'rgba(0,0,0,0.4)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 }}>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(8px)', marginBottom: 8 }}>USDA Certified</span>
          <div style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>Bemidji Meat Processing</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>4.8 ★ · 47 reviews · 8 mi</div>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <button className="btn btn-primary" onClick={() => showToast('Booking calendar...')} style={{ flex: 1 }}>Book Now</button>
          <button className="btn btn-secondary" onClick={() => goTo('chat')} style={{ flex: 1 }}>Message</button>
          <button className="icon-btn" onClick={() => showToast('Opening directions...')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
          </button>
        </div>

        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Hours & Contact</div>
          <div style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', gap: 10 }}><span>🕒</span><span>Mon-Fri: 6am–5pm &nbsp; Sat: 7am–2pm</span></div>
            <div style={{ display: 'flex', gap: 10 }}><span>📞</span><span>(218) 555-0192</span></div>
            <div style={{ display: 'flex', gap: 10 }}><span>📍</span><span>1842 Processing Way, Bemidji MN</span></div>
          </div>
        </div>

        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Pricing</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Kill Fee (beef)</span><span style={{ fontWeight: 700 }}>$120</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--neutral-dark)', paddingTop: 8 }}><span>Cut & Wrap</span><span style={{ fontWeight: 700 }}>$0.65/lb</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--neutral-dark)', paddingTop: 8 }}><span>Hang Time</span><span style={{ fontWeight: 700 }}>14 days included</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
