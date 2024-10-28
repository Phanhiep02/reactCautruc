import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/Products/ProductDetail";
import Products from "../pages/Products/Products";
export const publicRoutes = {
  layout: DefaultLayout,
  routes: [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/gioi-thieu",
      element: About,
    },
    {
      path: "/san-pham",
      element: Products,
    },
    {
      path: "/san-pham/:id",
      element: ProductDetail,
    },
  ],
};
