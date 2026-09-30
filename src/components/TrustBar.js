import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { trustBarConfig } from '@configs/trustBar';
/** Figma Products trust bar (177:1607) */
export default function TrustBar({ className = '' }) {
    const { ariaLabel, deliveryNote, items } = trustBarConfig;
    return (_jsx("section", { className: [
            'w-full border-b border-[#e0e8ff] bg-primary',
            className,
        ]
            .filter(Boolean)
            .join(' '), "aria-label": ariaLabel, children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col gap-3 px-4 py-[18px] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20", children: [_jsx("ul", { className: "flex flex-wrap items-center gap-x-8 gap-y-3", children: items.map((item) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx("span", { className: "relative size-3.5 shrink-0 overflow-clip", children: _jsx("img", { src: item.icon, alt: "", width: 14, height: 14, className: "absolute inset-0 size-full", decoding: "async", "aria-hidden": "true" }) }), _jsx("span", { className: "whitespace-nowrap text-body-sm font-normal text-white", children: item.label })] }, item.id))) }), _jsx("p", { className: "shrink-0 whitespace-nowrap text-body-sm font-normal text-[#d2def5]", children: deliveryNote })] }) }));
}
