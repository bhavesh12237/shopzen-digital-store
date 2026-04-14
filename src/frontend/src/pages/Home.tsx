import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SAMPLE_PRODUCTS, useProducts } from "@/hooks/useProducts";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Lock,
  Package,
  RotateCcw,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const VALUE_PROPS = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $50. Fast, reliable delivery right to your door with full tracking.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    desc: "SSL encrypted checkout. Your payment details are protected with bank-grade security.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free returns. Not satisfied? We'll make it right, no questions asked.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Verified Buyer",
    rating: 5,
    quote:
      "ShopZen completely transformed how I shop online. The product quality is outstanding and delivery was faster than expected. I'm a customer for life!",
    product: "Wireless Headphones",
    avatar: "SM",
  },
  {
    name: "James Nakamura",
    role: "Verified Buyer",
    rating: 5,
    quote:
      "The leather watch I bought exceeded all my expectations. Beautifully crafted, elegant design, and arrived in perfect packaging. 10/10 would recommend.",
    product: "Minimalist Leather Watch",
    avatar: "JN",
  },
  {
    name: "Priya Sharma",
    role: "Verified Buyer",
    rating: 5,
    quote:
      "Easy returns policy gave me the confidence to try ShopZen. Ended up keeping everything — quality is top-notch. The SSL security is a huge plus.",
    product: "Premium Backpack",
    avatar: "PS",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.slice(0, count).map((k) => (
        <Star key={k} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

export function Home() {
  const { data: products, isLoading } = useProducts();
  const featured = (products ?? SAMPLE_PRODUCTS).slice(0, 6);

  return (
    <div data-ocid="home.page">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center"
        data-ocid="home.hero_section"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.38 0.12 210) 0%, oklch(0.22 0.08 215) 50%, oklch(0.14 0.04 220) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "oklch(0.5 0.14 210)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{ background: "oklch(0.62 0.25 44)" }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge
                className="mb-5 px-3 py-1 text-xs font-semibold tracking-wide uppercase border border-white/20"
                style={{
                  background: "oklch(1 0 0 / 0.12)",
                  color: "oklch(0.95 0 0)",
                  backdropFilter: "blur(8px)",
                }}
              >
                ✦ Premium Shopping Experience
              </Badge>

              <h1
                className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
                style={{ color: "oklch(0.98 0 0)" }}
              >
                Shop
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.78 0.2 55), oklch(0.68 0.22 44))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Zen
                </span>
                <br />
                <span
                  className="text-4xl md:text-5xl xl:text-6xl font-medium"
                  style={{ color: "oklch(0.88 0 0)" }}
                >
                  Curated for
                </span>
                <br />
                <span
                  className="text-4xl md:text-5xl xl:text-6xl"
                  style={{ color: "oklch(0.96 0 0)" }}
                >
                  the Discerning.
                </span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
                style={{ color: "oklch(0.82 0 0)" }}
              >
                Discover hand-picked premium products — from cutting-edge
                electronics to timeless accessories. Every purchase is
                SSL-secured and backed by our 30-day guarantee.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/shop" data-ocid="home.hero.shop_cta">
                  <Button
                    size="lg"
                    className="gap-2 font-semibold text-base px-8 py-3 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.68 0.22 44), oklch(0.58 0.24 38))",
                      color: "oklch(0.98 0 0)",
                      border: "none",
                    }}
                  >
                    Shop Now <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about" data-ocid="home.hero.about_link">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 font-medium text-base px-8 py-3"
                    style={{
                      borderColor: "oklch(0.98 0 0 / 0.25)",
                      color: "oklch(0.96 0 0)",
                      background: "transparent",
                    }}
                  >
                    Our Story
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div
                className="flex flex-wrap gap-6 mt-10 pt-8 border-t"
                style={{ borderColor: "oklch(0.98 0 0 / 0.12)" }}
              >
                {[
                  { label: "Happy Customers", value: "12,000+" },
                  { label: "Products", value: "500+" },
                  { label: "Countries", value: "45+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display text-2xl font-bold"
                      style={{ color: "oklch(0.98 0 0)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm" style={{ color: "oklch(0.7 0 0)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Product image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.5 0.14 210 / 0.6), transparent 70%)",
                }}
              />
              <div
                className="relative rounded-3xl overflow-hidden border"
                style={{
                  borderColor: "oklch(0.98 0 0 / 0.1)",
                  boxShadow:
                    "0 32px 80px oklch(0.1 0 0 / 0.5), 0 0 0 1px oklch(0.98 0 0 / 0.08)",
                }}
              >
                <img
                  src="/assets/generated/shopzen-hero-products.dim_900x700.png"
                  alt="Premium ShopZen products showcase"
                  className="w-full max-w-[520px] object-cover"
                />
                {/* Floating badge */}
                <div
                  className="absolute bottom-6 left-6 rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "oklch(0.98 0 0 / 0.92)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 24px oklch(0.1 0 0 / 0.25)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.5 0.14 210 / 0.12)" }}
                  >
                    <Package
                      className="w-5 h-5"
                      style={{ color: "oklch(0.5 0.14 210)" }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Free Shipping
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Orders over $50
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Value Proposition ─────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 border-y border-border py-16"
        data-ocid="home.value_section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Shop With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We built ShopZen around three promises — and we keep every one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUE_PROPS.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <Card
                  className="h-full border-border shadow-card hover:shadow-elevated transition-smooth group"
                  data-ocid={`home.value.${i + 1}`}
                >
                  <CardContent className="p-8 flex flex-col items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-smooth`}
                    >
                      <Icon className={`w-7 h-7 ${color}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────────────── */}
      <section
        className="bg-background py-20"
        data-ocid="home.featured_section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                Handpicked for You
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Our curators' top picks across every category
              </p>
            </div>
            <Link to="/shop" data-ocid="home.featured.view_all_link">
              <Button
                variant="outline"
                className="gap-2 shrink-0 border-primary/30 text-primary hover:bg-primary/5"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {isLoading ? (
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-5"
              data-ocid="home.featured.loading_state"
            >
              {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
                <Skeleton key={k} className="h-80 rounded-xl" />
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-5"
              data-ocid="home.featured.product_list"
            >
              {featured.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  data-ocid={`home.featured.item.${i + 1}`}
                >
                  <ProductCard product={product} index={i + 1} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 border-t border-border py-20"
        data-ocid="home.testimonials_section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
              Customer Love
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Our Shoppers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real customers, real experiences. Join thousands who trust
              ShopZen.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="home.testimonials.list"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`home.testimonials.item.${i + 1}`}
              >
                <Card className="h-full border-border shadow-card hover:shadow-elevated transition-smooth">
                  <CardContent className="p-8 flex flex-col gap-5">
                    <StarRating count={t.rating} />
                    <p className="text-foreground leading-relaxed text-[0.95rem] flex-1">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-primary-foreground shrink-0"
                        style={{ background: "oklch(0.5 0.14 210)" }}
                      >
                        {t.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.role} · {t.product}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section
        className="bg-background py-20 border-t border-border"
        data-ocid="home.cta_section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.38 0.12 210), oklch(0.22 0.08 215) 60%, oklch(0.14 0.04 220))",
            }}
          >
            {/* Decorative glows */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "oklch(0.62 0.25 44)" }}
            />
            <div
              className="absolute bottom-0 left-10 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: "oklch(0.7 0.15 210)" }}
            />

            <div className="relative z-10">
              <h2
                className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ color: "oklch(0.98 0 0)" }}
              >
                Ready to Elevate
                <br />
                Your Lifestyle?
              </h2>
              <p
                className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ color: "oklch(0.82 0 0)" }}
              >
                Join 12,000+ happy customers. Free shipping on orders over $50.
                SSL-secured checkout. 30-day easy returns.
              </p>
              <Link to="/shop" data-ocid="home.cta.shop_now_button">
                <Button
                  size="lg"
                  className="gap-2 font-semibold text-base px-10 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.22 44), oklch(0.58 0.24 38))",
                    color: "oklch(0.98 0 0)",
                    border: "none",
                  }}
                >
                  Start Shopping <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
