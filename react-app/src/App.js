import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import "./App.css";
import Checkout from "./components/Checkout";
import OrderSuccess from "./Pages/OrderSuccess"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

