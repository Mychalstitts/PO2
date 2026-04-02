import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';

export function CutSheetScreen() {
  const { cutVals, adjustCut, showToast, goTo } = useApp();

  const saveCutSheet = () => {
    showToast('Cut sheet saved!');
    setTimeout(() => goTo('bag'), 1000);
  };

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Custom Cut Sheet</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '0 20px' }}>
        <div style={{ padding: '16px 0 8px', fontSize: 13, color: 'var(--gray)' }}>Tailor your harvest. Select preferred cuts, thicknesses, and packaging.</div>

        {/* Steaks */}
        <div style={{ marginBottom: 20 }}>
          <div className="section-title" style={{ marginBottom: 10, padding: '8px 0' }}>Steak Cuts</div>
          {[
            { key: 'ribeye', name: 'Ribeye', sub: '1" thickness' },
            { key: 'strip', name: 'NY Strip', sub: '1.25" thickness' },
            { key: 'filet', name: 'Filet Mignon', sub: '1.5" thickness' },
          ].map((cut, i) => (
            <div key={cut.key} className={`cut-option${i === 0 ? ' selected' : ''}`}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{cut.name}</div>
                <div style={{ fontSize: 12, color: 'var(--gray)' }}>{cut.sub}</div>
              </div>
              <div className="stepper">
                <button className="stepper-btn" onClick={() => adjustCut(cut.key, -1)}>−</button>
                <span className="stepper-val">{cutVals[cut.key] || 0}</span>
                <button className="stepper-btn" onClick={() => adjustCut(cut.key, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Ground & Stew */}
        <div style={{ marginBottom: 20 }}>
          <div className="section-title" style={{ marginBottom: 10, padding: '8px 0' }}>Ground & Stew</div>
          {[
            { key: 'ground', name: 'Ground Beef', sub: '80/20 lean — 1lb packs' },
            { key: 'stew', name: 'Stew Meat', sub: '1" cubes — 1lb packs' },
          ].map((cut, i) => (
            <div key={cut.key} className={`cut-option${i === 0 ? ' selected' : ''}`}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{cut.name}</div>
                <div style={{ fontSize: 12, color: 'var(--gray)' }}>{cut.sub}</div>
              </div>
              <div className="stepper">
                <button className="stepper-btn" onClick={() => adjustCut(cut.key, -1)}>−</button>
                <span className="stepper-val">{cutVals[cut.key] || 0}</span>
                <button className="stepper-btn" onClick={() => adjustCut(cut.key, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialty */}
        <div style={{ marginBottom: 24 }}>
          <div className="section-title" style={{ marginBottom: 10, padding: '8px 0' }}>Specialty Cuts</div>
          <div className="cut-option">
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Brisket (whole)</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>8-12 lbs</div>
            </div>
            <button className="toggle-switch on" onClick={(e) => (e.target as HTMLElement).classList.toggle('on')} />
          </div>
          <div className="cut-option" style={{ marginTop: 10 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Short Ribs</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>3-bone slabs</div>
            </div>
            <button className="toggle-switch" onClick={(e) => (e.target as HTMLElement).classList.toggle('on')} />
          </div>
        </div>

        <button className="btn btn-primary btn-full btn-lg" onClick={saveCutSheet}>
          Save Cut Sheet & Continue →
        </button>
      </div>
    </div>
  );
}
