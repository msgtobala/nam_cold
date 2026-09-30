import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '@components/Button';
import Container from '@components/Container';
import { symptomsConfig } from '@configs/symptoms';
export default function Symptoms({ className = '', onFindSolution, }) {
    const [selected, setSelected] = useState([]);
    const { badge, heading, description, cta, items } = symptomsConfig;
    function toggleSymptom(id) {
        setSelected((current) => current.includes(id)
            ? current.filter((item) => item !== id)
            : [...current, id]);
    }
    return (_jsx("section", { className: [
            'w-full bg-[linear-gradient(-28deg,#F5F9FF_28%,#FFFFFF_100%)] pt-[100px] pb-[100px]',
            className,
        ]
            .filter(Boolean)
            .join(' '), "aria-labelledby": "symptoms-heading", children: _jsxs(Container, { className: "flex flex-col items-center gap-11", children: [_jsxs("header", { className: "flex w-full max-w-[800px] flex-col items-center gap-4 text-center", children: [_jsx("span", { className: "rounded-badge border border-border-primary-soft bg-primary-tint px-4 py-1.5 text-nav font-medium text-primary", children: badge }), _jsx("h2", { id: "symptoms-heading", className: "text-heading font-normal leading-[1.04] text-ink", children: heading }), _jsx("p", { className: "max-w-[800px] text-base font-normal text-[#4b5563]", children: description })] }), _jsx("ul", { className: "grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5", children: items.map((symptom) => {
                        const isSelected = selected.includes(symptom.id);
                        return (_jsx("li", { className: "flex justify-center", children: _jsxs("button", { type: "button", "aria-pressed": isSelected, "data-active": isSelected || undefined, onClick: () => toggleSymptom(symptom.id), className: [
                                    'relative flex h-[247px] w-full max-w-[199px] cursor-pointer flex-col items-center rounded-card border-2 bg-white px-3 pt-8 transition-[border-color,box-shadow,background-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]',
                                    isSelected
                                        ? 'border-primary bg-[#eef3ff] shadow-[0_8px_24px_rgba(31,79,191,0.18)]'
                                        : 'border-[rgba(31,79,191,0.53)] hover:border-primary hover:bg-primary-tint',
                                ].join(' '), children: [isSelected ? (_jsx("span", { className: "absolute top-3 right-3 flex size-6 items-center justify-center rounded-full bg-primary text-white", "aria-hidden": "true", children: _jsx("svg", { viewBox: "0 0 16 16", fill: "none", className: "size-3.5", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M3.5 8.5 6.5 11.5 12.5 4.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })) : null, _jsx("span", { className: "flex h-[110px] w-[100px] items-center justify-center overflow-hidden", children: _jsx("img", { src: symptom.icon, alt: "", width: 100, height: 110, className: "max-h-full max-w-full object-contain", decoding: "async" }) }), _jsxs("span", { className: "mt-auto mb-8 flex w-full max-w-[140px] flex-col items-center text-center leading-normal", children: [_jsx("span", { className: "text-[16px] font-semibold text-primary", children: symptom.title }), _jsx("span", { className: "text-body-sm font-normal text-[#4b5563]", children: symptom.subtitle })] })] }) }, symptom.id));
                    }) }), _jsx(Button, { type: "button", variant: "primary", onClick: () => onFindSolution?.(selected), children: cta })] }) }));
}
