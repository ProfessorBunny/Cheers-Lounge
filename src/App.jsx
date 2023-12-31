import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Cocktail,
  Newsletter,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsLetterAction,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
