import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, a as Button, S as Skeleton } from "./index-BRYfgQVq.js";
import { m as motion } from "./proxy-TXef94U9.js";
import { P as Package } from "./package-VryNh9VT.js";
import { S as ShoppingBag } from "./shopping-bag-8341U6Xc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode);
const ORDERS_STORAGE_KEY = "shopzen_orders";
function loadOrdersFromStorage() {
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
const STATUS_CONFIG = {
  Pending: {
    label: "Pending",
    variant: "secondary",
    color: "text-amber-600 bg-amber-50 border-amber-200"
  },
  Processing: {
    label: "Processing",
    variant: "outline",
    color: "text-blue-600 bg-blue-50 border-blue-200"
  },
  Shipped: {
    label: "Shipped",
    variant: "default",
    color: "text-teal-700 bg-teal-50 border-teal-200"
  },
  Delivered: {
    label: "Delivered",
    variant: "default",
    color: "text-green-700 bg-green-50 border-green-200"
  },
  Cancelled: {
    label: "Cancelled",
    variant: "destructive",
    color: "text-red-600 bg-red-50 border-red-200"
  }
};
function getStatusConfig(status) {
  return STATUS_CONFIG[status.__kind__] ?? {
    label: status.__kind__,
    variant: "outline",
    color: "text-muted-foreground bg-muted border-border"
  };
}
function formatDate(ts) {
  return new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function OrderCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-10 rounded-lg shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-56" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24" })
  ] }) });
}
function Orders() {
  const [orders, setOrders] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      const stored = loadOrdersFromStorage();
      setOrders(stored);
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "orders.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "My Orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: isLoading ? "Loading your orders…" : `${orders.length} order${orders.length !== 1 ? "s" : ""} found` })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 max-w-4xl", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "orders.loading_state", children: ["sk1", "sk2", "sk3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCardSkeleton, {}, k)) }),
      !isLoading && orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.35 },
          className: "text-center py-24 bg-muted/30 rounded-2xl border border-border",
          "data-ocid": "orders.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-10 h-10 text-primary opacity-60" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "No orders yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-sm mx-auto", children: "You haven't placed any orders. Browse our collection and find something you'll love." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "orders.empty.shop_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  className: "bg-accent hover:bg-accent/90 text-accent-foreground gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
                    "Browse Products"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "data-ocid": "orders.empty.home_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", className: "gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
                "Back to Home"
              ] }) })
            ] })
          ]
        }
      ),
      !isLoading && orders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "orders.list", children: orders.map((order, i) => {
        const cfg = getStatusConfig(order.status);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.07, duration: 0.3 },
            className: "bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-smooth group",
            "data-ocid": `orders.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold text-foreground", children: [
                        "Order #",
                        order.id
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.color}`,
                          children: cfg.label
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                      order.items.length,
                      " item",
                      order.items.length !== 1 ? "s" : "",
                      " ·",
                      " ",
                      formatDate(order.createdAt)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 sm:ml-auto shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground text-lg tabular-nums", children: [
                    "$",
                    order.total.toFixed(2)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/orders/$orderId",
                      params: { orderId: String(order.id) },
                      "data-ocid": `orders.view_button.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "hover:bg-primary/5 hover:border-primary/30 transition-smooth",
                          children: "View Details"
                        }
                      )
                    }
                  )
                ] })
              ] }),
              (order.status.__kind__ === "Processing" || order.status.__kind__ === "Shipped") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: ["Pending", "Processing", "Shipped", "Delivered"].map(
                  (step) => {
                    const steps = [
                      "Pending",
                      "Processing",
                      "Shipped",
                      "Delivered"
                    ];
                    const currentIdx = steps.indexOf(
                      order.status.__kind__
                    );
                    const stepIdx = steps.indexOf(step);
                    const active = stepIdx <= currentIdx;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex items-center flex-1",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `h-1.5 flex-1 rounded-full transition-smooth ${active ? "bg-primary" : "bg-border"}`
                          }
                        )
                      },
                      step
                    );
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1.5", children: [
                  order.status.__kind__ === "Processing" && "Your order is being prepared",
                  order.status.__kind__ === "Shipped" && "On its way to you!"
                ] })
              ] })
            ]
          },
          order.id
        );
      }) })
    ] })
  ] });
}
export {
  Orders
};
