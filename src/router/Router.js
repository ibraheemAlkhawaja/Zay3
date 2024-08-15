import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import { About, Contact, Home, Shop } from "../Pages";
import { Login } from "../Components";
import { Cart, Search, SingleProduct } from "../Section";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path : "/Search",
        element : <Search />
      },
      {
        path: "/Login",
        element: <Login />,
      },{
        path : "/:p",
        element : <SingleProduct />
      },{
        path : "/Cart",
        element : <Cart />
      }
    ],
  },
]);
export default router;
