import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '@components/Footer';
import Header from '@components/Header';
import TrustedEverywhere from '@components/TrustedEverywhere';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    return (_jsxs("div", { className: "flex min-h-svh w-full flex-col font-sans", children: [_jsx(Header, {}), _jsx("main", { className: "w-full flex-1", children: _jsx(Outlet, {}) }), _jsx(TrustedEverywhere, {}), _jsx(Footer, {})] }));
}
