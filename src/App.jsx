import Navbar from "./Components/Navbar"
import Home from "./Views/Home"
import Login from "./Views/Login"
import Register from "./Views/Register"
import Product from "./Views/Product"
import Cart from "./Views/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/login" element={< Login />} />
        <Route path="/createaccount" element={< Register />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}