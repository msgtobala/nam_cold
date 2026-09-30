import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import Container from '@components/Container';
import { solutionsGridConfig, } from '@configs/solutionsGrid';
function SolutionCard({ card }) {
    return (_jsxs("article", { className: [
            'relative h-[420px] overflow-hidden rounded-card sm:h-[440px]',
            card.backgroundClassName,
        ].join(' '), children: [_jsxs("div", { className: card.contentClassName, children: [_jsx("p", { className: "text-body-sm font-normal leading-normal text-[#0d0d0c]", children: card.question }), _jsx("h3", { className: [
                            'text-2xl font-normal leading-normal',
                            card.titleClassName,
                        ].join(' '), children: card.title }), _jsx("p", { className: card.descriptionClassName ??
                            'mt-3 text-body-sm font-normal leading-[1.2] text-black/50', children: card.description })] }), _jsx("img", { src: card.image.src, alt: "", width: card.image.width, height: card.image.height, className: card.image.imageClassName, decoding: "async" })] }));
}
export default function SolutionsGrid({ className = '' }) {
    const navigate = useNavigate();
    const { badge, headingPrefix, headingAccent, description, cta, ctaPath } = solutionsGridConfig;
    return (_jsx("section", { className: ['w-full mt-[100px]', className].filter(Boolean).join(' '), "aria-labelledby": "solutions-heading", children: _jsxs(Container, { className: "flex flex-col gap-10 pb-10 sm:gap-12 lg:gap-[68px]", children: [_jsxs("header", { className: "flex w-full flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8", children: [_jsxs("div", { className: "flex max-w-[830px] flex-col gap-3", children: [_jsx("span", { className: "text-body-sm font-normal tracking-[0.12em] text-primary", children: badge }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs("h2", { id: "solutions-heading", className: "text-heading font-normal leading-[1.04] text-ink", children: [headingPrefix, ' ', _jsx("span", { className: "text-primary", children: headingAccent })] }), _jsx("p", { className: "max-w-[830px] text-lg leading-[1.4] text-muted", children: description })] })] }), _jsx(Button, { type: "button", className: "shrink-0 self-start", onClick: () => navigate(ctaPath), children: cta })] }), _jsx("div", { className: "grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3", children: solutionsGridConfig.cards.map((card) => (_jsx(SolutionCard, { card: card }, card.id))) })] }) }));
}
