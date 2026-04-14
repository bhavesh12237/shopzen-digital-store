import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type OrderId = bigint;
export type UserId = Principal;
export type Timestamp = bigint;
export interface ContactMessage {
    id: ContactId;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Timestamp;
}
export interface OrderItem {
    productId: ProductId;
    quantity: bigint;
    price: number;
}
export interface BillingInfo {
    country: string;
    city: string;
    postalCode: string;
    fullName: string;
    email: string;
    address: string;
}
export type ProductId = bigint;
export type ContactId = bigint;
export interface Order {
    id: OrderId;
    status: OrderStatus;
    total: number;
    userId: UserId;
    createdAt: Timestamp;
    items: Array<OrderItem>;
    billingInfo: BillingInfo;
}
export interface UserProfilePublic {
    id: UserId;
    name: string;
    email: string;
}
export interface Product {
    id: ProductId;
    name: string;
    description: string;
    stock: bigint;
    imageUrl: string;
    category: string;
    rating: number;
    price: number;
}
export enum OrderStatus {
    shipped = "shipped",
    cancelled = "cancelled",
    pending = "pending",
    delivered = "delivered",
    processing = "processing"
}
export interface backendInterface {
    createOrder(items: Array<OrderItem>, billingInfo: BillingInfo, total: number): Promise<Order>;
    getMyOrders(): Promise<Array<Order>>;
    getMyProfile(): Promise<UserProfilePublic | null>;
    getOrder(id: OrderId): Promise<Order | null>;
    getProduct(id: ProductId): Promise<Product | null>;
    listProducts(category: string | null, searchText: string | null): Promise<Array<Product>>;
    seedProducts(): Promise<void>;
    submitContactMessage(name: string, email: string, subject: string, message: string): Promise<ContactMessage>;
    upsertProfile(name: string, email: string): Promise<UserProfilePublic>;
}
