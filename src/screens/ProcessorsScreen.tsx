import { useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';

export function ProcessorsScreen() {
  const { goTo } = useApp();
  const [showSheet, setShowSheet] = useState(false);
  const [sheetTitle, setSheetTitle] = useState('');

  const showProcessorSheet = (name: string) => {
    setSheetTitle(name);
    setShowSheet(true);
  };

  const closeSheet = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowSheet(false);
  }, []);

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Find Processors</div>
        <div style={{ width: 40 }} />
      </div>

      {/* Map */}
      <div className="map-container">
        <div className="map-bg" />
        <div className="map-road-h" />
        <div className="map-road-v" />
        <div className="map-pin" style={{ top: '35%', left: '30%' }} onClick={() => showProcessorSheet('Bemidji Meat Processing')} />
        <div className="map-pin" style={{ top: '60%', left: '65%' }} onClick={() => showProcessorSheet('Northern MN Custom Meats')} />
        <div className="map-pin" style={{ top: '45%', left: '55%' }} onClick={() => showProcessorSheet('Prairie Edge Slaughter')} />
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12 }}>
          <div className="search-bar" style={{ margin: 0, borderRadius: 'var(--radius-md)' }}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <input type="text" placeholder="USDA certified, next week..." />
          </div>
        </div>
      </div>

      {/* Processor List */}
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="card" style={{ cursor: 'pointer', overflow: 'hidden' }} onClick={() => goTo('processor-detail')}>
          <img src="https://imagine-public.x.ai/imagine-public/images/8a272570-12da-436e-bce4-25f7e1e6a0e1.jpg" style={{ width: '100%', height: 120, objectFit: 'cover' }} alt="processor" onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = 'var(--neutral-dark)'; t.style.height = '60px'; }} />
          <div style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>Bemidji Meat Processing</div>
                <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>8 mi · Mon-Fri 6am-5pm · Open Now</div>
              </div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>4.8 ★</div></div>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
              <span className="tag tag-primary">USDA</span>
              <span className="tag tag-accent">Beef</span>
              <span className="tag tag-dark">Pork</span>
              <span className="tag tag-dark">Lamb</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--gray)' }}>
              <span>Kill fee: $120</span><span>Hang time: 14 days</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', overflow: 'hidden' }} onClick={() => goTo('processor-detail')}>
          <div style={{ height: 80, background: 'var(--neutral-dark)' }} />
          <div style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>Northern MN Custom Meats</div>
                <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>14 mi · Tue-Sat 7am-4pm</div>
              </div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>4.5 ★</div></div>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
              <span className="tag tag-dark">State</span>
              <span className="tag tag-accent">Lamb</span>
              <span className="tag tag-dark">Venison</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--gray)' }}>Kill fee: $85 · Custom cuts</div>
          </div>
        </div>
      </div>

      {/* Processor Sheet */}
      {showSheet && (
        <div className="overlay" onClick={closeSheet}>
          <div className="bottom-sheet open">
            <span className="sheet-handle" />
            <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--primary)', marginBottom: 4 }}>{sheetTitle}</div>
            <div style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 16 }}>4.8 ★ · 47 reviews · Open Now</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <button className="btn btn-primary" onClick={() => { goTo('processor-detail'); setShowSheet(false); }} style={{ flex: 1 }}>Book Now</button>
              <button className="btn btn-secondary" onClick={() => setShowSheet(false)} style={{ flex: 1 }}>Directions</button>
            </div>
            <div style={{ borderTop: '1px solid var(--neutral-dark)', paddingTop: 16, fontSize: 13, display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--gray)' }}>
              <div>🕒 Mon–Fri 6am–5pm &nbsp; Sat 7am–2pm</div>
              <div>📞 (218) 555-0192</div>
              <div>📍 USDA Certified · 8 mi away</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
