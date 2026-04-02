import { useApp } from '../context/AppContext';

export function AlertsScreen() {
  const { showToast } = useApp();

  const alerts = [
    { title: 'Age Threshold Violation', desc: 'Lot #9982 requires immediate review — animal age exceeds 30-month threshold.', time: '2 hours ago', urgent: true, unread: false },
    { title: 'New Listing Available', desc: 'Prairie Edge Farm just posted a Hereford steer. 1,180 lbs at $4.25/lb.', time: '5 hours ago', urgent: false, unread: true },
    { title: 'Logistics Delay', desc: 'Central Hub storage is at 94% capacity. Pickup may be delayed 1-2 days.', time: '1 day ago', urgent: false, unread: true },
    { title: 'Order #PO-2024-8831 Confirmed', desc: 'Your reservation for Premium Angus Steer has been confirmed by Rolling Hills Ranch.', time: '3 days ago', urgent: false, unread: false },
    { title: 'Price Alert: Beef ↑ 4.2%', desc: 'Beef prices up 4.2% this week. Your saved listing #402 is now $4.50/lb.', time: '5 days ago', urgent: false, unread: false },
  ];

  return (
    <div className="screen">
      <div className="top-header">
        <div style={{ width: 40 }} />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Notifications</div>
        <button className="icon-btn" onClick={() => showToast('All marked as read')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
        </button>
      </div>

      <div style={{ padding: '16px 20px' }}>
        {alerts.map((a, i) => (
          <div key={i} className={`alert-item${a.urgent ? ' urgent' : a.unread ? ' unread' : ''}`}>
            <div className={`alert-dot${a.urgent ? ' urgent' : ''}`} style={!a.urgent && !a.unread ? { background: 'var(--neutral-dark)' } : undefined} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{a.title}</div>
              <div style={{ fontSize: 13, color: 'var(--gray)' }}>{a.desc}</div>
              <div style={{ fontSize: 11, color: 'var(--gray-light)', marginTop: 6 }}>{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
