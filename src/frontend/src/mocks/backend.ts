import type { backendInterface, Product, Order, ContactMessage, UserProfilePublic, OrderStatus } from "../backend";

const mockProducts: Product[] = [
  {
    id: BigInt(1),
    name: "Premium Wireless Headphones",
    description: "High-quality noise-cancelling wireless headphones with 30-hour battery life.",
    stock: BigInt(50),
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.8,
    price: 199.99,
  },
  {
    id: BigInt(2),
    name: "Minimalist Leather Watch",
    description: "Elegant minimalist design with genuine leather strap and sapphire crystal glass.",
    stock: BigInt(30),
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.6,
    price: 299.99,
  },
  {
    id: BigInt(3),
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium 360° surround sound.",
    stock: BigInt(75),
    imageUrl: "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.5,
    price: 129.99,
  },
  {
    id: BigInt(4),
    name: "Ergonomic Office Chair",
    description: "Fully adjustable ergonomic chair with lumbar support for all-day comfort.",
    stock: BigInt(20),
    imageUrl: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=400&h=400&fit=crop",
    category: "Furniture",
    rating: 4.7,
    price: 449.99,
  },
  {
    id: BigInt(5),
    name: "Stainless Steel Water Bottle",
    description: "Double-wall insulated bottle keeps drinks cold 24h or hot 12h.",
    stock: BigInt(100),
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "Lifestyle",
    rating: 4.9,
    price: 39.99,
  },
  {
    id: BigInt(6),
    name: "Portable Laptop Stand",
    description: "Lightweight aluminum laptop stand for improved posture and airflow.",
    stock: BigInt(60),
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.4,
    price: 59.99,
  },
];

export const mockBackend: backendInterface = {
  listProducts: async (_category, _searchText) => mockProducts,

  getProduct: async (id) => mockProducts.find((p) => p.id === id) ?? null,

  createOrder: async (items, billingInfo, total) => ({
    id: BigInt(1001),
    status: "pending" as unknown as OrderStatus,
    total,
    userId: { toText: () => "user-1" } as any,
    createdAt: BigInt(Date.now()),
    items,
    billingInfo,
  }),

  getMyOrders: async () => [],

  getMyProfile: async () => null,

  getOrder: async () => null,

  seedProducts: async () => undefined,

  submitContactMessage: async (name, email, subject, message) => ({
    id: BigInt(1),
    name,
    email,
    subject,
    message,
    timestamp: BigInt(Date.now()),
  }),

  upsertProfile: async (name, email) => ({
    id: { toText: () => "user-1" } as any,
    name,
    email,
  }),
};
