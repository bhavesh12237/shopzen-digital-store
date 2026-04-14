import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 1 }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card
      data-ocid={`product.card.${index}`}
      className="group overflow-hidden border border-border shadow-card hover:shadow-elevated transition-smooth bg-card flex flex-col"
    >
      <Link
        to="/shop/$productId"
        params={{ productId: String(product.id) }}
        className="block overflow-hidden aspect-square bg-muted"
        data-ocid={`product.link.${index}`}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant="secondary"
            className="text-xs font-medium shrink-0"
            data-ocid={`product.category.${index}`}
          >
            {product.category}
          </Badge>
          <div
            className="flex items-center gap-1"
            data-ocid={`product.rating.${index}`}
          >
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="text-xs text-muted-foreground font-mono">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <Link
          to="/shop/$productId"
          params={{ productId: String(product.id) }}
          className="min-w-0"
        >
          <h3 className="font-display font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span
            className="text-lg font-display font-bold text-foreground"
            data-ocid={`product.price.${index}`}
          >
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            variant="default"
            className="gap-1.5"
            onClick={() => addItem(product)}
            data-ocid={`product.add_button.${index}`}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
