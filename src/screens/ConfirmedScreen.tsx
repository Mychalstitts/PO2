import { useMemo } from 'react';
import { useApp } from '../context/AppContext';

export function ConfirmedScreen() {
  const { goTo } = useApp();
  const orderNum = useMemo(() => '#PO-' + Date.now().toString().slice(-8), []);

  return (
    <div className="screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '40px 24px' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--primary)', textAlign: 'center', marginBottom: 8 }}>Reservation Confirmed!</div>
      <div style={{ fontSize: 14, color: 'var(--gray)', textAlign: 'center', marginBottom: 28, lineHeight: 1.6 }}>Your deposit has been received. The farmer will contact you to confirm processing details.</div>

      <div className="card-flat" style={{ width: '100%', padding: 20, marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Order Details</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)', marginBottom: 6 }}>Premium Angus Steer</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--gray)', marginBottom: 4 }}><span>Order #</span><span style={{ fontWeight: 700, color: 'var(--primary)' }}>{orderNum}</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--gray)', marginBottom: 4 }}><span>Total</span><span style={{ fontWeight: 700 }}>$3,596.25</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--gray)' }}><span>Est. Processing</span><span style={{ fontWeight: 700 }}>May 2025</span></div>
      </div>

      <div style={{ width: '100%', marginBottom: 12 }}>
        <button className="btn btn-primary btn-full" onClick={() => goTo('orders')}>Track Order →</button>
      </div>
      <button className="btn btn-secondary btn-full" onClick={() => goTo('home')}>Continue Shopping</button>
    </div>
  );
}
