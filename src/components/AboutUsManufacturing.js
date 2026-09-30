import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { aboutUsManufacturingConfig } from '@configs/aboutUsManufacturing';
/**
 * Figma Frame 1410121008 / Manufacturing (151:921).
 * Facility image (151:925): 1344×480, radius 16.
 */
export default function AboutUsManufacturing({ className = '', }) {
    const { heading, description, image, items } = aboutUsManufacturingConfig;
    return (_jsx("section", { className: ['w-full bg-surface', className].filter(Boolean).join(' '), "aria-labelledby": "about-us-manufacturing-heading", children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col items-center gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:gap-[38px] lg:px-page-x lg:py-[65px]", children: [_jsxs("header", { className: "flex w-full flex-col items-center gap-5 overflow-hidden text-center lg:w-[832px]", children: [_jsx("h2", { id: "about-us-manufacturing-heading", className: "w-full text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading lg:leading-[1.3]", children: heading }), _jsx("p", { className: "w-full text-base font-normal leading-[1.75] text-muted-alt", children: description })] }), _jsx("div", { className: "relative h-[240px] w-full overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[480px]", children: _jsx("img", { src: image.src, alt: image.alt, width: image.width, height: image.height, className: "absolute inset-0 size-full object-cover object-center", decoding: "async" }) }), _jsx("ul", { className: "flex w-full flex-col gap-px overflow-hidden rounded-[12px] lg:flex-row", children: items.map((item) => (_jsxs("li", { className: "flex min-w-0 flex-1 flex-col items-start gap-2 bg-primary p-9", children: [_jsx("p", { className: "text-card-title font-normal leading-normal tracking-[2.8px] text-white lg:whitespace-nowrap", children: item.title }), _jsx("p", { className: "w-full text-body-sm font-normal leading-[1.65] text-white", children: item.description })] }, item.id))) })] }) }));
}
