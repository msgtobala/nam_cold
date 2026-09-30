import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { aboutUsIntroConfig } from '@configs/aboutUsIntro';
/** Figma Intro bar (151:783) — 1440×362, px 48, py 80 */
export default function AboutUsIntro({ className = '' }) {
    const { label, heading, description } = aboutUsIntroConfig;
    return (_jsx("section", { className: [
            'w-full border-y border-solid border-border-warm bg-white',
            className,
        ]
            .filter(Boolean)
            .join(' '), "aria-labelledby": "about-us-intro-heading", children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col items-start justify-between gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:flex-row lg:gap-0 lg:px-page-x lg:py-header", children: [_jsx("p", { className: "w-full shrink-0 text-body-sm font-medium leading-normal tracking-[1.96px] text-primary lg:w-[220px]", children: label }), _jsxs("div", { className: "flex w-full flex-col gap-4 overflow-hidden lg:w-[800px]", children: [_jsx("h2", { id: "about-us-intro-heading", className: "w-full text-[1.75rem] font-normal leading-[1.3] tracking-[0.28px] text-ink-strong sm:text-lead", children: heading }), _jsx("p", { className: "w-full text-base font-normal leading-[1.3] text-muted-alt", children: description })] })] }) }));
}
