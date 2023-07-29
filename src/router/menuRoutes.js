
// Importo los componentes que voy a usar en las rutas
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Home from "../components/pages/Home/Home";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import FormFormik from "../components/pages/formFormik/FormFormik";
import Dashboard from "../components/pages/dashboard/Dashboard";

    export const routes = [
            {
                id:"home",
                path: "/",
                Element: Home
            },
            {
                id:"itemList",
                path: "/itemList",
                Element: ItemListContainer
            },
            {
                id:"category",
                path: "/category/:categoryName",
                Element: ItemListContainer
            },
            {
                id:"detail",
                path: "/itemDetail/:id",
                Element: ItemDetailContainer
            },
            {
                id:"cart",
                path: "/cart",
                Element: CartContainer
            },
            {
                id:"checkout",
                path: "/checkout",
                Element: CheckoutContainer
            },
            {
                id: "formik",
                path: "/formik",
                Element: FormFormik,
            },
            {
                id: "dashboard",
                path: "/dashboard",
                Element: Dashboard,
            },
        ];
