import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Minus,
  Package,
  Plus,
  Shield,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const TAX_RATE = 0.1;
const SHIPPING_COST = 5.99;
const FREE_SHIPPING_THRESHOLD = 50;

export function Cart() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div data-ocid="cart.page">
        <div className="bg-card border-b border-border py-10">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground mb-2">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Cart</span>
            </nav>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Shopping Cart
            </h1>
          </div>
        </div>
        <div
          className="container mx-auto px-4 py-28 text-center max-w-md mx-auto"
          data-ocid="cart.empty_state"
        >
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-muted-foreground opacity-50" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Looks like you haven't added anything yet. Browse our collection to
            find something you'll love.
          </p>
          <Link to="/shop" data-ocid="cart.empty.shop_link">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold"
            >
              Start Shopping <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-ocid="cart.page">
      {/* Page Header */}
      <div className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Cart</span>
          </nav>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Shopping Cart
            <span className="ml-3 text-lg font-normal text-muted-foreground">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          </h1>
        </div>
      </div>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div
              className="lg:col-span-2 space-y-3"
              data-ocid="cart.items_list"
            >
              {/* Column Headers */}
              <div className="hidden sm:grid grid-cols-12 text-xs font-semibold text-muted-foreground uppercase tracking-wide px-4 pb-2 border-b border-border">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Qty</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {items.map((item, i) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4 grid sm:grid-cols-12 gap-4 items-center hover:shadow-card transition-shadow duration-200"
                  data-ocid={`cart.item.${i + 1}`}
                >
                  {/* Product Info */}
                  <div className="sm:col-span-6 flex gap-3 items-center">
                    <Link
                      to="/shop/$productId"
                      params={{ productId: String(item.product.id) }}
                      className="shrink-0"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-muted ring-1 ring-border hover:ring-primary transition-all duration-200">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="min-w-0">
                      <Link
                        to="/shop/$productId"
                        params={{ productId: String(item.product.id) }}
                        className="font-display font-semibold text-foreground hover:text-primary transition-colors duration-200 line-clamp-2 text-sm sm:text-base"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-0.5 capitalize">
                        {item.product.category}
                      </p>
                      {/* Mobile price */}
                      <p className="text-sm font-mono font-semibold text-foreground mt-1 sm:hidden">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Unit Price (desktop) */}
                  <div className="hidden sm:flex sm:col-span-2 justify-center">
                    <span className="font-mono text-sm text-foreground">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="sm:col-span-2 flex items-center justify-center sm:justify-center gap-2">
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-background shadow-sm">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2.5 py-2 hover:bg-muted transition-colors duration-150 text-muted-foreground hover:text-foreground"
                        aria-label={`Decrease quantity for ${item.product.name}`}
                        data-ocid={`cart.qty_decrease.${i + 1}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span
                        className="w-8 text-center text-sm font-mono font-medium border-x border-border py-2"
                        data-ocid={`cart.qty_display.${i + 1}`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2.5 py-2 hover:bg-muted transition-colors duration-150 text-muted-foreground hover:text-foreground"
                        aria-label={`Increase quantity for ${item.product.name}`}
                        data-ocid={`cart.qty_increase.${i + 1}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Line Total + Remove */}
                  <div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-2">
                    <span className="font-display font-bold text-foreground text-sm sm:text-base">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive h-8 w-8 shrink-0"
                      onClick={() => removeItem(item.product.id)}
                      aria-label={`Remove ${item.product.name} from cart`}
                      data-ocid={`cart.delete_button.${i + 1}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}

              {/* Free shipping progress */}
              {totalPrice < FREE_SHIPPING_THRESHOLD && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-secondary/40 border border-border rounded-xl p-4 flex items-center gap-3"
                >
                  <Truck className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      Add{" "}
                      <span className="font-semibold text-primary">
                        ${(FREE_SHIPPING_THRESHOLD - totalPrice).toFixed(2)}
                      </span>{" "}
                      more for{" "}
                      <span className="font-semibold">free shipping</span>
                    </p>
                    <div className="h-1.5 bg-border rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            (totalPrice / FREE_SHIPPING_THRESHOLD) * 100,
                            100,
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              {totalPrice >= FREE_SHIPPING_THRESHOLD && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
                >
                  <Truck className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-sm text-green-700 font-medium">
                    🎉 You qualify for free shipping!
                  </p>
                </motion.div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6 sticky top-24 shadow-card"
                data-ocid="cart.order_summary"
              >
                <h2 className="font-display font-bold text-xl text-foreground mb-5 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>
                      Subtotal ({totalItems}{" "}
                      {totalItems === 1 ? "item" : "items"})
                    </span>
                    <span className="font-mono">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      Estimated Tax (10%)
                    </span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" />
                      Shipping
                    </span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      <span className="font-mono">${shipping.toFixed(2)}</span>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between font-display font-bold text-foreground text-lg pt-1">
                    <span>Grand Total</span>
                    <span className="font-mono">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block mt-6"
                  data-ocid="cart.checkout_button"
                >
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold text-base"
                  >
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground py-2 bg-muted/40 rounded-lg">
                  <Shield className="w-3.5 h-3.5 text-green-600" />
                  <span>SSL Secured &bull; 256-bit Encryption</span>
                </div>

                <Link
                  to="/shop"
                  className="block mt-3 text-center"
                  data-ocid="cart.continue_shopping_link"
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground w-full text-sm"
                  >
                    ← Continue Shopping
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
