import { useState } from 'react';
import { useApp } from '../context/AppContext';

export function AdminScreen() {
  const { goBack } = useApp();
  const [tab, setTab] = useState<'overview' | 'analytics' | 'alerts'>('overview');

  const tabs: { key: typeof tab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'alerts', label: 'Alerts' },
  ];

  return (
    <div className="screen">
      <div style={{ background: 'var(--primary)', padding: '24px 20px 20px' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'inline-flex', marginBottom: 12 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Global Intelligence</div>
        <div style={{ fontSize: 30, fontWeight: 900, color: 'white', lineHeight: 1.0 }}>HQ Command<br />Center</div>
      </div>

      <div style={{ display: 'flex', borderBottom: '2px solid var(--neutral-dark)', background: 'white', overflowX: 'auto' }} className="no-scroll">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            padding: '13px 20px', border: 'none', background: 'none', cursor: 'pointer',
            fontSize: 13, fontWeight: 700, color: tab === t.key ? 'var(--primary)' : 'var(--gray)',
            borderBottom: tab === t.key ? '2px solid var(--primary)' : 'none',
            marginBottom: tab === t.key ? -2 : 0, whiteSpace: 'nowrap', fontFamily: 'inherit',
          }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === 'overview' && (
        <div style={{ padding: '16px 20px' }}>
          <div className="stat-grid" style={{ padding: 0, marginBottom: 16 }}>
            <div className="stat-card dark">
              <div className="stat-label">Total Volume</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>$4,892,400</div>
              <div className="stat-sub">+12.4% ↑</div>
            </div>
            <div className="stat-card" style={{ border: '1px solid var(--neutral-dark)' }}>
              <div className="stat-label">Active Shares</div>
              <div className="stat-value">12,842</div>
              <div className="stat-sub">98.2% Utilization</div>
            </div>
          </div>

          <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Revenue Flow</div>
            <div className="progress-bar" style={{ height: 12, marginBottom: 6, position: 'relative', overflow: 'visible' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: 12, width: '75%', background: 'var(--primary)', borderRadius: '100px 0 0 100px' }} />
              <div style={{ position: 'absolute', left: '75%', top: 0, height: 12, width: '15%', background: 'var(--accent)' }} />
              <div style={{ position: 'absolute', left: '90%', top: 0, height: 12, width: '10%', background: 'var(--gray-light)', borderRadius: '0 100px 100px 0' }} />
            </div>
            <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, justifyContent: 'space-between', marginTop: 4 }}>
              <span style={{ color: 'var(--primary)' }}>Farmers 75%</span>
              <span style={{ color: 'var(--accent)' }}>Processors 15%</span>
              <span style={{ color: 'var(--gray)' }}>Platform 10%</span>
            </div>
          </div>

          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--primary)', marginBottom: 10 }}>Critical Priority</div>
          <div className="alert-item urgent" style={{ cursor: 'pointer' }}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--alert)" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Age Threshold Violation</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>Lot #9982 requires immediate review</div>
            </div>
          </div>
          <div className="alert-item" style={{ cursor: 'pointer', borderLeftColor: 'var(--primary)' }}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Logistics Delay</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>Central Hub storage at 94% capacity</div>
            </div>
          </div>

          <div className="card-dark" style={{ padding: 16, marginTop: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Velocity</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: 'white' }}>4.2s</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Global Avg. Settlement</div>
          </div>
        </div>
      )}

      {/* Analytics */}
      {tab === 'analytics' && (
        <div style={{ padding: '16px 20px' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)', marginBottom: 14 }}>Platform Analytics</div>
          <div className="card-flat" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Sales Trend (30 days)</div>
            <svg viewBox="0 0 200 60" style={{ width: '100%', height: 60 }}>
              <path d="M0,50 Q20,30 40,40 T80,20 T120,30 T160,10 T200,25" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
              <path d="M0,50 Q20,30 40,40 T80,20 T120,30 T160,10 T200,25 V60 H0 Z" fill="rgba(61,158,94,0.12)" />
            </svg>
          </div>
          <div className="card-flat" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Top Search Terms</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              {[
                { term: 'buy beef shares mn', pos: '1.2' },
                { term: 'farm direct meat', pos: '4.5' },
                { term: 'grass fed angus half', pos: '2.1' },
              ].map((s, i) => (
                <div key={s.term} style={{ display: 'flex', justifyContent: 'space-between', borderTop: i > 0 ? '1px solid var(--neutral-dark)' : undefined, paddingTop: i > 0 ? 8 : undefined }}>
                  <span>{s.term}</span><span style={{ fontWeight: 700, color: 'var(--accent)' }}>Pos {s.pos}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Alerts */}
      {tab === 'alerts' && (
        <div style={{ padding: '16px 20px' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)', marginBottom: 14 }}>System Alerts</div>
          <div className="alert-item urgent"><div className="alert-dot urgent" /><div><div style={{ fontSize: 14, fontWeight: 700 }}>Age Threshold Violation</div><div style={{ fontSize: 12, color: 'var(--gray)' }}>Lot #9982 · 36 months old</div></div></div>
          <div className="alert-item unread"><div className="alert-dot" /><div><div style={{ fontSize: 14, fontWeight: 700 }}>Logistics Delay · Hub 3</div><div style={{ fontSize: 12, color: 'var(--gray)' }}>94% capacity · Pickup delayed</div></div></div>
          <div className="alert-item unread"><div className="alert-dot" /><div><div style={{ fontSize: 14, fontWeight: 700 }}>New Processor Registration</div><div style={{ fontSize: 12, color: 'var(--gray)' }}>Prairie Edge Slaughter pending review</div></div></div>
        </div>
      )}
    </div>
  );
}
