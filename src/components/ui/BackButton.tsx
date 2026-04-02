import { useApp } from '../../context/AppContext';

export function BackButton({ color = 'var(--primary)' }: { color?: string }) {
  const { goBack } = useApp();
  return (
    <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
}
