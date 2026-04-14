import type { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Sample products since backend interface is not yet generated
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium audio experience with 30-hour battery life, adaptive noise cancellation, and ultra-comfortable over-ear design perfect for work and travel.",
    price: 299.99,
    category: "Electronics",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 15,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    description:
      "Swiss movement with genuine Italian leather strap. Water-resistant to 50m. A timeless accessory for every occasion.",
    price: 189.99,
    category: "Accessories",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 8,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    description:
      "Track your health metrics with precision. Heart rate monitoring, sleep tracking, and 7-day battery life in a sleek titanium design.",
    price: 149.99,
    category: "Electronics",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 22,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Premium Laptop Backpack",
    description:
      "Fits 16-inch laptops with dedicated padded compartment. Water-resistant nylon, USB charging port, and ergonomic shoulder straps.",
    price: 89.99,
    category: "Bags",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 30,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    description:
      "360-degree sound with deep bass. IPX7 waterproof, 20-hour playtime. Perfect for outdoor adventures.",
    price: 79.99,
    category: "Electronics",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 18,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Slim Card Holder Wallet",
    description:
      "Full-grain leather with RFID blocking. Holds up to 8 cards and cash. Ultra-slim 6mm profile.",
    price: 49.99,
    category: "Accessories",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 40,
    rating: 4.7,
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    description:
      "Tactile brown switches with RGB backlight. Aluminum frame, detachable USB-C cable. Built for professional typists.",
    price: 129.99,
    category: "Electronics",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 12,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Ceramic Pour-Over Coffee Set",
    description:
      "Handcrafted ceramic dripper with matching server. Includes 40 premium filter papers. Elevate your morning ritual.",
    price: 64.99,
    category: "Home",
    imageUrl: "/assets/generated/hero-shopzen.dim_1600x800.jpg",
    stock: 25,
    rating: 4.6,
  },
];

export function useProducts(category?: string, searchText?: string) {
  return useQuery<Product[]>({
    queryKey: ["products", category, searchText],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      let products = SAMPLE_PRODUCTS;
      if (category && category !== "All") {
        products = products.filter((p) => p.category === category);
      }
      if (searchText) {
        const q = searchText.toLowerCase();
        products = products.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q),
        );
      }
      return products;
    },
  });
}

export function useProduct(id: number) {
  return useQuery<Product | null>({
    queryKey: ["product", id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      return SAMPLE_PRODUCTS.find((p) => p.id === id) ?? null;
    },
    enabled: id > 0,
  });
}

export { SAMPLE_PRODUCTS };
