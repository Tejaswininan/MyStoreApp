import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetails from "./pages/ProductDetails";
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Pages where header and footer should be hidden
  const noHeaderFooterPages = ["/login", "/register", "/cart", "/checkout"];

  // Determine whether to show the header and footer
  const shouldShowHeaderFooter = !noHeaderFooterPages.includes(
    location.pathname
  );

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      {children}
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </AppLayout>
        <Sidebar />
      </AuthProvider>
    </Router>
  );
}

export default App;
