import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';

export function SettingsScreen() {
  const { showToast, goTo } = useApp();

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Settings</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '8px 0 10px' }}>Notifications</div>
        {[
          { label: 'New Listings', sub: 'When matching animals are posted', on: true },
          { label: 'Price Alerts', sub: 'When prices change 5%+', on: true },
          { label: 'Order Updates', sub: 'Processing milestones', on: true },
          { label: 'Marketing', sub: 'Deals and promotions', on: false },
        ].map(s => (
          <div key={s.label} className="card-flat" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>{s.sub}</div>
            </div>
            <button className={`toggle-switch${s.on ? ' on' : ''}`} onClick={(e) => (e.target as HTMLElement).classList.toggle('on')} />
          </div>
        ))}

        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '20px 0 10px' }}>Account</div>
        {['Edit Profile', 'Payment Methods', 'Privacy & Data'].map(label => (
          <div key={label} className="card-flat" onClick={() => showToast(`${label}...`)} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: 6 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>{label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-light)" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
        ))}

        <div style={{ marginTop: 16 }}>
          <button className="btn btn-full" style={{ background: 'var(--alert-light)', color: 'var(--alert)', border: 'none', padding: 14, borderRadius: 'var(--radius-md)', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', width: '100%', display: 'flex', justifyContent: 'center', fontSize: 15 }} onClick={() => goTo('onboard')}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
