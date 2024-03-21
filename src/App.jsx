import "./App.css";
import Clothing from "./pages/Clothing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import MyOrderlist from "./pages/MyOrderlist";
import MyWishlist from "./pages/MyWishlist";
import ShippingDetails from "./pages/ShippingDetails";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ShopProductDetail from "./pages/ShopProductDetail";
import AllCarts from "./pages/Cart/AllCarts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details/:id" element={<ShopProductDetail />} />
          <Route path="/Clothing" element={<Clothing />} />
          <Route path="/wishlist" element={<AllCarts></AllCarts>} />
          <Route path="/orderlist" element={<MyOrderlist />} />

          <Route path="/shipping-details" element={<ShippingDetails />} />
          <Route path="/account" element={<MyAccount />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
