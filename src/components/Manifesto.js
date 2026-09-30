import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { manifestoConfig } from '@configs/manifesto';
/** Figma Manifesto (1:1169) — blue band below Solutions hero */
export default function Manifesto({ className = '', heading = manifestoConfig.heading, description = manifestoConfig.description, }) {
    return (_jsx("section", { className: ['w-full bg-primary', className].filter(Boolean).join(' '), "aria-labelledby": "manifesto-heading", children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[120px] lg:py-14", children: [_jsx("h2", { id: "manifesto-heading", className: "max-w-[613px] shrink-0 text-[1.75rem] font-normal leading-[1.3] text-white sm:text-lead lg:text-heading", children: heading }), _jsx("p", { className: "w-full max-w-[523px] text-body-sm font-normal leading-[1.3] text-white sm:text-base", children: description })] }) }));
}
