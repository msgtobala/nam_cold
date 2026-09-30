import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@icons/ArrowRightIcon';
import { reliefScienceConfig } from '@configs/reliefScience';
/** Figma Relief science (1:1138) — radial navy gradient + approach steps */
export default function ReliefScience({ className = '' }) {
    const navigate = useNavigate();
    const { eyebrow, heading, description, learnMore, learnMoreHref, steps } = reliefScienceConfig;
    return (_jsx("section", { className: ['relative w-full overflow-hidden', className]
            .filter(Boolean)
            .join(' '), style: {
            backgroundImage: 'radial-gradient(ellipse 120% 100% at 100% 100%, #1646b8 0%, #103385 50%, #0a1f52 100%)',
        }, "aria-labelledby": "relief-science-heading", children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col gap-12 px-4 py-16 sm:gap-14 sm:px-8 sm:py-20 lg:gap-[72px] lg:px-[120px] lg:py-[104px]", children: [_jsxs("header", { className: "flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", children: [_jsxs("div", { className: "flex max-w-[620px] flex-col gap-3", children: [_jsx("span", { className: "text-caption font-semibold tracking-[1.54px] text-accent-amber", children: eyebrow }), _jsx("h2", { id: "relief-science-heading", className: "max-w-[423px] text-[1.75rem] font-normal leading-[1.3] text-white sm:text-lead lg:text-heading", children: heading })] }), _jsx("p", { className: "max-w-[360px] text-body-sm font-normal leading-[1.65] text-[#ddd] sm:text-base", children: description })] }), _jsx("ol", { className: "flex w-full flex-col", children: steps.map((step) => (_jsxs("li", { className: "flex flex-col gap-4 border-b border-white/52 py-8 sm:gap-6 sm:py-10 lg:flex-row lg:items-center lg:gap-12", children: [_jsx("span", { className: "w-14 shrink-0 text-body-sm font-semibold text-[#e2e2e2]", children: step.number }), _jsx("h3", { className: "w-full shrink-0 text-lead font-normal text-white lg:w-[340px]", children: step.title }), _jsx("p", { className: "min-w-0 flex-1 text-body-sm font-normal leading-[1.65] text-[#ddd] sm:text-base", children: step.description }), _jsxs("button", { type: "button", onClick: () => navigate(learnMoreHref), className: "inline-flex shrink-0 cursor-pointer items-center gap-2 text-label font-normal text-accent-amber transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-amber", children: [learnMore, _jsx(ArrowRightIcon, { className: "size-3.5 text-accent-amber" })] })] }, step.id))) })] }) }));
}
