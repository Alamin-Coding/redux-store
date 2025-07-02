import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "cart", Component: Cart },
      { path: "wishlist", Component: Wishlist },
      { path: "shop", Component: Shop },
      { path: "details/:id", Component: ProductDetails },
    //   {
    //     path: "auth",
    //     Component: AuthLayout,
    //     children: [
    //       { path: "login", Component: Login },
    //       { path: "register", Component: Register },
    //     ],
    //   },
    //   {
    //     path: "concerts",
    //     children: [
    //       { index: true, Component: ConcertsHome },
    //       { path: ":city", Component: ConcertsCity },
    //       { path: "trending", Component: ConcertsTrending },
    //     ],
    //   },
    ],
  },
]);
