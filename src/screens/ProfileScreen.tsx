import { useApp } from '../context/AppContext';

export function ProfileScreen() {
  const { goTo } = useApp();

  const menuItems = [
    { label: 'My Orders', screen: 'orders' as const, iconBg: 'var(--accent-light)', iconStroke: 'var(--accent)', icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></>, badge: null },
    { label: 'Notifications', screen: 'alerts' as const, iconBg: '#fef3f2', iconStroke: 'var(--alert)', icon: <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></>, badge: '3' },
    { label: 'Messages', screen: 'chat' as const, iconBg: 'var(--accent-light)', iconStroke: 'var(--accent)', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />, badge: null },
    { label: 'Saved Listings', screen: 'favorites' as const, iconBg: '#fdf6ec', iconStroke: '#d97706', icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />, badge: null },
    { label: 'Admin Dashboard', screen: 'admin' as const, iconBg: 'var(--neutral-dark)', iconStroke: 'var(--primary)', icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>, badge: null },
    { label: 'Settings', screen: 'settings' as const, iconBg: 'var(--neutral-dark)', iconStroke: 'var(--primary)', icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></>, badge: null },
  ];

  return (
    <div className="screen">
      <div className="top-header">
        <div style={{ width: 40 }} />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Profile</div>
        <button className="icon-btn" onClick={() => goTo('settings')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
        </button>
      </div>

      {/* Profile Hero */}
      <div style={{ background: 'var(--primary)', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <img
          src="https://imagine-public.x.ai/imagine-public/images/afaa1857-6fa0-4e1a-b72f-e55e02b9eadc.jpg"
          style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)' }}
          alt="profile"
          onError={(e) => { (e.target as HTMLImageElement).style.background = 'var(--accent)'; }}
        />
        <div>
          <div style={{ fontSize: 20, fontWeight: 900, color: 'white' }}>Jake Morrison</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Consumer · Bemidji, MN</div>
          <div style={{ marginTop: 6 }}><span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 10 }}>⭐ Verified Buyer</span></div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--primary)', padding: '0 24px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1 }}>
        {[
          { value: '3', label: 'Orders' },
          { value: '$8.5k', label: 'Spent' },
          { value: '7', label: 'Saved' },
        ].map(s => (
          <div key={s.label} style={{ background: 'rgba(255,255,255,0.08)', padding: '12px 8px', textAlign: 'center', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: 'white' }}>{s.value}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {menuItems.map(item => (
          <div key={item.label} className="card-flat" onClick={() => goTo(item.screen)} style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: item.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.iconStroke} strokeWidth="2">{item.icon}</svg>
              </div>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{item.label}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {item.badge && <span style={{ background: 'var(--alert)', color: 'white', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 100 }}>{item.badge}</span>}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-light)" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
