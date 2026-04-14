import { c as createLucideIcon, u as useParams, r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link, a as Button, e as Separator, M as MapPin } from "./index-BRYfgQVq.js";
import { S as SAMPLE_PRODUCTS } from "./useProducts-Cw5bBuyd.js";
import { P as Package } from "./package-VryNh9VT.js";
import { S as ShoppingBag } from "./shopping-bag-8341U6Xc.js";
import { m as motion } from "./proxy-TXef94U9.js";
import { C as CircleCheck } from "./circle-check-B6a68GN7.js";
import { T as Truck } from "./truck-DSozPBBi.js";
import { S as ShieldCheck, C as CreditCard } from "./shield-check-oU7_tOKf.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
const ORDERS_STORAGE_KEY = "shopzen_orders";
const LAST_ORDER_KEY = "shopzen_last_order";
function loadOrderFromStorage(orderId) {
  try {
    const lastStr = localStorage.getItem(LAST_ORDER_KEY);
    if (lastStr) {
      const last = JSON.parse(lastStr);
      if (last.id === orderId) return last;
    }
    const allStr = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!allStr) return null;
    const all = JSON.parse(allStr);
    return all.find((o) => o.id === orderId) ?? null;
  } catch {
    return null;
  }
}
function getEstimatedDelivery() {
  const start = /* @__PURE__ */ new Date();
  start.setDate(start.getDate() + 7);
  const end = /* @__PURE__ */ new Date();
  end.setDate(end.getDate() + 10);
  const fmt = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return `${fmt(start)} – ${fmt(end)}`;
}
const STATUS_LABELS = {
  Pending: "Pending",
  Processing: "Processing",
  Shipped: "Shipped",
  Delivered: "Delivered",
  Cancelled: "Cancelled"
};
const STATUS_COLORS = {
  Pending: "text-amber-600 bg-amber-50 border-amber-200",
  Processing: "text-blue-600 bg-blue-50 border-blue-200",
  Shipped: "text-teal-700 bg-teal-50 border-teal-200",
  Delivered: "text-green-700 bg-green-50 border-green-200",
  Cancelled: "text-red-600 bg-red-50 border-red-200"
};
function OrderItemRow({ item, index }) {
  const product = SAMPLE_PRODUCTS.find((p) => p.id === item.productId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -8 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05 },
      className: "flex items-center gap-4 py-4",
      "data-ocid": `order_detail.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0 border border-border", children: product ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.imageUrl,
            alt: product.name,
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-6 h-6 text-muted-foreground" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm line-clamp-1", children: (product == null ? void 0 : product.name) ?? `Product #${item.productId}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            (product == null ? void 0 : product.category) ?? "Item",
            " · Qty: ",
            item.quantity
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold text-foreground tabular-nums", children: [
            "$",
            (item.price * item.quantity).toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "$",
            item.price.toFixed(2),
            " each"
          ] })
        ] })
      ]
    }
  );
}
function OrderDetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-xl" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 rounded-xl" })
    ] })
  ] }) });
}
function OrderDetail() {
  const { orderId } = useParams({ from: "/orders/$orderId" });
  const [isConfirmation, setIsConfirmation] = reactExports.useState(false);
  const [order, setOrder] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const id = Number(orderId);
    try {
      const lastStr = localStorage.getItem(LAST_ORDER_KEY);
      if (lastStr) {
        const last = JSON.parse(lastStr);
        if (last.id === id) setIsConfirmation(true);
      }
    } catch {
    }
    const timer = setTimeout(() => {
      const found = loadOrderFromStorage(id);
      setOrder(found);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [orderId]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "order_detail.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-64 mt-2" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrderDetailSkeleton, {})
    ] });
  }
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-24 text-center",
        "data-ocid": "order_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-10 h-10 text-muted-foreground opacity-40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Order Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8", children: [
            "We couldn't find order #",
            orderId,
            ". It may have been removed or the link is incorrect."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", "data-ocid": "order_detail.error.orders_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
              "All Orders"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "order_detail.error.shop_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
                  "Continue Shopping"
                ]
              }
            ) })
          ] })
        ]
      }
    );
  }
  const statusLabel = STATUS_LABELS[order.status.__kind__] ?? order.status.__kind__;
  const statusColor = STATUS_COLORS[order.status.__kind__] ?? "text-muted-foreground bg-muted border-border";
  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = order.total - subtotal > 0.5 ? order.total - subtotal : 0;
  const estimatedDelivery = getEstimatedDelivery();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "order_detail.page", children: [
    isConfirmation && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
        className: "bg-green-50 border-b border-green-100",
        "data-ocid": "order_detail.confirmation_banner",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 14
                },
                className: "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-9 h-9 text-green-600" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-green-800 mb-1", children: "Order Confirmed!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-700", children: [
                "Thank you for your purchase. Order",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                  "#",
                  order.id
                ] }),
                " has been received and is being processed."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "mt-6 flex flex-col sm:flex-row gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-white rounded-xl border border-green-200 px-4 py-3 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-green-600" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-700 font-medium uppercase tracking-wide", children: "Estimated Delivery" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-green-900", children: estimatedDelivery }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "7–10 business days" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-white rounded-xl border border-green-200 px-4 py-3 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-green-600" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-700 font-medium uppercase tracking-wide", children: "Secure Payment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-green-900", children: "SSL Encrypted" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "256-bit encryption" })
                  ] })
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      !isConfirmation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/orders",
          className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-4",
          "data-ocid": "order_detail.back_link",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " All Orders"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: `font-display font-bold text-foreground ${isConfirmation ? "text-2xl" : "text-3xl"}`,
            children: [
              "Order #",
              order.id
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColor}`,
            "data-ocid": "order_detail.status_badge",
            children: statusLabel
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1 text-sm", children: [
        "Placed on",
        " ",
        new Date(order.createdAt).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35 },
            className: "bg-card border border-border rounded-xl overflow-hidden shadow-card",
            "data-ocid": "order_detail.items_list",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-border flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Items Ordered" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-sm text-muted-foreground", children: [
                  order.items.length,
                  " item",
                  order.items.length !== 1 ? "s" : ""
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-2 bg-muted/30 border-b border-border hidden sm:grid sm:grid-cols-[1fr_auto_auto_auto] gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wide", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Product" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right w-12", children: "Qty" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right w-20", children: "Unit Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right w-20", children: "Total" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 divide-y divide-border", children: order.items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                OrderItemRow,
                {
                  item,
                  index
                },
                item.productId
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-muted/30 border-t border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
                    "$",
                    subtotal.toFixed(2)
                  ] })
                ] }),
                shipping > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
                    "$",
                    shipping.toFixed(2)
                  ] })
                ] }),
                shipping === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-medium", children: "Free" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold text-foreground text-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
                    "$",
                    order.total.toFixed(2)
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.3, duration: 0.3 },
            className: "flex flex-wrap gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/shop",
                  "data-ocid": "order_detail.continue_shopping_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      className: "bg-accent hover:bg-accent/90 text-accent-foreground gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
                        "Continue Shopping"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", "data-ocid": "order_detail.all_orders_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", className: "gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
                "View All Orders"
              ] }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 12 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.15, duration: 0.35 },
            className: "bg-card border border-border rounded-xl p-5 shadow-card",
            "data-ocid": "order_detail.billing_info",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
                "Billing & Delivery"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: order.billingInfo.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: order.billingInfo.email }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: order.billingInfo.address }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                order.billingInfo.city,
                ", ",
                order.billingInfo.postalCode
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: order.billingInfo.country })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 12 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.22, duration: 0.35 },
            className: "bg-card border border-border rounded-xl p-5 shadow-card",
            "data-ocid": "order_detail.payment_info",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4 text-primary" }),
                "Payment"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
                "SSL-secured transaction"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Debit/Credit card ····" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-700 font-medium", children: "256-bit encrypted" })
              ] })
            ]
          }
        ),
        !isConfirmation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 12 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.28, duration: 0.35 },
            className: "bg-card border border-border rounded-xl p-5 shadow-card",
            "data-ocid": "order_detail.delivery_info",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-primary" }),
                "Estimated Delivery"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: estimatedDelivery }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "7–10 business days" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  OrderDetail
};
