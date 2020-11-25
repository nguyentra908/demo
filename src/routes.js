import HomePage from "./containers/HomePage/HomePage";
import CategoryPage from "./containers/CategoryPage/CategoryPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import FormLogin from "./components/Form/FomLogin";
import FormRegister from "./components/Form/FormRegister";
import Contact from "./components/HomePage/Contact/Contact";

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
    path: "/Login",
    component: FormLogin
  },
  {
    path: "/Register",
    component: FormRegister
  },
  {
    path: "/Contact",
    component: Contact
  }
];
