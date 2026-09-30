import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@components/Layout'
import About from '@pages/About'
import AboutUs from '@pages/AboutUs'
import Contact from '@pages/Contact'
import Home from '@pages/Home'
import ProductDetails from '@pages/ProductDetails'
import PrivacyPolicy from '@pages/PrivacyPolicy'
import Products from '@pages/Products'
import Solutions from '@pages/Solutions'
import Terms from '@pages/Terms'
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
          <Route path="about-us" element={<AboutUs />} />
          <Route path="insight" element={<About />} />
          <Route path="about" element={<Navigate to="/insight" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
