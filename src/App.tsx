import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@components/Layout'
import About from '@pages/About'
import Contact from '@pages/Contact'
import Home from '@pages/Home'
import ProductDetails from '@pages/ProductDetails'
import Products from '@pages/Products'
import Solutions from '@pages/Solutions'
import '@/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
