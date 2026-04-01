import { useApp } from '../context/AppContext';

export function SellScreen() {
  const { goBack, showToast, goTo } = useApp();

  const submitListing = () => {
    showToast('Listing posted!');
    setTimeout(() => goTo('home'), 1500);
  };

  return (
    <div className="screen">
      <div style={{ background: 'var(--primary)', padding: '24px 20px 28px' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'inline-flex', marginBottom: 16 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Farmer Portal</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: 'white', lineHeight: 1.1 }}>Create a<br />Listing</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>Connect directly with buyers in your area</div>
      </div>

      <div style={{ padding: 20 }}>
        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Animal Details</div>
          <div className="form-group">
            <label className="form-label">Animal Type</label>
            <select className="form-input form-select" defaultValue="">
              <option value="" disabled>Select type...</option>
              <option>Beef Cattle</option>
              <option>Pork</option>
              <option>Lamb</option>
              <option>Venison</option>
              <option>Poultry</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Breed / Description</label>
            <input className="form-input" type="text" placeholder="e.g. Black Angus, grass-fed" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="form-group">
              <label className="form-label">Live Weight (lbs)</label>
              <input className="form-input" type="number" placeholder="1,200" />
            </div>
            <div className="form-group">
              <label className="form-label">Price / lb ($)</label>
              <input className="form-input" type="number" step="0.05" placeholder="4.50" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Available Date</label>
            <input className="form-input" type="date" />
          </div>
        </div>

        <div className="card-flat" style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Farm Information</div>
          <div className="form-group">
            <label className="form-label">Farm Name</label>
            <input className="form-input" type="text" placeholder="Rolling Hills Ranch" defaultValue="Rolling Hills Ranch" />
          </div>
          <div className="form-group">
            <label className="form-label">Location (City, State)</label>
            <input className="form-input" type="text" placeholder="Billings, MT" defaultValue="Billings, MT" />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="form-input" rows={4} placeholder="Tell buyers about your farming practices, certifications, feed type..." />
          </div>
        </div>

        <button className="btn btn-primary btn-full btn-lg" onClick={submitListing}>
          Post Listing
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
        </button>
      </div>
    </div>
  );
}
