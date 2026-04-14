import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const SHOP_LINKS = [
  { to: "/shop", label: "All Products" },
  { to: "/shop?category=Electronics", label: "Electronics" },
  { to: "/shop?category=Accessories", label: "Accessories" },
  { to: "/cart", label: "Shopping Cart" },
  { to: "/orders", label: "My Orders" },
];

const COMPANY_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/about#team", label: "Our Team" },
  { to: "/about#mission", label: "Our Mission" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-display font-bold text-xl text-foreground"
              data-ocid="footer.logo_link"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              ShopZen
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated premium products delivered with intention. Elevate your
              everyday essentials with ShopZen.
            </p>
            <div
              className="flex items-center gap-3"
              data-ocid="footer.social_links"
            >
              <a
                href="https://twitter.com/shopzen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ShopZen on X (Twitter)"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth text-muted-foreground"
                data-ocid="footer.twitter_link"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/shopzen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ShopZen on Facebook"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth text-muted-foreground"
                data-ocid="footer.facebook_link"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/shopzen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ShopZen on Instagram"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth text-muted-foreground"
                data-ocid="footer.instagram_link"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {SHOP_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to as "/"}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-ocid={`footer.shop.${label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to as "/"}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-ocid={`footer.company.${label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3" data-ocid="footer.contact_info">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>123 Commerce Street, Tech District, SF 94105</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a
                  href="tel:+14155551234"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  +1 (415) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a
                  href="mailto:hello@shopzen.com"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  hello@shopzen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200 underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              SSL Secured
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
