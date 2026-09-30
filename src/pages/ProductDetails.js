import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useParams } from 'react-router-dom';
import Container from '@components/Container';
export default function ProductDetails() {
    const { productId } = useParams();
    return (_jsx(Container, { className: "py-8", children: _jsxs("section", { className: "page", children: [_jsx("h1", { children: "Product Details" }), _jsxs("p", { children: ["Placeholder details for product ID: ", productId] }), _jsx(Link, { to: "/products", children: "Back to products" })] }) }));
}
