import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';
import { LISTINGS } from '../data/listings';

export function BagScreen() {
  const { bag, removeFromBag, goTo } = useApp();

  const items = bag.length > 0 ? bag : [{ ...LISTINGS[0], qty: 1 }];

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>My Bag</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '16px 20px' }}>
        {items.map(item => (
          <div key={item.id} className="card-flat" style={{ padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <img src={item.img} style={{ width: 72, height: 72, borderRadius: 'var(--radius-md)', objectFit: 'cover' }} alt={item.title} onError={(e) => { (e.target as HTMLImageElement).style.background = 'var(--neutral-dark)'; }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>{item.title}</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>{item.farm}</div>
              <div style={{ fontSize: 15, fontWeight: 900, color: 'var(--primary)', marginTop: 4 }}>{item.price}/lb</div>
            </div>
            <button onClick={() => removeFromBag(item.id)} style={{ background: 'var(--alert-light)', color: 'var(--alert)', border: 'none', borderRadius: 'var(--radius-sm)', padding: '6px 10px', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>Remove</button>
          </div>
        ))}
      </div>

      <div className="card-flat" style={{ margin: '0 20px 20px', padding: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--primary)', marginBottom: 12 }}>Order Summary</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--gray)', marginBottom: 8 }}>
          <span>Subtotal</span><span>$3,375.00</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--gray)', marginBottom: 8 }}>
          <span>Platform Fee (3%)</span><span>$101.25</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--gray)', marginBottom: 14 }}>
          <span>Processing Est.</span><span>$120.00</span>
        </div>
        <div style={{ borderTop: '1px solid var(--neutral-dark)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 900, color: 'var(--primary)' }}>
          <span>Total</span><span>$3,596.25</span>
        </div>
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        <button className="btn btn-primary btn-full btn-lg" onClick={() => goTo('checkout')}>
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
}
