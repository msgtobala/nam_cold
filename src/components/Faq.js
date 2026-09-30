import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { faqConfig } from '@configs/faq';
/** Figma Products FAQ (177:1806) */
export default function Faq({ className = '' }) {
    const { eyebrow, headingAccent, headingRest, items } = faqConfig;
    const [openId, setOpenId] = useState(null);
    return (_jsx("section", { className: ['w-full bg-[#f5f8fd]', className].filter(Boolean).join(' '), "aria-labelledby": "faq-heading", children: _jsxs("div", { className: "mx-auto flex w-full max-w-page flex-col gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24", children: [_jsxs("header", { className: "flex w-full max-w-[600px] flex-col gap-3", children: [_jsx("span", { className: "text-body-sm font-medium tracking-[1.4px] text-primary-bright", children: eyebrow }), _jsxs("h2", { id: "faq-heading", className: "max-w-[398px] text-[1.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-lead lg:text-heading lg:tracking-[-1.2px]", children: [_jsx("span", { className: "text-primary", children: headingAccent }), headingRest] })] }), _jsx("ul", { className: "flex w-full flex-col", children: items.map((item) => {
                        const isOpen = openId === item.id;
                        const panelId = `faq-panel-${item.id}`;
                        const buttonId = `faq-button-${item.id}`;
                        return (_jsxs("li", { className: "border-b border-[#e0e8ff]", children: [_jsxs("button", { id: buttonId, type: "button", className: "flex w-full items-center justify-between gap-6 py-6 text-left", "aria-expanded": isOpen, "aria-controls": panelId, onClick: () => setOpenId(isOpen ? null : item.id), children: [_jsx("span", { className: "text-card-title font-normal text-[#0a1838]", children: item.question }), _jsx("span", { className: "shrink-0 text-[22px] font-light leading-none text-primary-bright", "aria-hidden": "true", children: isOpen ? '−' : '+' })] }), isOpen ? (_jsx("div", { id: panelId, role: "region", "aria-labelledby": buttonId, className: "pb-6", children: _jsx("p", { className: "max-w-[720px] pr-10 text-body-sm font-normal leading-[1.65] text-[#5a6476] sm:text-base", children: item.answer }) })) : null] }, item.id));
                    }) })] }) }));
}
