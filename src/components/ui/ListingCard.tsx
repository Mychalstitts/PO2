import { Listing } from '../../types';
import { useApp } from '../../context/AppContext';

interface Props {
  listing: Listing;
  compact?: boolean;
}

export function ListingCard({ listing, compact }: Props) {
  const { openListing } = useApp();

  if (compact) {
    return (
      <div className="listing-card" onClick={() => openListing(listing.id)}>
        <img
          src={listing.img}
          className="listing-img"
          style={{ height: 130 }}
          alt={listing.title}
          onError={(e) => { (e.target as HTMLImageElement).style.background = 'var(--neutral-dark)'; }}
        />
        <div className="listing-body" style={{ padding: '10px 12px' }}>
          <div className="listing-breed">{listing.breed}</div>
          <div className="listing-title" style={{ fontSize: 13 }}>{listing.title}</div>
          <div className="listing-price" style={{ fontSize: 17 }}>{listing.price}<span>/lb</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="listing-card" onClick={() => openListing(listing.id)}>
      <img
        src={listing.img}
        className="listing-img"
        alt={listing.title}
        onError={(e) => { (e.target as HTMLImageElement).style.background = 'var(--neutral-dark)'; }}
      />
      <div className="listing-body">
        <div className="listing-breed">{listing.breed}</div>
        <div className="listing-title">{listing.title}</div>
        <div className="listing-meta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          </svg>
          {listing.location} &middot; {listing.weight} lbs
        </div>
        <div className="listing-footer">
          <div className="listing-price">{listing.price}<span>/lb</span></div>
          <span className="tag tag-accent">{listing.avail}</span>
        </div>
      </div>
    </div>
  );
}
