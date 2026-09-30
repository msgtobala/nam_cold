import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@components/Container';
import { productJourneyConfig } from '@configs/productJourney';
/** Figma Products relief journey (1:1700) */
export default function ProductJourney({ className = '' }) {
    const { badge, titleBefore, titleAccent, titleAfter, description, steps, timelineImage, timelineAlt, timelineWidth, timelineHeight, headingId, } = productJourneyConfig;
    return (_jsx("section", { className: [
            'w-full bg-white pt-14 pb-16 sm:pt-16 lg:pt-[56px] lg:pb-20',
            className,
        ]
            .filter(Boolean)
            .join(' '), "aria-labelledby": headingId, children: _jsxs(Container, { className: "flex flex-col items-center gap-10 lg:gap-12", children: [_jsxs("header", { className: "flex w-full max-w-[800px] flex-col items-center gap-3 text-center", children: [_jsx("span", { className: "px-4 py-1.5 text-body-sm font-normal tracking-[1.68px] text-primary", children: badge }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsxs("h2", { id: headingId, className: "text-[1.75rem] font-normal leading-[1.1] text-ink sm:text-lead lg:text-heading lg:leading-[1.04]", children: [titleBefore, _jsx("span", { className: "text-primary", children: titleAccent }), titleAfter] }), _jsx("p", { className: "max-w-[800px] text-body-sm font-normal text-[#4b5563] sm:text-base", children: description })] })] }), _jsxs("div", { className: "flex w-full flex-col gap-6 lg:gap-2", children: [_jsx("div", { className: "relative mx-auto w-full max-w-[1440px] overflow-hidden", children: _jsx("img", { src: timelineImage, alt: timelineAlt, width: timelineWidth, height: timelineHeight, className: "h-auto w-full object-contain object-center", decoding: "async" }) }), _jsx("ul", { className: "grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5", children: steps.map((step) => (_jsxs("li", { className: "mx-auto flex w-full max-w-[204px] flex-col items-center gap-1.5 text-center", children: [_jsx("p", { className: "w-full text-card-title font-medium text-primary", children: step.title }), _jsx("p", { className: "w-full text-body-sm font-normal text-[#4b5563]", children: step.description })] }, step.id))) })] })] }) }));
}
