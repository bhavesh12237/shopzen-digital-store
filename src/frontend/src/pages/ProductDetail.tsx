import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/context/CartContext";
import { SAMPLE_PRODUCTS, useProduct } from "@/hooks/useProducts";
import { Link, useParams } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  Home,
  Minus,
  Package,
  Plus,
  Shield,
  ShoppingCart,
  Star,
  Truck,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of ${max} stars`}
    >
      {(["s1", "s2", "s3", "s4", "s5"] as const).slice(0, max).map((k, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <span key={k} className="relative inline-block w-4 h-4">
            <Star className="w-4 h-4 text-muted" />
            {(filled || partial) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
              >
                <Star className="w-4 h-4 fill-accent text-accent" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function StockBadge({ stock }: { stock: number }) {
  if (stock === 0) {
    return (
      <div className="flex items-center gap-1.5 text-destructive text-sm font-medium">
        <XCircle className="w-4 h-4" />
        Out of Stock
      </div>
    );
  }
  if (stock <= 5) {
    return (
      <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
        <Package className="w-4 h-4" />
        Only {stock} left in stock
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
      <CheckCircle2 className="w-4 h-4" />
      In Stock ({stock} available)
    </div>
  );
}

export function ProductDetail() {
  const { productId } = useParams({ from: "/shop/$productId" });
  const { data: product, isLoading } = useProduct(Number(productId));
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return SAMPLE_PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id,
    ).slice(0, 3);
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, qty);
    setAdded(true);
    toast.success(`${product.name} added to cart!`, {
      description: `${qty} item${qty > 1 ? "s" : ""} · $${(product.price * qty).toFixed(2)}`,
      duration: 4000,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  // Loading state
  if (isLoading) {
    return (
      <div
        className="container mx-auto px-4 py-12"
        data-ocid="product_detail.loading_state"
      >
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-8">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Skeleton className="aspect-square rounded-2xl" />
          <div className="space-y-5">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-8 w-28" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-px w-full" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  // Not found
  if (!product) {
    return (
      <div
        className="container mx-auto px-4 py-28 text-center"
        data-ocid="product_detail.error_state"
      >
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
          <Package className="w-9 h-9 text-muted-foreground opacity-40" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Product Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          The product you're looking for doesn't exist or may have been removed.
        </p>
        <Link to="/shop">
          <Button
            variant="outline"
            className="gap-2"
            data-ocid="product_detail.back_to_shop_button"
          >
            <ShoppingCart className="w-4 h-4" />
            Browse All Products
          </Button>
        </Link>
      </div>
    );
  }

  const maxQty = Math.min(product.stock, 10);

  return (
    <div data-ocid="product_detail.page">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border py-3 shadow-card">
        <div className="container mx-auto px-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm"
            data-ocid="product_detail.breadcrumb"
          >
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="product_detail.breadcrumb_home_link"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
            <Link
              to="/shop"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="product_detail.breadcrumb_shop_link"
            >
              Shop
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
            <span
              className="text-foreground font-medium truncate max-w-[200px]"
              data-ocid="product_detail.breadcrumb_product"
            >
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-10 lg:py-14">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border shadow-card"
              data-ocid="product_detail.image"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col gap-5"
            >
              <div>
                <Badge
                  variant="secondary"
                  className="mb-3"
                  data-ocid="product_detail.category_badge"
                >
                  {product.category}
                </Badge>
                <h1
                  className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight"
                  data-ocid="product_detail.product_name"
                >
                  {product.name}
                </h1>

                {/* Rating */}
                <div
                  className="flex items-center gap-2.5"
                  data-ocid="product_detail.rating"
                >
                  <StarRating rating={product.rating} />
                  <span className="text-sm font-mono text-muted-foreground">
                    {product.rating.toFixed(1)} / 5.0
                  </span>
                </div>
              </div>

              {/* Price */}
              <div
                className="text-4xl font-display font-bold text-foreground"
                data-ocid="product_detail.price"
              >
                ${product.price.toFixed(2)}
              </div>

              {/* Description */}
              <p
                className="text-muted-foreground leading-relaxed"
                data-ocid="product_detail.description"
              >
                {product.description}
              </p>

              {/* Stock */}
              <div data-ocid="product_detail.stock_indicator">
                <StockBadge stock={product.stock} />
              </div>

              <Separator />

              {/* Quantity + Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground">
                    Quantity:
                  </span>
                  <div
                    className="flex items-center border border-border rounded-lg overflow-hidden bg-card"
                    data-ocid="product_detail.qty_selector"
                  >
                    <button
                      type="button"
                      onClick={() => setQty((v) => Math.max(1, v - 1))}
                      className="px-3 py-2.5 hover:bg-muted transition-colors duration-200 disabled:opacity-40"
                      aria-label="Decrease quantity"
                      disabled={qty <= 1}
                      data-ocid="product_detail.qty_decrease"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span
                      className="px-5 py-2.5 text-sm font-mono border-x border-border min-w-[3.5rem] text-center font-medium"
                      data-ocid="product_detail.qty_display"
                    >
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((v) => Math.min(maxQty, v + 1))}
                      className="px-3 py-2.5 hover:bg-muted transition-colors duration-200 disabled:opacity-40"
                      aria-label="Increase quantity"
                      disabled={qty >= maxQty || product.stock === 0}
                      data-ocid="product_detail.qty_increase"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Max: {maxQty}
                  </span>
                </div>

                <Button
                  type="button"
                  size="lg"
                  className={`w-full gap-2.5 font-semibold text-base transition-smooth ${
                    added
                      ? "bg-primary/90 text-primary-foreground"
                      : "bg-accent hover:bg-accent/90 text-accent-foreground"
                  }`}
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  data-ocid="product_detail.add_to_cart_button"
                >
                  {added ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart — ${(product.price * qty).toFixed(2)}
                    </>
                  )}
                </Button>
              </div>

              <Separator />

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-muted/40 border border-border">
                  <Shield className="w-4 h-4 text-primary shrink-0" />
                  <span>SSL Secured Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-muted/40 border border-border">
                  <Truck className="w-4 h-4 text-primary shrink-0" />
                  <span>Free shipping over $50</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section
          className="bg-muted/30 border-t border-border py-12"
          data-ocid="product_detail.related_section"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Related Products
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    More from {product.category}
                  </p>
                </div>
                <Link
                  to="/shop"
                  search={{}}
                  className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium underline underline-offset-4"
                  data-ocid="product_detail.view_all_link"
                >
                  View All
                </Link>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                data-ocid="product_detail.related_list"
              >
                {relatedProducts.map((related, i) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.35 }}
                    data-ocid={`product_detail.related.item.${i + 1}`}
                  >
                    <ProductCard product={related} index={i + 1} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
