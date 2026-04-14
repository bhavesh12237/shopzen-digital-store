import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  Shield,
  ShoppingBag,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  {
    value: "10,000+",
    label: "Happy Customers",
    icon: Users,
    color: "text-primary",
  },
  {
    value: "500+",
    label: "Curated Products",
    icon: ShoppingBag,
    color: "text-accent",
  },
  {
    value: "5-Star",
    label: "Average Rating",
    icon: Star,
    color: "text-primary",
  },
];

const VALUES = [
  {
    icon: Award,
    title: "Quality",
    desc: "Every product is hand-selected and rigorously vetted. We never compromise on quality — if it doesn't meet our bar, it doesn't make the store.",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "Bank-grade SSL/TLS encryption on every transaction. Your personal data and payments are protected with the highest security standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We continuously improve — smarter recommendations, better browsing, and tools that make shopping genuinely delightful.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "24/7 support, hassle-free returns, and a team that genuinely cares. Your satisfaction isn't a goal — it's our standard.",
  },
];

const STORY_MILESTONES = [
  {
    year: "2018",
    event:
      "Founded in San Francisco with a simple idea: make premium shopping effortless.",
  },
  {
    year: "2020",
    event:
      "Reached 1,000 verified products and launched our SSL-secured checkout.",
  },
  {
    year: "2022",
    event:
      "Passed 5,000 customers and introduced same-day delivery in major cities.",
  },
  {
    year: "2024",
    event: "10,000+ customers and growing — still obsessed with every detail.",
  },
];

export function About() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section
        className="relative bg-primary overflow-hidden py-24"
        data-ocid="about.hero_section"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent blur-2xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 mb-6">
              <Zap className="w-3.5 h-3.5 text-primary-foreground/80" />
              <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-5 leading-tight">
              About ShopZen
            </h1>
            <p className="text-primary-foreground/75 text-xl max-w-2xl mx-auto leading-relaxed">
              We believe great shopping should feel effortless, secure, and
              joyful — every single time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="bg-card border-b border-border py-14"
        data-ocid="about.stats_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {STATS.map(({ value, label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center gap-3"
                data-ocid={`about.stats.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <div className="font-display text-4xl font-bold text-foreground">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-background py-20" data-ocid="about.story_section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                How ShopZen Began
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ShopZen was born in 2018 out of frustration with the cluttered,
                untrustworthy online shopping landscape. Our founders — avid
                shoppers themselves — wanted a curated, premium marketplace
                where every product could be trusted and every checkout felt
                safe.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We started with 50 products and a handful of customers. Today,
                we serve over 10,000 loyal shoppers across the country, offering
                500+ carefully selected products from the world's best brands.
              </p>
              <div className="p-5 bg-muted/40 rounded-xl border border-border">
                <p className="text-sm font-semibold text-foreground mb-1">
                  Our Mission
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To make premium commerce accessible to everyone — delivered
                  with integrity, security, and genuine care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Our Journey
              </p>
              {STORY_MILESTONES.map(({ year, event }, i) => (
                <div key={year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {year}
                      </span>
                    </div>
                    {i < STORY_MILESTONES.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1 mb-1 min-h-4" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-sm text-foreground leading-relaxed">
                      {event}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Vision */}
      <section className="bg-muted/30 py-16" data-ocid="about.vision_section">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We envision a world where digital commerce is synonymous with
              trust, quality, and delight. ShopZen is building the
              infrastructure for that future — a marketplace where every product
              earns its place, every transaction is bulletproof, and every
              customer leaves satisfied.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-background py-20 border-t border-border"
        data-ocid="about.values_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Four principles that guide every decision, every hire, and every
              product we list.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 hover:shadow-elevated hover:border-primary/30 transition-smooth group"
                data-ocid={`about.values.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="about.cta_section">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience ShopZen?
            </h2>
            <p className="text-primary-foreground/75 text-lg mb-8 max-w-xl mx-auto">
              Join 10,000+ customers who shop with confidence on our SSL-secured
              platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/shop" data-ocid="about.cta.shop_button">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 min-w-40"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact" data-ocid="about.cta.contact_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 min-w-40"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
