import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';
import { LISTINGS } from '../data/listings';
import { ListingCard } from '../components/ui/ListingCard';

export function FavoritesScreen() {
  const { favs } = useApp();
  const items = favs.length > 0 ? LISTINGS.filter(l => favs.includes(l.id)) : LISTINGS.slice(0, 4);

  return (
    <div className="screen">
      <div className="top-header">
        <BackButton />
        <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>Saved Listings</div>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {items.map(l => <ListingCard key={l.id} listing={l} compact />)}
      </div>
    </div>
  );
}
