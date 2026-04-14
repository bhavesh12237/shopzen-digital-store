import { c as createLucideIcon, j as jsxRuntimeExports, B as Badge, L as Link, a as Button, S as Skeleton } from "./index-BRYfgQVq.js";
import { P as ProductCard } from "./ProductCard-VV8G1f1d.js";
import { C as Card, a as CardContent } from "./card-BCHlLd86.js";
import { u as useProducts, S as SAMPLE_PRODUCTS } from "./useProducts-Cw5bBuyd.js";
import { m as motion } from "./proxy-TXef94U9.js";
import { A as ArrowRight } from "./arrow-right-Ds87fhhv.js";
import { P as Package } from "./package-VryNh9VT.js";
import { T as Truck } from "./truck-DSozPBBi.js";
import { L as Lock } from "./lock-dsri3E0O.js";
import { S as Star } from "./star-CuhC4P4z.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const VALUE_PROPS = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $50. Fast, reliable delivery right to your door with full tracking.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Lock,
    title: "Secure Payments",
    desc: "SSL encrypted checkout. Your payment details are protected with bank-grade security.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns. Not satisfied? We'll make it right, no questions asked.",
    color: "text-primary",
    bg: "bg-primary/10"
  }
];
const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Verified Buyer",
    rating: 5,
    quote: "ShopZen completely transformed how I shop online. The product quality is outstanding and delivery was faster than expected. I'm a customer for life!",
    product: "Wireless Headphones",
    avatar: "SM"
  },
  {
    name: "James Nakamura",
    role: "Verified Buyer",
    rating: 5,
    quote: "The leather watch I bought exceeded all my expectations. Beautifully crafted, elegant design, and arrived in perfect packaging. 10/10 would recommend.",
    product: "Minimalist Leather Watch",
    avatar: "JN"
  },
  {
    name: "Priya Sharma",
    role: "Verified Buyer",
    rating: 5,
    quote: "Easy returns policy gave me the confidence to try ShopZen. Ended up keeping everything — quality is top-notch. The SSL security is a huge plus.",
    product: "Premium Backpack",
    avatar: "PS"
  }
];
const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];
function StarRating({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: STAR_KEYS.slice(0, count).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-accent text-accent" }, k)) });
}
function Home() {
  const { data: products, isLoading } = useProducts();
  const featured = (products ?? SAMPLE_PRODUCTS).slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center",
        "data-ocid": "home.hero_section",
        style: {
          background: "linear-gradient(135deg, oklch(0.38 0.12 210) 0%, oklch(0.22 0.08 215) 50%, oklch(0.14 0.04 220) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl",
                style: { background: "oklch(0.5 0.14 210)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl",
                style: { background: "oklch(0.62 0.25 44)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "mb-5 px-3 py-1 text-xs font-semibold tracking-wide uppercase border border-white/20",
                      style: {
                        background: "oklch(1 0 0 / 0.12)",
                        color: "oklch(0.95 0 0)",
                        backdropFilter: "blur(8px)"
                      },
                      children: "✦ Premium Shopping Experience"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h1",
                    {
                      className: "font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6",
                      style: { color: "oklch(0.98 0 0)" },
                      children: [
                        "Shop",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              background: "linear-gradient(90deg, oklch(0.78 0.2 55), oklch(0.68 0.22 44))",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            },
                            children: "Zen"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-4xl md:text-5xl xl:text-6xl font-medium",
                            style: { color: "oklch(0.88 0 0)" },
                            children: "Curated for"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-4xl md:text-5xl xl:text-6xl",
                            style: { color: "oklch(0.96 0 0)" },
                            children: "the Discerning."
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-lg md:text-xl leading-relaxed mb-8 max-w-lg",
                      style: { color: "oklch(0.82 0 0)" },
                      children: "Discover hand-picked premium products — from cutting-edge electronics to timeless accessories. Every purchase is SSL-secured and backed by our 30-day guarantee."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "home.hero.shop_cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        className: "gap-2 font-semibold text-base px-8 py-3 shadow-lg",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.68 0.22 44), oklch(0.58 0.24 38))",
                          color: "oklch(0.98 0 0)",
                          border: "none"
                        },
                        children: [
                          "Shop Now ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "home.hero.about_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "gap-2 font-medium text-base px-8 py-3",
                        style: {
                          borderColor: "oklch(0.98 0 0 / 0.25)",
                          color: "oklch(0.96 0 0)",
                          background: "transparent"
                        },
                        children: "Our Story"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex flex-wrap gap-6 mt-10 pt-8 border-t",
                      style: { borderColor: "oklch(0.98 0 0 / 0.12)" },
                      children: [
                        { label: "Happy Customers", value: "12,000+" },
                        { label: "Products", value: "500+" },
                        { label: "Countries", value: "45+" }
                      ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-2xl font-bold",
                            style: { color: "oklch(0.98 0 0)" },
                            children: stat.value
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "oklch(0.7 0 0)" }, children: stat.label })
                      ] }, stat.label))
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 40, scale: 0.95 },
                animate: { opacity: 1, x: 0, scale: 1 },
                transition: {
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1]
                },
                className: "relative hidden lg:flex items-center justify-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 rounded-3xl blur-2xl opacity-40",
                      style: {
                        background: "radial-gradient(circle, oklch(0.5 0.14 210 / 0.6), transparent 70%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative rounded-3xl overflow-hidden border",
                      style: {
                        borderColor: "oklch(0.98 0 0 / 0.1)",
                        boxShadow: "0 32px 80px oklch(0.1 0 0 / 0.5), 0 0 0 1px oklch(0.98 0 0 / 0.08)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: "/assets/generated/shopzen-hero-products.dim_900x700.png",
                            alt: "Premium ShopZen products showcase",
                            className: "w-full max-w-[520px] object-cover"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "absolute bottom-6 left-6 rounded-2xl px-4 py-3 flex items-center gap-3",
                            style: {
                              background: "oklch(0.98 0 0 / 0.92)",
                              backdropFilter: "blur(12px)",
                              boxShadow: "0 8px 24px oklch(0.1 0 0 / 0.25)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                  style: { background: "oklch(0.5 0.14 210 / 0.12)" },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Package,
                                    {
                                      className: "w-5 h-5",
                                      style: { color: "oklch(0.5 0.14 210)" }
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Free Shipping" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Orders over $50" })
                              ] })
                            ]
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-y border-border py-16",
        "data-ocid": "home.value_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-3", children: "Why Shop With Us?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "We built ShopZen around three promises — and we keep every one." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: VALUE_PROPS.map(({ icon: Icon, title, desc, color, bg }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12, duration: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: "h-full border-border shadow-card hover:shadow-elevated transition-smooth group",
                  "data-ocid": `home.value.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-14 h-14 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-smooth`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-7 h-7 ${color}` })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: desc })
                    ] })
                  ] })
                }
              )
            },
            title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "home.featured_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20", children: "Handpicked for You" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: "Featured Products" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Our curators' top picks across every category" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "home.featured.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "gap-2 shrink-0 border-primary/30 text-primary hover:bg-primary/5",
                    children: [
                      "View All Products ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                ) })
              ]
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 md:grid-cols-3 gap-5",
              "data-ocid": "home.featured.loading_state",
              children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80 rounded-xl" }, k))
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 md:grid-cols-3 gap-5",
              "data-ocid": "home.featured.product_list",
              children: featured.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.08, duration: 0.45 },
                  "data-ocid": `home.featured.item.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 })
                },
                product.id
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-20",
        "data-ocid": "home.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-accent/10 text-accent border-accent/20", children: "Customer Love" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-3", children: "What Our Shoppers Say" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Real customers, real experiences. Join thousands who trust ShopZen." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              "data-ocid": "home.testimonials.list",
              children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.12, duration: 0.5 },
                  "data-ocid": `home.testimonials.item.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border shadow-card hover:shadow-elevated transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { count: t.rating }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed text-[0.95rem] flex-1", children: [
                      '"',
                      t.quote,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-border", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-primary-foreground shrink-0",
                          style: { background: "oklch(0.5 0.14 210)" },
                          children: t.avatar
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: t.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          t.role,
                          " · ",
                          t.product
                        ] })
                      ] })
                    ] })
                  ] }) })
                },
                t.name
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 border-t border-border",
        "data-ocid": "home.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "relative rounded-3xl overflow-hidden p-12 md:p-20 text-center",
            style: {
              background: "linear-gradient(135deg, oklch(0.38 0.12 210), oklch(0.22 0.08 215) 60%, oklch(0.14 0.04 220))"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none",
                  style: { background: "oklch(0.62 0.25 44)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-10 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none",
                  style: { background: "oklch(0.7 0.15 210)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display text-3xl md:text-5xl font-bold mb-4 leading-tight",
                    style: { color: "oklch(0.98 0 0)" },
                    children: [
                      "Ready to Elevate",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Your Lifestyle?"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed",
                    style: { color: "oklch(0.82 0 0)" },
                    children: "Join 12,000+ happy customers. Free shipping on orders over $50. SSL-secured checkout. 30-day easy returns."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", "data-ocid": "home.cta.shop_now_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "gap-2 font-semibold text-base px-10 shadow-lg",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.68 0.22 44), oklch(0.58 0.24 38))",
                      color: "oklch(0.98 0 0)",
                      border: "none"
                    },
                    children: [
                      "Start Shopping ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                    ]
                  }
                ) })
              ] })
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  Home
};
