import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import ErrorBoundary from "./pages/ErrorBoundary";
import HomePage from "./pages/home/HomePage";
import AnimePage from "./pages/anime/AnimePage";
import SearchPage from "./pages/search/SeachPage";
import SearchResults from "./pages/search/components/SearchResults";
import TopAnimePage from "./pages/top-anime/TopAnimePage";
import TopAnimeList from "./pages/top-anime/components/TopAnimeList";
import TopAnime from "./pages/top-anime/components/TopAnime";
import UpComingPage from "./pages/upcoming/UpcomingPage";
import UpcomingData from "./pages/upcoming/components/UpComingData";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "search",
            element: <SearchPage />,
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    index: true,
                    element: <SearchResults />,
                  },
                  {
                    path: ":searchQuery",
                    element: <SearchResults />,
                  },
                ],
              },
            ],
          },
          {
            path: "top",
            element: <TopAnimePage />,
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    index: true,
                    element: <TopAnime />,
                  },
                  {
                    path: ":format",
                    element: <TopAnime />,
                  },
                ],
              },
            ],
          },
          {
            path: "upcoming",
            element: <UpComingPage />,
            children: [
              {
                errorElement: <ErrorBoundary />,
                children: [
                  {
                    index: true,
                    element: <UpcomingData />,
                  },
                ],
              },
            ],
          },
          {
            path: "anime/:animeId/:animeName",
            element: <AnimePage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
