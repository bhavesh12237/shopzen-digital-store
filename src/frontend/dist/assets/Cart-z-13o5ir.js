import { c as createLucideIcon, b as useCart, j as jsxRuntimeExports, L as Link, a as Button, e as Separator } from "./index-BRYfgQVq.js";
import { S as ShoppingBag } from "./shopping-bag-8341U6Xc.js";
import { A as ArrowRight } from "./arrow-right-Ds87fhhv.js";
import { m as motion } from "./proxy-TXef94U9.js";
import { M as Minus, P as Plus } from "./plus-1qBrOD94.js";
import { T as Truck } from "./truck-DSozPBBi.js";
import { P as Package } from "./package-VryNh9VT.js";
import { S as Shield } from "./shield-COtMEKDw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const TAX_RATE = 0.1;
const SHIPPING_COST = 5.99;
const FREE_SHIPPING_THRESHOLD = 50;
function Cart() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + shipping + tax;
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "cart.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-sm text-muted-foreground mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Cart" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "Shopping Cart" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "container mx-auto px-4 py-28 text-center max-w-md mx-auto",
          "data-ocid": "cart.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-10 h-10 text-muted-foreground opacity-50" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Your cart is empty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed", children: "Looks like you haven't added anything yet. Browse our collection to find something you'll love." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "cart.empty.shop_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                className: "bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold",
                children: [
                  "Start Shopping ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) })
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "cart.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-sm text-muted-foreground mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Cart" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-bold text-foreground", children: [
        "Shopping Cart",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 text-lg font-normal text-muted-foreground", children: [
          "(",
          totalItems,
          " ",
          totalItems === 1 ? "item" : "items",
          ")"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:col-span-2 space-y-3",
          "data-ocid": "cart.items_list",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:grid grid-cols-12 text-xs font-semibold text-muted-foreground uppercase tracking-wide px-4 pb-2 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-6", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 text-center", children: "Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 text-center", children: "Qty" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 text-right", children: "Total" })
            ] }),
            items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { delay: i * 0.05 },
                className: "bg-card border border-border rounded-xl p-4 grid sm:grid-cols-12 gap-4 items-center hover:shadow-card transition-shadow duration-200",
                "data-ocid": `cart.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-6 flex gap-3 items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/shop/$productId",
                        params: { productId: String(item.product.id) },
                        className: "shrink-0",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-muted ring-1 ring-border hover:ring-primary transition-all duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: item.product.imageUrl,
                            alt: item.product.name,
                            className: "w-full h-full object-cover"
                          }
                        ) })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/shop/$productId",
                          params: { productId: String(item.product.id) },
                          className: "font-display font-semibold text-foreground hover:text-primary transition-colors duration-200 line-clamp-2 text-sm sm:text-base",
                          children: item.product.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 capitalize", children: item.product.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono font-semibold text-foreground mt-1 sm:hidden", children: [
                        "$",
                        item.product.price.toFixed(2)
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex sm:col-span-2 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm text-foreground", children: [
                    "$",
                    item.product.price.toFixed(2)
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 flex items-center justify-center sm:justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded-lg overflow-hidden bg-background shadow-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => updateQuantity(item.product.id, item.quantity - 1),
                        className: "px-2.5 py-2 hover:bg-muted transition-colors duration-150 text-muted-foreground hover:text-foreground",
                        "aria-label": `Decrease quantity for ${item.product.name}`,
                        "data-ocid": `cart.qty_decrease.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-8 text-center text-sm font-mono font-medium border-x border-border py-2",
                        "data-ocid": `cart.qty_display.${i + 1}`,
                        children: item.quantity
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => updateQuantity(item.product.id, item.quantity + 1),
                        className: "px-2.5 py-2 hover:bg-muted transition-colors duration-150 text-muted-foreground hover:text-foreground",
                        "aria-label": `Increase quantity for ${item.product.name}`,
                        "data-ocid": `cart.qty_increase.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex items-center justify-between sm:justify-end gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground text-sm sm:text-base", children: [
                      "$",
                      (item.product.price * item.quantity).toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        className: "text-muted-foreground hover:text-destructive h-8 w-8 shrink-0",
                        onClick: () => removeItem(item.product.id),
                        "aria-label": `Remove ${item.product.name} from cart`,
                        "data-ocid": `cart.delete_button.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ]
              },
              item.product.id
            )),
            totalPrice < FREE_SHIPPING_THRESHOLD && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                className: "bg-secondary/40 border border-border rounded-xl p-4 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
                      "Add",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-primary", children: [
                        "$",
                        (FREE_SHIPPING_THRESHOLD - totalPrice).toFixed(2)
                      ] }),
                      " ",
                      "more for",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "free shipping" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-border rounded-full mt-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full bg-primary rounded-full transition-all duration-500",
                        style: {
                          width: `${Math.min(
                            totalPrice / FREE_SHIPPING_THRESHOLD * 100,
                            100
                          )}%`
                        }
                      }
                    ) })
                  ] })
                ]
              }
            ),
            totalPrice >= FREE_SHIPPING_THRESHOLD && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                className: "bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-green-600 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700 font-medium", children: "🎉 You qualify for free shipping!" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 12 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.1 },
          className: "bg-card border border-border rounded-xl p-6 sticky top-24 shadow-card",
          "data-ocid": "cart.order_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground mb-5 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-primary" }),
              "Order Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Subtotal (",
                  totalItems,
                  " ",
                  totalItems === 1 ? "item" : "items",
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  totalPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3.5 h-3.5" }),
                  "Estimated Tax (10%)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  tax.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5" }),
                  "Shipping"
                ] }),
                shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-medium", children: "Free" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  shipping.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold text-foreground text-lg pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "$",
                  grandTotal.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/checkout",
                className: "block mt-6",
                "data-ocid": "cart.checkout_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "lg",
                    className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold text-base",
                    children: [
                      "Proceed to Checkout ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground py-2 bg-muted/40 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 text-green-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SSL Secured • 256-bit Encryption" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/shop",
                className: "block mt-3 text-center",
                "data-ocid": "cart.continue_shopping_link",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "text-muted-foreground hover:text-foreground w-full text-sm",
                    children: "← Continue Shopping"
                  }
                )
              }
            )
          ]
        }
      ) })
    ] }) }) })
  ] });
}
export {
  Cart
};
