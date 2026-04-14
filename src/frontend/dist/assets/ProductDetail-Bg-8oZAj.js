import { c as createLucideIcon, u as useParams, b as useCart, r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link, a as Button, d as ShoppingCart, B as Badge, e as Separator } from "./index-BRYfgQVq.js";
import { P as ProductCard } from "./ProductCard-VV8G1f1d.js";
import { a as useProduct, S as SAMPLE_PRODUCTS } from "./useProducts-Cw5bBuyd.js";
import { u as ue } from "./index-CWZsAHg-.js";
import { P as Package } from "./package-VryNh9VT.js";
import { C as ChevronRight } from "./chevron-right-B-gRzlxT.js";
import { m as motion } from "./proxy-TXef94U9.js";
import { M as Minus, P as Plus } from "./plus-1qBrOD94.js";
import { C as CircleCheck } from "./circle-check-B6a68GN7.js";
import { S as Shield } from "./shield-COtMEKDw.js";
import { T as Truck } from "./truck-DSozPBBi.js";
import { S as Star } from "./star-CuhC4P4z.js";
import "./card-BCHlLd86.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode);
function StarRating({ rating, max = 5 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `${rating} out of ${max} stars`,
      children: ["s1", "s2", "s3", "s4", "s5"].slice(0, max).map((k, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block w-4 h-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-muted" }),
          (filled || partial) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute inset-0 overflow-hidden",
              style: { width: filled ? "100%" : `${rating % 1 * 100}%` },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-accent text-accent" })
            }
          )
        ] }, k);
      })
    }
  );
}
function StockBadge({ stock }) {
  if (stock === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-destructive text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
      "Out of Stock"
    ] });
  }
  if (stock <= 5) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-accent text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
      "Only ",
      stock,
      " left in stock"
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm font-medium text-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
    "In Stock (",
    stock,
    " available)"
  ] });
}
function ProductDetail() {
  const { productId } = useParams({ from: "/shop/$productId" });
  const { data: product, isLoading } = useProduct(Number(productId));
  const { addItem } = useCart();
  const [qty, setQty] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const relatedProducts = reactExports.useMemo(() => {
    if (!product) return [];
    return SAMPLE_PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 3);
  }, [product]);
  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, qty);
    setAdded(true);
    ue.success(`${product.name} added to cart!`, {
      description: `${qty} item${qty > 1 ? "s" : ""} · $${(product.price * qty).toFixed(2)}`,
      duration: 4e3
    });
    setTimeout(() => setAdded(false), 2e3);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-12",
        "data-ocid": "product_detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-24 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-28" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-px w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-lg" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-lg" })
            ] })
          ] })
        ]
      }
    );
  }
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-28 text-center",
        "data-ocid": "product_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-9 h-9 text-muted-foreground opacity-40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Product Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-sm mx-auto", children: "The product you're looking for doesn't exist or may have been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "gap-2",
              "data-ocid": "product_detail.back_to_shop_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                "Browse All Products"
              ]
            }
          ) })
        ]
      }
    );
  }
  const maxQty = Math.min(product.stock, 10);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-3 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        "aria-label": "Breadcrumb",
        className: "flex items-center gap-1.5 text-sm",
        "data-ocid": "product_detail.breadcrumb",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200",
              "data-ocid": "product_detail.breadcrumb_home_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Home" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground/50 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              className: "text-muted-foreground hover:text-foreground transition-colors duration-200",
              "data-ocid": "product_detail.breadcrumb_shop_link",
              children: "Shop"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground/50 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-foreground font-medium truncate max-w-[200px]",
              "data-ocid": "product_detail.breadcrumb_product",
              children: product.name
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 lg:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.45 },
          className: "aspect-square rounded-2xl overflow-hidden bg-muted border border-border shadow-card",
          "data-ocid": "product_detail.image",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.45 },
          className: "flex flex-col gap-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "mb-3",
                  "data-ocid": "product_detail.category_badge",
                  children: product.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight",
                  "data-ocid": "product_detail.product_name",
                  children: product.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2.5",
                  "data-ocid": "product_detail.rating",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-muted-foreground", children: [
                      product.rating.toFixed(1),
                      " / 5.0"
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-4xl font-display font-bold text-foreground",
                "data-ocid": "product_detail.price",
                children: [
                  "$",
                  product.price.toFixed(2)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-muted-foreground leading-relaxed",
                "data-ocid": "product_detail.description",
                children: product.description
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "product_detail.stock_indicator", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StockBadge, { stock: product.stock }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Quantity:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center border border-border rounded-lg overflow-hidden bg-card",
                    "data-ocid": "product_detail.qty_selector",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setQty((v) => Math.max(1, v - 1)),
                          className: "px-3 py-2.5 hover:bg-muted transition-colors duration-200 disabled:opacity-40",
                          "aria-label": "Decrease quantity",
                          disabled: qty <= 1,
                          "data-ocid": "product_detail.qty_decrease",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "px-5 py-2.5 text-sm font-mono border-x border-border min-w-[3.5rem] text-center font-medium",
                          "data-ocid": "product_detail.qty_display",
                          children: qty
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setQty((v) => Math.min(maxQty, v + 1)),
                          className: "px-3 py-2.5 hover:bg-muted transition-colors duration-200 disabled:opacity-40",
                          "aria-label": "Increase quantity",
                          disabled: qty >= maxQty || product.stock === 0,
                          "data-ocid": "product_detail.qty_increase",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  "Max: ",
                  maxQty
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "lg",
                  className: `w-full gap-2.5 font-semibold text-base transition-smooth ${added ? "bg-primary/90 text-primary-foreground" : "bg-accent hover:bg-accent/90 text-accent-foreground"}`,
                  onClick: handleAddToCart,
                  disabled: product.stock === 0,
                  "data-ocid": "product_detail.add_to_cart_button",
                  children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
                    "Added to Cart!"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
                    "Add to Cart — $",
                    (product.price * qty).toFixed(2)
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-muted/40 border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SSL Secured Checkout" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-muted/40 border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free shipping over $50" })
              ] })
            ] })
          ]
        }
      )
    ] }) }) }),
    relatedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-12",
        "data-ocid": "product_detail.related_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Related Products" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
                    "More from ",
                    product.category
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/shop",
                    search: {},
                    className: "text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium underline underline-offset-4",
                    "data-ocid": "product_detail.view_all_link",
                    children: "View All"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                  "data-ocid": "product_detail.related_list",
                  children: relatedProducts.map((related, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: i * 0.1, duration: 0.35 },
                      "data-ocid": `product_detail.related.item.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: related, index: i + 1 })
                    },
                    related.id
                  ))
                }
              )
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  ProductDetail
};
