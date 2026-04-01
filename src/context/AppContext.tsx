import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react';
import { ScreenId, Listing, BagItem } from '../types';
import { LISTINGS } from '../data/listings';

interface AppState {
  currentScreen: ScreenId;
  currentListing: Listing | null;
  bag: BagItem[];
  favs: number[];
  cutVals: Record<string, number>;
  toastMsg: string;
  toastVisible: boolean;
}

interface AppContextType extends AppState {
  goTo: (screenId: ScreenId) => void;
  goBack: () => void;
  setCurrentListing: (listing: Listing | null) => void;
  addToBag: (listing: Listing) => void;
  removeFromBag: (id: number) => void;
  toggleFav: (id: number) => void;
  adjustCut: (cut: string, delta: number) => void;
  showToast: (msg: string) => void;
  openListing: (id: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('onboard');
  const [currentListing, setCurrentListing] = useState<Listing | null>(null);
  const [bag, setBag] = useState<BagItem[]>([]);
  const [favs, setFavs] = useState<number[]>([]);
  const [cutVals, setCutVals] = useState<Record<string, number>>({
    ribeye: 2, strip: 2, filet: 1, ground: 10, stew: 4,
  });
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const prevScreens = useRef<ScreenId[]>([]);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2400);
  }, []);

  const goTo = useCallback((screenId: ScreenId) => {
    setCurrentScreen(prev => {
      prevScreens.current.push(prev);
      return screenId;
    });
    window.scrollTo(0, 0);
  }, []);

  const goBack = useCallback(() => {
    if (prevScreens.current.length > 0) {
      const prev = prevScreens.current.pop()!;
      setCurrentScreen(prev);
      window.scrollTo(0, 0);
    } else {
      setCurrentScreen('home');
    }
  }, []);

  const addToBag = useCallback((listing: Listing) => {
    setBag(prev => {
      if (prev.find(i => i.id === listing.id)) return prev;
      return [...prev, { ...listing, qty: 1 }];
    });
    showToast('Added to bag!');
  }, [showToast]);

  const removeFromBag = useCallback((id: number) => {
    setBag(prev => prev.filter(i => i.id !== id));
    showToast('Removed from bag');
  }, [showToast]);

  const toggleFav = useCallback((id: number) => {
    setFavs(prev => {
      if (prev.includes(id)) {
        showToast('Removed from saved');
        return prev.filter(f => f !== id);
      }
      showToast('Saved!');
      return [...prev, id];
    });
  }, [showToast]);

  const adjustCut = useCallback((cut: string, delta: number) => {
    setCutVals(prev => ({
      ...prev,
      [cut]: Math.max(0, (prev[cut] || 0) + delta),
    }));
  }, []);

  const openListing = useCallback((id: number) => {
    const listing = LISTINGS.find(l => l.id === id) || null;
    setCurrentListing(listing);
    goTo('listing');
  }, [goTo]);

  return (
    <AppContext.Provider value={{
      currentScreen, currentListing, bag, favs, cutVals, toastMsg, toastVisible,
      goTo, goBack, setCurrentListing, addToBag, removeFromBag, toggleFav,
      adjustCut, showToast, openListing,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
