export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface BillingInfo {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export type OrderStatus =
  | { __kind__: "Pending" }
  | { __kind__: "Processing" }
  | { __kind__: "Shipped" }
  | { __kind__: "Delivered" }
  | { __kind__: "Cancelled" };

export interface Order {
  id: number;
  userId: string;
  items: OrderItem[];
  billingInfo: BillingInfo;
  status: OrderStatus;
  total: number;
  createdAt: number;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
