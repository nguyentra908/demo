import HomePage from "./containers/HomePage/HomePage";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import FormLogin from "./components/Form/FomLogin";
import FormRegister from "./components/Form/FormRegister";
import Contact from "./components/HomePage/contact/contact";

export default [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/categories",
    component: CategoryPage
  },
  {
    path: "/product/:id",
    component: ProductPage
  },
  {
    path: "/cart",
    component: CartPage
  },
  {
    path: "/login",
    component: FormLogin
  },
  {
    path: "/register",
    component: FormRegister
  },
  {
    path: "/contact",
    component: Contact
  }
];
