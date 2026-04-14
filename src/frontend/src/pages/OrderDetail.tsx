import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { SAMPLE_PRODUCTS } from "@/hooks/useProducts";
import type { Order, OrderItem } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  MapPin,
  Package,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ORDERS_STORAGE_KEY = "shopzen_orders";
const LAST_ORDER_KEY = "shopzen_last_order";

function loadOrderFromStorage(orderId: number): Order | null {
  try {
    // First try last order shortcut
    const lastStr = localStorage.getItem(LAST_ORDER_KEY);
    if (lastStr) {
      const last = JSON.parse(lastStr) as Order;
      if (last.id === orderId) return last;
    }
    // Then scan full orders list
    const allStr = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!allStr) return null;
    const all = JSON.parse(allStr) as Order[];
    return all.find((o) => o.id === orderId) ?? null;
  } catch {
    return null;
  }
}

function getEstimatedDelivery(): string {
  const start = new Date();
  start.setDate(start.getDate() + 7);
  const end = new Date();
  end.setDate(end.getDate() + 10);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return `${fmt(start)} – ${fmt(end)}`;
}

const STATUS_LABELS: Record<string, string> = {
  Pending: "Pending",
  Processing: "Processing",
  Shipped: "Shipped",
  Delivered: "Delivered",
  Cancelled: "Cancelled",
};

const STATUS_COLORS: Record<string, string> = {
  Pending: "text-amber-600 bg-amber-50 border-amber-200",
  Processing: "text-blue-600 bg-blue-50 border-blue-200",
  Shipped: "text-teal-700 bg-teal-50 border-teal-200",
  Delivered: "text-green-700 bg-green-50 border-green-200",
  Cancelled: "text-red-600 bg-red-50 border-red-200",
};

function OrderItemRow({ item, index }: { item: OrderItem; index: number }) {
  const product = SAMPLE_PRODUCTS.find((p) => p.id === item.productId);
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-4 py-4"
      data-ocid={`order_detail.item.${index + 1}`}
    >
      <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0 border border-border">
        {product ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-sm line-clamp-1">
          {product?.name ?? `Product #${item.productId}`}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {product?.category ?? "Item"} · Qty: {item.quantity}
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className="font-display font-semibold text-foreground tabular-nums">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <p className="text-xs text-muted-foreground">
          ${item.price.toFixed(2)} each
        </p>
      </div>
    </motion.div>
  );
}

function OrderDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Skeleton className="h-48 rounded-xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function OrderDetail() {
  const { orderId } = useParams({ from: "/orders/$orderId" });

  // Detect if coming from checkout (confirmation mode)
  // We check if the URL has a `confirmed` search param or if it's the last order
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = Number(orderId);
    // Check if this is the most recent order (confirmation flow)
    try {
      const lastStr = localStorage.getItem(LAST_ORDER_KEY);
      if (lastStr) {
        const last = JSON.parse(lastStr) as Order;
        if (last.id === id) setIsConfirmation(true);
      }
    } catch {
      // ignore
    }

    const timer = setTimeout(() => {
      const found = loadOrderFromStorage(id);
      setOrder(found);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [orderId]);

  if (isLoading) {
    return (
      <div data-ocid="order_detail.loading_state">
        <div className="bg-card border-b border-border py-10">
          <div className="container mx-auto px-4">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-64 mt-2" />
          </div>
        </div>
        <OrderDetailSkeleton />
      </div>
    );
  }

  if (!order) {
    return (
      <div
        className="container mx-auto px-4 py-24 text-center"
        data-ocid="order_detail.error_state"
      >
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
          <Package className="w-10 h-10 text-muted-foreground opacity-40" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Order Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          We couldn't find order #{orderId}. It may have been removed or the
          link is incorrect.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link to="/orders" data-ocid="order_detail.error.orders_link">
            <Button type="button" variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Orders
            </Button>
          </Link>
          <Link to="/shop" data-ocid="order_detail.error.shop_link">
            <Button
              type="button"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const statusLabel =
    STATUS_LABELS[order.status.__kind__] ?? order.status.__kind__;
  const statusColor =
    STATUS_COLORS[order.status.__kind__] ??
    "text-muted-foreground bg-muted border-border";

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = order.total - subtotal > 0.5 ? order.total - subtotal : 0;
  const estimatedDelivery = getEstimatedDelivery();

  return (
    <div data-ocid="order_detail.page">
      {/* Confirmation banner */}
      {isConfirmation && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-green-50 border-b border-green-100"
          data-ocid="order_detail.confirmation_banner"
        >
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shrink-0"
              >
                <CheckCircle2 className="w-9 h-9 text-green-600" />
              </motion.div>
              <div>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-green-800 mb-1">
                  Order Confirmed!
                </h1>
                <p className="text-green-700">
                  Thank you for your purchase. Order{" "}
                  <span className="font-semibold">#{order.id}</span> has been
                  received and is being processed.
                </p>
              </div>
            </div>

            {/* Delivery estimate */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-3 bg-white rounded-xl border border-green-200 px-4 py-3 flex-1">
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-green-700 font-medium uppercase tracking-wide">
                    Estimated Delivery
                  </p>
                  <p className="font-display font-semibold text-green-900">
                    {estimatedDelivery}
                  </p>
                  <p className="text-xs text-green-600">7–10 business days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl border border-green-200 px-4 py-3 flex-1">
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-green-700 font-medium uppercase tracking-wide">
                    Secure Payment
                  </p>
                  <p className="font-display font-semibold text-green-900">
                    SSL Encrypted
                  </p>
                  <p className="text-xs text-green-600">256-bit encryption</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Page header */}
      <div className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {!isConfirmation && (
            <Link
              to="/orders"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-4"
              data-ocid="order_detail.back_link"
            >
              <ArrowLeft className="w-4 h-4" /> All Orders
            </Link>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <h2
              className={`font-display font-bold text-foreground ${isConfirmation ? "text-2xl" : "text-3xl"}`}
            >
              Order #{order.id}
            </h2>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColor}`}
              data-ocid="order_detail.status_badge"
            >
              {statusLabel}
            </span>
          </div>
          <p className="text-muted-foreground mt-1 text-sm">
            Placed on{" "}
            {new Date(order.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card"
              data-ocid="order_detail.items_list"
            >
              <div className="px-6 py-4 border-b border-border flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">
                  Items Ordered
                </h3>
                <span className="ml-auto text-sm text-muted-foreground">
                  {order.items.length} item{order.items.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Table header */}
              <div className="px-6 py-2 bg-muted/30 border-b border-border hidden sm:grid sm:grid-cols-[1fr_auto_auto_auto] gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <span>Product</span>
                <span className="text-right w-12">Qty</span>
                <span className="text-right w-20">Unit Price</span>
                <span className="text-right w-20">Total</span>
              </div>

              <div className="px-6 divide-y divide-border">
                {order.items.map((item, index) => (
                  <OrderItemRow
                    key={item.productId}
                    item={item}
                    index={index}
                  />
                ))}
              </div>

              {/* Totals */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                {shipping > 0 && (
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span className="tabular-nums">${shipping.toFixed(2)}</span>
                  </div>
                )}
                {shipping === 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-display font-bold text-foreground text-lg">
                  <span>Total</span>
                  <span className="tabular-nums">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/shop"
                data-ocid="order_detail.continue_shopping_button"
              >
                <Button
                  type="button"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/orders" data-ocid="order_detail.all_orders_button">
                <Button type="button" variant="outline" className="gap-2">
                  <Package className="w-4 h-4" />
                  View All Orders
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Billing & Delivery */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="bg-card border border-border rounded-xl p-5 shadow-card"
              data-ocid="order_detail.billing_info"
            >
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                Billing & Delivery
              </h3>
              <p className="text-sm font-semibold text-foreground">
                {order.billingInfo.fullName}
              </p>
              <p className="text-sm text-muted-foreground">
                {order.billingInfo.email}
              </p>
              <Separator className="my-3" />
              <p className="text-sm text-muted-foreground">
                {order.billingInfo.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {order.billingInfo.city}, {order.billingInfo.postalCode}
              </p>
              <p className="text-sm text-muted-foreground">
                {order.billingInfo.country}
              </p>
            </motion.div>

            {/* Payment info */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.35 }}
              className="bg-card border border-border rounded-xl p-5 shadow-card"
              data-ocid="order_detail.payment_info"
            >
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-primary" />
                Payment
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                SSL-secured transaction
              </div>
              <p className="text-sm text-muted-foreground">
                Debit/Credit card ····
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-xs text-green-700 font-medium">
                  256-bit encrypted
                </span>
              </div>
            </motion.div>

            {/* Delivery estimate in sidebar if not in confirmation banner */}
            {!isConfirmation && (
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
                className="bg-card border border-border rounded-xl p-5 shadow-card"
                data-ocid="order_detail.delivery_info"
              >
                <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Truck className="w-4 h-4 text-primary" />
                  Estimated Delivery
                </h3>
                <p className="font-semibold text-foreground text-sm">
                  {estimatedDelivery}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  7–10 business days
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
