import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function InputBar({ icon, placeholder = 'Enter your PIN Code or City...', label, className = '', inputClassName = '', id, ...props }) {
    const inputId = id ?? 'input-bar';
    return (_jsxs("label", { htmlFor: inputId, className: [
            'flex min-w-0 flex-1 cursor-text items-center gap-3 rounded-[40px] bg-white p-4',
            className,
        ]
            .filter(Boolean)
            .join(' '), children: [label ? _jsx("span", { className: "sr-only", children: label }) : null, icon ? (_jsx("span", { className: "inline-flex size-[18px] shrink-0 items-center justify-center text-body [&_svg]:size-[18px]", children: icon })) : null, _jsx("input", { id: inputId, type: "text", placeholder: placeholder, className: [
                    'min-w-0 flex-1 border-0 bg-transparent text-body-sm font-normal text-body outline-none placeholder:text-body',
                    inputClassName,
                ]
                    .filter(Boolean)
                    .join(' '), ...props })] }));
}
