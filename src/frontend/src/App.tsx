import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { CartProvider } from "@/context/CartContext";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home })),
);
const Shop = lazy(() =>
  import("@/pages/Shop").then((m) => ({ default: m.Shop })),
);
const ProductDetail = lazy(() =>
  import("@/pages/ProductDetail").then((m) => ({ default: m.ProductDetail })),
);
const Cart = lazy(() =>
  import("@/pages/Cart").then((m) => ({ default: m.Cart })),
);
const Checkout = lazy(() =>
  import("@/pages/Checkout").then((m) => ({ default: m.Checkout })),
);
const Orders = lazy(() =>
  import("@/pages/Orders").then((m) => ({ default: m.Orders })),
);
const OrderDetail = lazy(() =>
  import("@/pages/OrderDetail").then((m) => ({ default: m.OrderDetail })),
);
const About = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.Contact })),
);

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-full max-w-xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map((k) => (
          <Skeleton key={k} className="h-64 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// Root route with providers
const rootRoute = createRootRoute({
  component: () => (
    <CartProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </CartProvider>
  ),
});

// Route definitions
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});
const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop/$productId",
  component: ProductDetail,
});
const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});
const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: Checkout,
});
const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: Orders,
});
const orderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders/$orderId",
  component: OrderDetail,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  shopRoute,
  productDetailRoute,
  cartRoute,
  checkoutRoute,
  ordersRoute,
  orderDetailRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
