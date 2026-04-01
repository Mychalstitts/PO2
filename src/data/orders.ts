import { Order } from '../types';
import { LISTINGS } from './listings';

export const ORDERS: Order[] = [
  {
    id: 'PO-2024-8831',
    title: 'Premium Angus Steer #402',
    status: 'active',
    statusLabel: 'In Processing',
    farm: 'Rolling Hills Ranch',
    total: '$3,596.25',
    img: LISTINGS[0].img,
  },
  {
    id: 'PO-2024-7210',
    title: 'Heritage Duroc Hog #118',
    status: 'completed',
    statusLabel: 'Delivered',
    farm: 'Sunrise Swine',
    total: '$1,022.00',
    img: LISTINGS[1].img,
  },
];
