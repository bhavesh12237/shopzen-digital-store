import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Order } from "@/types";
import { Link } from "@tanstack/react-router";
import { LogIn, Package, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ORDERS_STORAGE_KEY = "shopzen_orders";

function loadOrdersFromStorage(): Order[] {
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as unknown;
    return Array.isArray(parsed) ? (parsed as Order[]) : [];
  } catch {
    return [];
  }
}

const STATUS_CONFIG: Record<
  string,
  {
    label: string;
    variant: "default" | "secondary" | "outline" | "destructive";
    color: string;
  }
> = {
  Pending: {
    label: "Pending",
    variant: "secondary",
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  Processing: {
    label: "Processing",
    variant: "outline",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  Shipped: {
    label: "Shipped",
    variant: "default",
    color: "text-teal-700 bg-teal-50 border-teal-200",
  },
  Delivered: {
    label: "Delivered",
    variant: "default",
    color: "text-green-700 bg-green-50 border-green-200",
  },
  Cancelled: {
    label: "Cancelled",
    variant: "destructive",
    color: "text-red-600 bg-red-50 border-red-200",
  },
};

function getStatusConfig(status: Order["status"]) {
  return (
    STATUS_CONFIG[status.__kind__] ?? {
      label: status.__kind__,
      variant: "outline" as const,
      color: "text-muted-foreground bg-muted border-border",
    }
  );
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function OrderCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-start gap-4">
        <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-56" />
        </div>
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  );
}

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async fetch — backend not yet deployed, fall back to localStorage
    const timer = setTimeout(() => {
      const stored = loadOrdersFromStorage();
      setOrders(stored);
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-ocid="orders.page">
      {/* Page header */}
      <div className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="font-display text-3xl font-bold text-foreground">
              My Orders
            </h1>
            <p className="text-muted-foreground mt-1">
              {isLoading
                ? "Loading your orders…"
                : `${orders.length} order${orders.length !== 1 ? "s" : ""} found`}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Loading state */}
        {isLoading && (
          <div className="space-y-4" data-ocid="orders.loading_state">
            {["sk1", "sk2", "sk3"].map((k) => (
              <OrderCardSkeleton key={k} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && orders.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="text-center py-24 bg-muted/30 rounded-2xl border border-border"
            data-ocid="orders.empty_state"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-primary opacity-60" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              No orders yet
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              You haven't placed any orders. Browse our collection and find
              something you'll love.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/shop" data-ocid="orders.empty.shop_link">
                <Button
                  type="button"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Browse Products
                </Button>
              </Link>
              <Link to="/" data-ocid="orders.empty.home_link">
                <Button type="button" variant="outline" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* Orders list */}
        {!isLoading && orders.length > 0 && (
          <div className="space-y-4" data-ocid="orders.list">
            {orders.map((order, i) => {
              const cfg = getStatusConfig(order.status);
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-smooth group"
                  data-ocid={`orders.item.${i + 1}`}
                >
                  <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-smooth">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-display font-semibold text-foreground">
                            Order #{order.id}
                          </span>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.color}`}
                          >
                            {cfg.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {order.items.length} item
                          {order.items.length !== 1 ? "s" : ""} ·{" "}
                          {formatDate(order.createdAt)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:ml-auto shrink-0">
                      <span className="font-display font-bold text-foreground text-lg tabular-nums">
                        ${order.total.toFixed(2)}
                      </span>
                      <Link
                        to="/orders/$orderId"
                        params={{ orderId: String(order.id) }}
                        data-ocid={`orders.view_button.${i + 1}`}
                      >
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="hover:bg-primary/5 hover:border-primary/30 transition-smooth"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Progress indicator for active orders */}
                  {(order.status.__kind__ === "Processing" ||
                    order.status.__kind__ === "Shipped") && (
                    <div className="px-5 pb-4">
                      <div className="flex items-center gap-1">
                        {["Pending", "Processing", "Shipped", "Delivered"].map(
                          (step) => {
                            const steps = [
                              "Pending",
                              "Processing",
                              "Shipped",
                              "Delivered",
                            ];
                            const currentIdx = steps.indexOf(
                              order.status.__kind__,
                            );
                            const stepIdx = steps.indexOf(step);
                            const active = stepIdx <= currentIdx;
                            return (
                              <div
                                key={step}
                                className="flex items-center flex-1"
                              >
                                <div
                                  className={`h-1.5 flex-1 rounded-full transition-smooth ${active ? "bg-primary" : "bg-border"}`}
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        {order.status.__kind__ === "Processing" &&
                          "Your order is being prepared"}
                        {order.status.__kind__ === "Shipped" &&
                          "On its way to you!"}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
