import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const QuizPage = lazy(() => import("@/pages/Quiz"));
const ResultPage = lazy(() => import("@/pages/Result"));

function PageLoader() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-48 w-full max-w-md" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <QuizPage />
    </Suspense>
  ),
});

const resultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/result",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ResultPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([homeRoute, quizRoute, resultRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
