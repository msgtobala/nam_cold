import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Container from '@components/Container';
import InputBar from '@components/InputBar';
import FacebookIcon from '@icons/FacebookIcon';
import InstagramIcon from '@icons/InstagramIcon';
import LinkedInIcon from '@icons/LinkedInIcon';
import MapPinIcon from '@icons/MapPinIcon';
import { footerConfig } from '@configs/footer';
import { namColdLightLogo } from '@resources/brand';
import { strings } from '@strings/strings';
const socialIcons = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    linkedin: LinkedInIcon,
};
export default function Footer({ onSearchPharmacy, className = '', }) {
    const [query, setQuery] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        onSearchPharmacy?.(query.trim());
    }
    return (_jsx("footer", { className: [
            'w-full [background-image:var(--gradient-footer)] pb-10 pt-[100px] text-white',
            className,
        ]
            .filter(Boolean)
            .join(' '), children: _jsxs(Container, { width: "footer", className: "flex flex-col gap-16", children: [_jsxs("div", { className: "flex flex-col items-center gap-6", children: [_jsxs("h2", { className: "max-w-full text-center font-semibold text-display text-white", children: [_jsx("span", { className: "block leading-[1.2]", children: footerConfig.headlineLine1 }), _jsxs("span", { className: "block leading-[1.2]", children: [footerConfig.headlineLine2Prefix, ' ', _jsx("span", { className: "text-accent-gold", children: footerConfig.headlineBrand })] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "flex w-full max-w-[600px] flex-col items-stretch gap-4 sm:flex-row sm:items-center", children: [_jsx(InputBar, { icon: _jsx(MapPinIcon, {}), placeholder: footerConfig.pharmacyPlaceholder, label: footerConfig.pharmacyLabel, value: query, onChange: (event) => setQuery(event.target.value) }), _jsx(Button, { type: "submit", variant: "primary", className: "shrink-0", children: footerConfig.pharmacyCta })] })] }), _jsx("div", { className: "h-px w-full bg-footer-divider", "aria-hidden": true }), _jsxs("div", { className: "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between", children: [_jsxs("div", { className: "flex w-full max-w-[360px] flex-col gap-4", children: [_jsx(Link, { to: "/", "aria-label": strings.brand.homeAriaLabel, children: _jsx("img", { src: namColdLightLogo, alt: strings.brand.name, width: 108, height: 52, className: "h-[52px] w-[108px] object-contain" }) }), _jsx("p", { className: "text-label text-footer-muted", children: footerConfig.blurb }), _jsx("ul", { className: "flex items-center gap-3", "aria-label": footerConfig.socialLabel, children: footerConfig.social.map((item) => {
                                        const Icon = socialIcons[item.id];
                                        return (_jsx("li", { children: _jsx("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", "aria-label": item.label, className: "flex size-9 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80", children: _jsx(Icon, {}) }) }, item.id));
                                    }) })] }), _jsx("div", { className: "grid w-full flex-1 grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-[760px] lg:gap-6", children: footerConfig.linkColumns.map((column) => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("p", { className: "text-body-sm font-bold text-white", children: column.title }), _jsx("ul", { className: "flex flex-col gap-4", children: column.links.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.to, className: "text-label text-footer-muted transition-opacity hover:opacity-80", children: link.label }) }, `${column.title}-${link.label}`))) })] }, column.title))) })] }), _jsx("div", { className: "h-px w-full bg-footer-divider", "aria-hidden": true }), _jsxs("div", { className: "flex flex-col gap-4 text-footer-subtle sm:flex-row sm:items-center sm:justify-between", children: [_jsx("p", { className: "max-w-[800px] text-caption", children: footerConfig.disclaimer }), _jsx("p", { className: "shrink-0 text-nav", children: footerConfig.copyright })] })] }) }));
}
