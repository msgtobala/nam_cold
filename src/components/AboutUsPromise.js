import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { aboutUsPromiseConfig } from '@configs/aboutUsPromise';
/**
 * Figma Promise section (151:892).
 * Icons: star, globe, flask-round, heart — 20×20.
 */
export default function AboutUsPromise({ className = '' }) {
    const { heading, description, cards } = aboutUsPromiseConfig;
    return (_jsx("section", { className: ['w-full bg-surface-cream', className].filter(Boolean).join(' '), "aria-labelledby": "about-us-promise-heading", children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col items-start gap-10 px-4 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:gap-16 lg:px-page-x lg:py-[96px]", children: [_jsxs("header", { className: "flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end", children: [_jsx("h2", { id: "about-us-promise-heading", className: "w-full shrink-0 text-[1.75rem] font-normal leading-[1.04] tracking-[-1.2px] text-ink sm:text-lead lg:w-[325px] lg:text-heading lg:leading-[1.04] lg:tracking-[-1.2px]", children: heading }), _jsx("p", { className: "w-full shrink-0 text-base font-normal leading-[1.65] text-[#5a6476] lg:w-[412px]", children: description })] }), _jsx("ul", { className: "flex w-full flex-col gap-2 lg:flex-row", children: cards.map((card) => (_jsxs("li", { className: [
                            'flex min-w-0 flex-1 flex-col items-start gap-8 overflow-hidden rounded-[16px] p-8 lg:h-[217px]',
                            card.backgroundClassName,
                        ].join(' '), children: [_jsx("img", { src: card.icon, alt: "", width: 20, height: 20, decoding: "async", "aria-hidden": "true" }), _jsxs("div", { className: "flex w-full flex-col items-start gap-2 overflow-hidden", children: [_jsx("p", { className: "text-card-title font-normal leading-normal text-ink-strong lg:whitespace-nowrap", children: card.title }), _jsx("p", { className: "w-full text-base font-normal leading-[1.3] text-muted-alt", children: card.description })] })] }, card.id))) })] }) }));
}
