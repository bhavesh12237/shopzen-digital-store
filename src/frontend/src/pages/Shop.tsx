import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProducts";
import { LayoutGrid, Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

const CATEGORIES = [
  "All",
  "Electronics",
  "Clothing",
  "Books",
  "Home",
  "Accessories",
  "Bags",
];

export function Shop() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: allProducts, isLoading } = useProducts(undefined, undefined);

  const products = useMemo(() => {
    if (!allProducts) return [];
    let filtered = allProducts;
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return filtered;
  }, [allProducts, activeCategory, search]);

  const hasFilters = search.trim() !== "" || activeCategory !== "All";

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  // Which categories actually have products
  const availableCategories = useMemo(() => {
    if (!allProducts) return CATEGORIES;
    const cats = new Set(allProducts.map((p) => p.category));
    return CATEGORIES.filter((c) => c === "All" || cats.has(c));
  }, [allProducts]);

  return (
    <div data-ocid="shop.page">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-10 shadow-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Collection
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              {isLoading
                ? "Loading products..."
                : products.length > 0
                  ? `${products.length} product${products.length !== 1 ? "s" : ""} available`
                  : "No products match your search"}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Search products by name, description..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-9"
                  data-ocid="shop.search_input"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category pills */}
              <div
                className="flex items-center gap-1.5 flex-wrap"
                data-ocid="shop.category_filters"
              >
                {availableCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    data-ocid={`shop.filter.${cat.toLowerCase()}_tab`}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-card"
                        : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Active filter display */}
            {hasFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 flex-wrap"
                data-ocid="shop.active_filters"
              >
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filters:</span>
                {activeCategory !== "All" && (
                  <Badge variant="secondary" className="gap-1 pr-1.5">
                    {activeCategory}
                    <button
                      type="button"
                      onClick={() => setActiveCategory("All")}
                      className="ml-0.5 hover:text-foreground rounded-full"
                      aria-label={`Remove ${activeCategory} filter`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {search.trim() && (
                  <Badge variant="secondary" className="gap-1 pr-1.5">
                    "{search}"
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="ml-0.5 hover:text-foreground rounded-full"
                      aria-label="Remove search filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-2"
                  data-ocid="shop.clear_filters_button"
                >
                  Clear all
                </button>
              </motion.div>
            )}
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-ocid="shop.loading_state"
            >
              {[
                "l1",
                "l2",
                "l3",
                "l4",
                "l5",
                "l6",
                "l7",
                "l8",
                "l9",
                "l10",
                "l11",
                "l12",
              ].map((k) => (
                <div key={k} className="space-y-3">
                  <Skeleton className="aspect-square rounded-xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-9 w-full rounded-lg" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-ocid="shop.product_list"
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.min(i * 0.05, 0.4),
                    duration: 0.35,
                  }}
                  data-ocid={`shop.product.item.${i + 1}`}
                >
                  <ProductCard product={product} index={i + 1} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-28 bg-muted/30 rounded-2xl border border-border"
              data-ocid="shop.empty_state"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
                <Search className="w-7 h-7 text-muted-foreground opacity-50" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                Try adjusting your search terms or browsing a different
                category.
              </p>
              <Button
                type="button"
                onClick={clearFilters}
                variant="outline"
                className="gap-2"
                data-ocid="shop.reset_filters_button"
              >
                <X className="w-4 h-4" />
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
