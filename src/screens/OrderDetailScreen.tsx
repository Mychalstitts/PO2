import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';

export function OrderDetailScreen() {
  const { goTo } = useApp();

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Order Details</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '16px 20px' }}>
        <div className="card" style={{ marginBottom: 16, overflow: 'hidden' }}>
          <img
            src="https://imagine-public.x.ai/imagine-public/images/92a5abf9-bf7e-4d84-a1b6-9960ca0f0d3e.jpg"
            style={{ width: '100%', height: 160, objectFit: 'cover' }}
            alt="order"
            onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = 'var(--neutral-dark)'; t.style.height = '80px'; }}
          />
          <div style={{ padding: '14px 16px' }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--primary)' }}>Premium Angus Steer #402</div>
            <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>Rolling Hills Ranch · Billings, MT</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
              <span className="tag tag-accent">In Processing</span>
              <span style={{ fontSize: 16, fontWeight: 900, color: 'var(--primary)' }}>$3,596.25</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--primary)', marginBottom: 14 }}>Processing Timeline</div>
        <div className="timeline">
          {[
            { label: 'Reservation Confirmed', sub: 'March 24, 2025', status: 'done' },
            { label: 'Processor Scheduled', sub: 'Bemidji Meat Processing · May 2', status: 'done' },
            { label: 'In Processing', sub: 'Now — est. 3-5 days', status: 'active' },
            { label: 'Packaged & Ready', sub: 'Est. May 7, 2025', status: '' },
            { label: 'Ready for Pickup / Delivery', sub: 'Est. May 8-10, 2025', status: '' },
          ].map((step) => (
            <div key={step.label} className={`timeline-item${step.status === 'done' ? ' done' : ''}`}>
              <div className={`timeline-dot${step.status === 'done' ? ' done' : step.status === 'active' ? ' active' : ''}`}>
                {step.status === 'done' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                )}
              </div>
              <div className="timeline-content">
                <div className="timeline-label">{step.label}</div>
                <div className="timeline-sub" style={step.status === 'active' ? { color: 'var(--primary)' } : undefined}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="card-flat" style={{ padding: 16, marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="https://imagine-public.x.ai/imagine-public/images/afaa1857-6fa0-4e1a-b72f-e55e02b9eadc.jpg"
            style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
            alt="farmer"
            onError={(e) => { (e.target as HTMLImageElement).style.background = 'var(--neutral-dark)'; }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Jake Morrison · Farmer</div>
            <div style={{ fontSize: 12, color: 'var(--gray)' }}>Rolling Hills Ranch</div>
          </div>
          <button className="btn btn-accent btn-sm" onClick={() => goTo('chat')}>Chat</button>
        </div>
      </div>
    </div>
  );
}
