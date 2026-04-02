import { useApp } from '../context/AppContext';

export function OnboardingScreen() {
  const { goTo, showToast } = useApp();

  const selectRole = () => {
    showToast('Welcome to Protein Outfitters!');
    setTimeout(() => goTo('home'), 600);
  };

  return (
    <div className="screen" style={{ background: 'var(--primary)', paddingBottom: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ position: 'relative', flex: 1, minHeight: '60vh', overflow: 'hidden' }}>
        <img
          src="https://imagine-public.x.ai/imagine-public/images/c3a30aac-d34c-4a5a-adc1-8be50a813c39.jpg"
          alt="Ranch"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
          onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = '#1a4a28'; t.style.opacity = '1'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,27,14,0.1) 0%, rgba(6,27,14,0.85) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px 24px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>Farm to Fork Marketplace</div>
          <div style={{ fontSize: 38, fontWeight: 900, color: 'white', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 8 }}>PROTEIN<br />OUTFITTERS</div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', fontWeight: 400, lineHeight: 1.5 }}>Reserve heritage breeds & premium cuts directly from local farms.</div>
        </div>
      </div>
      <div style={{ background: 'white', borderRadius: '28px 28px 0 0', padding: '32px 24px 40px' }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>How are you joining?</div>
        <div style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 24 }}>Select your role to personalize your experience.</div>
        <button className="btn btn-primary btn-full btn-lg" onClick={() => selectRole()} style={{ marginBottom: 12 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" /></svg>
          I'm a Consumer
        </button>
        <button className="btn btn-secondary btn-full btn-lg" onClick={() => selectRole()} style={{ marginBottom: 12 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
          I'm a Farmer / Producer
        </button>
        <button className="btn btn-ghost btn-full" onClick={() => selectRole()} style={{ color: 'var(--gray)' }}>
          Continue as Guest →
        </button>
      </div>
    </div>
  );
}
