import { BrowserRouter, Routes, Route } from "react-router-dom"

import Index from "./pages/Index"
import Auth from "./pages/Auth"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter basename="/">
      
      <NavBar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  )
}
