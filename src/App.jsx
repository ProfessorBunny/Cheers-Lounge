import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Cocktail,
  Newsletter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>dd</h2>,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
