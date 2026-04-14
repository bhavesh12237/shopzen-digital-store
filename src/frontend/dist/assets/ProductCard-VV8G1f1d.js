import { b as useCart, j as jsxRuntimeExports, L as Link, B as Badge, a as Button, d as ShoppingCart } from "./index-BRYfgQVq.js";
import { C as Card } from "./card-BCHlLd86.js";
import { S as Star } from "./star-CuhC4P4z.js";
function ProductCard({ product, index = 1 }) {
  const { addItem } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      "data-ocid": `product.card.${index}`,
      className: "group overflow-hidden border border-border shadow-card hover:shadow-elevated transition-smooth bg-card flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/shop/$productId",
            params: { productId: String(product.id) },
            className: "block overflow-hidden aspect-square bg-muted",
            "data-ocid": `product.link.${index}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.imageUrl,
                alt: product.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                loading: "lazy"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-xs font-medium shrink-0",
                "data-ocid": `product.category.${index}`,
                children: product.category
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1",
                "data-ocid": `product.rating.${index}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-accent text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: product.rating.toFixed(1) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop/$productId",
              params: { productId: String(product.id) },
              className: "min-w-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200", children: product.name })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-lg font-display font-bold text-foreground",
                "data-ocid": `product.price.${index}`,
                children: [
                  "$",
                  product.price.toFixed(2)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "default",
                className: "gap-1.5",
                onClick: () => addItem(product),
                "data-ocid": `product.add_button.${index}`,
                disabled: product.stock === 0,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5" }),
                  product.stock === 0 ? "Out of Stock" : "Add to Cart"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
