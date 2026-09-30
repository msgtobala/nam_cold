import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import About from '@pages/About';
import AboutUs from '@pages/AboutUs';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import ProductDetails from '@pages/ProductDetails';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import Products from '@pages/Products';
import Solutions from '@pages/Solutions';
import Terms from '@pages/Terms';
import '@/App.css';
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "solutions", element: _jsx(Solutions, {}) }), _jsx(Route, { path: "products", element: _jsx(Products, {}) }), _jsx(Route, { path: "products/:productId", element: _jsx(ProductDetails, {}) }), _jsx(Route, { path: "about-us", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "insight", element: _jsx(About, {}) }), _jsx(Route, { path: "about", element: _jsx(Navigate, { to: "/insight", replace: true }) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "terms", element: _jsx(Terms, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }) }) }));
}
export default App;
