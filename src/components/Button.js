import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ArrowRightIcon from '@icons/ArrowRightIcon';
const variantClasses = {
    primary: 'bg-primary text-white shadow-button',
    secondary: 'bg-secondary text-white',
    tertiary: 'bg-white text-secondary',
};
const sizeClasses = {
    md: 'gap-2 px-7 py-3.5 text-button font-semibold rounded-button',
    sm: 'gap-1 px-4 py-[7px] text-nav font-normal rounded-pill',
};
const variantSizeOverrides = {
    'secondary-md': 'gap-1 py-4 text-body-sm rounded-full shadow-none',
    'tertiary-md': 'gap-1 py-4 text-body-sm font-medium rounded-full shadow-none',
    'primary-sm': 'shadow-none',
};
const arrowClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    tertiary: 'text-primary',
};
export default function Button({ variant = 'primary', size = 'md', children, showArrow, className = '', type = 'button', ...props }) {
    const withArrow = showArrow ?? size === 'md';
    return (_jsxs("button", { type: type, className: [
            'inline-flex cursor-pointer items-center justify-center overflow-clip whitespace-nowrap transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
            variantClasses[variant],
            sizeClasses[size],
            variantSizeOverrides[`${variant}-${size}`] ?? '',
            className,
        ]
            .filter(Boolean)
            .join(' '), ...props, children: [_jsx("span", { children: children }), withArrow ? (_jsx(ArrowRightIcon, { className: `size-4 shrink-0 ${arrowClasses[variant]}` })) : null] }));
}
