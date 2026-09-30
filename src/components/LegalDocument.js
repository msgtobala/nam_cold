import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '@components/Container';
function renderText(text, linkPrivacyPolicy) {
    const pattern = linkPrivacyPolicy
        ? /(hello@namcold\.com|Privacy Policy)/g
        : /(hello@namcold\.com)/g;
    const parts = text.split(pattern);
    return parts.map((part, index) => {
        if (part === 'hello@namcold.com') {
            return (_jsx("a", { href: "mailto:hello@namcold.com", className: "text-primary underline-offset-2 hover:underline", children: part }, index));
        }
        if (part === 'Privacy Policy' && linkPrivacyPolicy) {
            return (_jsx(Link, { to: "/privacy-policy", className: "text-primary underline-offset-2 hover:underline", children: part }, index));
        }
        return part;
    });
}
export default function LegalDocument({ content, linkPrivacyPolicy = false, }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsx("article", { className: "w-full bg-white", children: _jsxs(Container, { className: "flex flex-col gap-10 py-14 sm:py-16 lg:py-[96px]", children: [_jsxs("header", { className: "flex max-w-[760px] flex-col gap-4", children: [_jsx("p", { className: "text-body-sm font-semibold uppercase tracking-[1.96px] text-primary", children: content.eyebrow }), _jsx("h1", { className: "text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading", children: content.title }), _jsxs("p", { className: "text-body-sm text-muted-alt", children: [content.updated, _jsx("span", { className: "px-2", "aria-hidden": true, children: "|" }), content.effective] })] }), _jsxs("div", { className: "flex max-w-[760px] flex-col gap-8 text-base leading-[1.7] text-muted-alt", children: [content.intro.map((paragraph) => (_jsx("p", { children: renderText(paragraph, linkPrivacyPolicy) }, paragraph))), content.sections.map((section) => (_jsxs("section", { className: "flex flex-col gap-4", children: [_jsx("h2", { className: "text-xl font-medium leading-[1.3] text-ink", children: section.heading }), section.paragraphs[0] ? (_jsx("p", { children: renderText(section.paragraphs[0], linkPrivacyPolicy) })) : null, section.bullets.length > 0 ? (_jsx("ul", { className: "list-disc space-y-2 pl-5", children: section.bullets.map((item) => (_jsx("li", { children: renderText(item, linkPrivacyPolicy) }, item))) })) : null, section.paragraphs.slice(1).map((paragraph) => (_jsx("p", { children: renderText(paragraph, linkPrivacyPolicy) }, paragraph)))] }, section.heading)))] })] }) }));
}
