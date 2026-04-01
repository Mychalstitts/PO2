export interface Listing {
  id: number;
  title: string;
  breed: string;
  type: AnimalType;
  farm: string;
  location: string;
  price: string;
  priceNum: number;
  weight: number;
  img: string;
  score: number;
  feed: string;
  avail: string;
  desc: string;
}

export type AnimalType = 'beef' | 'pork' | 'lamb' | 'venison' | 'poultry';

export interface Order {
  id: string;
  title: string;
  status: 'active' | 'completed' | 'cancelled';
  statusLabel: string;
  farm: string;
  total: string;
  img: string;
}

export interface BagItem extends Listing {
  qty: number;
}

export type ScreenId =
  | 'onboard'
  | 'home'
  | 'market'
  | 'listing'
  | 'cutsheet'
  | 'bag'
  | 'checkout'
  | 'confirmed'
  | 'orders'
  | 'order-detail'
  | 'processors'
  | 'processor-detail'
  | 'alerts'
  | 'profile'
  | 'admin'
  | 'settings'
  | 'chat'
  | 'favorites'
  | 'sell';
