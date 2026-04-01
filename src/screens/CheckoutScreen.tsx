import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';

export function CheckoutScreen() {
  const { showToast, goTo } = useApp();

  const placeOrder = () => {
    showToast('Processing reservation...');
    setTimeout(() => goTo('confirmed'), 1500);
  };

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Secure Checkout</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '16px 20px' }}>
        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Delivery Address</div>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" type="text" placeholder="Jake Morrison" defaultValue="Jake Morrison" />
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <input className="form-input" type="text" placeholder="123 Ranch Road" defaultValue="142 Prairie Road" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="form-group">
              <label className="form-label">City</label>
              <input className="form-input" type="text" defaultValue="Bemidji" />
            </div>
            <div className="form-group">
              <label className="form-label">State</label>
              <input className="form-input" type="text" defaultValue="MN" />
            </div>
          </div>
        </div>

        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Payment Method</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { name: 'Apple Pay', sub: 'Touch ID · Instant', icon: '🍎', selected: true },
              { name: 'Credit / Debit Card', sub: 'Visa, MC, Amex', icon: '💳', selected: false },
              { name: 'ACH Bank Transfer', sub: '2-3 business days', icon: '🏦', selected: false },
            ].map(pm => (
              <div key={pm.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 'var(--radius-md)', border: `2px solid ${pm.selected ? 'var(--primary)' : 'var(--neutral-dark)'}`, background: pm.selected ? 'var(--accent-light)' : undefined, cursor: 'pointer' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: pm.selected ? 'var(--primary)' : undefined, border: pm.selected ? undefined : '2px solid var(--neutral-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {pm.selected && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }} />}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{pm.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray)' }}>{pm.sub}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 20 }}>{pm.icon}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-flat" style={{ padding: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Investment Breakdown</div>
          <div style={{ fontSize: 13, color: 'var(--gray)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}><span>Live Weight Purchase</span><span>$3,375.00</span></div>
          <div style={{ fontSize: 13, color: 'var(--gray)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}><span>Processing Fee</span><span>$120.00</span></div>
          <div style={{ fontSize: 13, color: 'var(--gray)', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}><span>Platform (3%)</span><span>$101.25</span></div>
          <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--primary)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--neutral-dark)', paddingTop: 12 }}>
            <span>Reserve Now</span><span>$3,596.25</span>
          </div>
        </div>

        <button className="btn btn-primary btn-full btn-lg" onClick={placeOrder}>
          Place Reservation
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
        </button>
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: 11, color: 'var(--gray)' }}>🔒 Secured with 256-bit SSL encryption</div>
      </div>
    </div>
  );
}
