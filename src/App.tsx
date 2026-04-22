import { BrowserRouter, Routes, Route } from "react-router-dom"

import Index from './pages/Index.tsx'

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
       <Route exact path="/" element={<Index />}>
      </Routes>
    </BrowserRouter>
  );
}
