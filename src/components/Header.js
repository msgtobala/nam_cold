import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '@components/Button';
import Container from '@components/Container';
import CloseIcon from '@icons/CloseIcon';
import MenuIcon from '@icons/MenuIcon';
import SearchIcon from '@icons/SearchIcon';
import { navigationConfig } from '@configs/navigation';
import { namColdLogo } from '@resources/brand';
import { strings } from '@strings/strings';
function navLinkClassName({ isActive }) {
    return [
        'relative px-1 py-1 text-nav transition-colors hover:text-primary',
        isActive
            ? 'font-medium text-primary after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary'
            : 'font-normal text-primary-dark',
    ].join(' ');
}
function mobileNavLinkClassName({ isActive }) {
    return [
        'block rounded-md px-2 py-3 text-body transition-colors hover:text-primary',
        isActive
            ? 'bg-primary-tint font-medium text-primary'
            : 'font-normal text-primary-dark',
    ].join(' ');
}
export default function Header({ onSearchClick, onCtaClick, className = '', }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuId = useId();
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);
    useEffect(() => {
        if (!menuOpen)
            return;
        const onKeyDown = (event) => {
            if (event.key === 'Escape')
                setMenuOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);
    return (_jsxs("header", { className: [
            'sticky top-0 z-50 w-full border-b border-white bg-white',
            className,
        ]
            .filter(Boolean)
            .join(' '), children: [_jsx("div", { className: "h-header w-full", children: _jsxs(Container, { className: "relative flex h-full items-center justify-between", children: [_jsx(Link, { to: "/", className: "relative z-10 shrink-0", "aria-label": strings.brand.homeAriaLabel, children: _jsx("img", { src: namColdLogo, alt: strings.brand.name, width: 108, height: 52, className: "h-[52px] w-[108px] object-contain" }) }), _jsx("nav", { className: "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-[33px] md:flex", "aria-label": strings.common.mainNavAriaLabel, children: navigationConfig.items.map(({ to, label }) => (_jsx(NavLink, { to: to, className: navLinkClassName, children: label }, to))) }), _jsxs("div", { className: "relative z-10 flex items-center gap-5", children: [_jsx("button", { type: "button", "aria-label": strings.common.searchAriaLabel, onClick: onSearchClick, className: "inline-flex size-[18px] cursor-pointer items-center justify-center text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", children: _jsx(SearchIcon, { className: "size-[18px]" }) }), _jsx("div", { className: "hidden md:block", children: _jsx(Button, { variant: "primary", size: "sm", onClick: onCtaClick, children: navigationConfig.cta }) }), _jsx("button", { type: "button", className: "inline-flex size-11 cursor-pointer items-center justify-center text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden", "aria-label": menuOpen
                                        ? strings.common.menuCloseAriaLabel
                                        : strings.common.menuOpenAriaLabel, "aria-expanded": menuOpen, "aria-controls": menuId, onClick: () => setMenuOpen((open) => !open), children: menuOpen ? (_jsx(CloseIcon, { className: "size-[18px]" })) : (_jsx(MenuIcon, { className: "size-[18px]" })) })] })] }) }), menuOpen ? (_jsx("nav", { id: menuId, className: "fixed inset-x-0 top-header bottom-0 z-40 overflow-y-auto border-t border-border bg-white md:hidden", "aria-label": strings.common.mainNavAriaLabel, children: _jsxs(Container, { className: "flex flex-col py-4", children: [navigationConfig.items.map(({ to, label }) => (_jsx(NavLink, { to: to, className: mobileNavLinkClassName, onClick: () => setMenuOpen(false), children: label }, to))), _jsx(Button, { variant: "primary", size: "sm", onClick: onCtaClick, className: "mt-4 w-full", children: navigationConfig.cta })] }) })) : null] }));
}
