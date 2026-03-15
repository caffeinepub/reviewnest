import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const fashionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fashion",
  component: () => <CategoryPage category="fashion" />,
});

const electronicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/electronics",
  component: () => <CategoryPage category="electronics" />,
});

const beautyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/beauty",
  component: () => <CategoryPage category="beauty" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  fashionRoute,
  electronicsRoute,
  beautyRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
