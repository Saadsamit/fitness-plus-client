import App from "@/App";
import About from "@/pages/About";
import AddProduct from "@/pages/AddProduct";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import ProductManagement from "@/pages/ProductManagement";
import Products from "@/pages/Products";
import Success from "@/pages/Success";
import UpdateProduct from "@/pages/UpdateProduct";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/ProductManagement",
        element: <ProductManagement />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/add-Product",
        element: <AddProduct />,
      },
      {
        path: "/update-Product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

export default routes;
