import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./page/product-list-page.jsx";
import LoginPage from "./page/login-page.jsx";
import VerifyPage from "./page/verify-page.jsx";
import CartListPage from "./page/cart-list-page.jsx";
import HomePage from "./page/home-page.jsx";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product" element={<ProductListPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/verify" element={<VerifyPage/>}/>
                <Route path="/cart" element={<CartListPage/>}/>
            </Routes>
        </HashRouter>
    );
};

export default App;