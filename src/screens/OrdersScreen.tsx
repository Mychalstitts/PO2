import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ORDERS } from '../data/orders';

export function OrdersScreen() {
  const { goTo } = useApp();
  const [tab, setTab] = useState<'active' | 'completed' | 'cancelled'>('active');

  const filtered = ORDERS.filter(o => o.status === tab);
  const tabs: { key: typeof tab; label: string }[] = [
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
    { key: 'cancelled', label: 'Cancelled' },
  ];

  return (
    <div className="screen">
      <div className="top-header">
        <div style={{ width: 40 }} />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>My Orders</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ display: 'flex', borderBottom: '2px solid var(--neutral-dark)', background: 'white' }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            flex: 1, padding: '13px 8px', border: 'none', background: 'none', cursor: 'pointer',
            fontSize: 14, fontWeight: tab === t.key ? 700 : 600,
            color: tab === t.key ? 'var(--primary)' : 'var(--gray)',
            borderBottom: tab === t.key ? '2px solid var(--primary)' : 'none',
            marginBottom: tab === t.key ? -2 : 0,
            fontFamily: 'inherit',
          }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '16px 20px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--gray)' }}>No {tab} orders</div>
        ) : (
          filtered.map(o => (
            <div key={o.id} className="card" style={{ marginBottom: 14, cursor: 'pointer', overflow: 'hidden' }} onClick={() => goTo('order-detail')}>
              <img src={o.img} style={{ width: '100%', height: 100, objectFit: 'cover' }} alt={o.title} onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = 'var(--neutral-dark)'; t.style.height = '50px'; }} />
              <div style={{ padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)' }}>{o.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>{o.farm}</div>
                  </div>
                  <span className={`tag ${o.status === 'active' ? 'tag-accent' : 'tag-dark'}`}>{o.statusLabel}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 12, color: 'var(--gray)' }}>Order {o.id}</div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: 'var(--primary)' }}>{o.total}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
