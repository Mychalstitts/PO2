import { useApp } from './context/AppContext';
import { BottomNav } from './components/layout/BottomNav';
import { Toast } from './components/ui/Toast';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MarketScreen } from './screens/MarketScreen';
import { ListingDetailScreen } from './screens/ListingDetailScreen';
import { CutSheetScreen } from './screens/CutSheetScreen';
import { BagScreen } from './screens/BagScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { ConfirmedScreen } from './screens/ConfirmedScreen';
import { OrdersScreen } from './screens/OrdersScreen';
import { OrderDetailScreen } from './screens/OrderDetailScreen';
import { ProcessorsScreen } from './screens/ProcessorsScreen';
import { ProcessorDetailScreen } from './screens/ProcessorDetailScreen';
import { AlertsScreen } from './screens/AlertsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AdminScreen } from './screens/AdminScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ChatScreen } from './screens/ChatScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { SellScreen } from './screens/SellScreen';

function ScreenRouter() {
  const { currentScreen } = useApp();

  switch (currentScreen) {
    case 'onboard': return <OnboardingScreen />;
    case 'home': return <HomeScreen />;
    case 'market': return <MarketScreen />;
    case 'listing': return <ListingDetailScreen />;
    case 'cutsheet': return <CutSheetScreen />;
    case 'bag': return <BagScreen />;
    case 'checkout': return <CheckoutScreen />;
    case 'confirmed': return <ConfirmedScreen />;
    case 'orders': return <OrdersScreen />;
    case 'order-detail': return <OrderDetailScreen />;
    case 'processors': return <ProcessorsScreen />;
    case 'processor-detail': return <ProcessorDetailScreen />;
    case 'alerts': return <AlertsScreen />;
    case 'profile': return <ProfileScreen />;
    case 'admin': return <AdminScreen />;
    case 'settings': return <SettingsScreen />;
    case 'chat': return <ChatScreen />;
    case 'favorites': return <FavoritesScreen />;
    case 'sell': return <SellScreen />;
    default: return <OnboardingScreen />;
  }
}

export default function App() {
  return (
    <>
      <Toast />
      <ScreenRouter />
      <BottomNav />
    </>
  );
}
