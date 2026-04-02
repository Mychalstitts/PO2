import { useApp } from '../../context/AppContext';
import { ScreenId } from '../../types';

const NAV_SCREENS: ScreenId[] = ['onboard', 'chat', 'checkout', 'confirmed'];

export function BottomNav() {
  const { currentScreen, goTo } = useApp();

  if (NAV_SCREENS.includes(currentScreen)) return null;

  const navMap: { id: ScreenId; label: string; icon: JSX.Element }[] = [
    {
      id: 'home', label: 'Home',
      icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    },
    {
      id: 'market', label: 'Browse',
      icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    },
    {
      id: 'orders', label: 'Orders',
      icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
    },
    {
      id: 'profile', label: 'Profile',
      icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    },
  ];

  const activeNav = (['home', 'market', 'orders', 'profile'] as ScreenId[]).includes(currentScreen) ? currentScreen : null;

  return (
    <nav className="bottom-nav">
      {navMap.map(item => (
        <button
          key={item.id}
          className={`nav-item${activeNav === item.id ? ' active' : ''}`}
          onClick={() => goTo(item.id)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
