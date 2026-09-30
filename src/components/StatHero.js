import { jsx as _jsx } from "react/jsx-runtime";
import { statHeroConfig } from '@configs/statHero';
/** Fast Action banner — replaces the previous text-based “Relief in 25 seconds” block */
export default function StatHero({ className = '' }) {
    const { ariaLabel, alt, banner } = statHeroConfig;
    return (_jsx("section", { className: ['relative w-full overflow-hidden', className]
            .filter(Boolean)
            .join(' '), "aria-label": ariaLabel, children: _jsx("div", { className: "relative w-full aspect-[1024/395]", children: _jsx("img", { src: banner.src, alt: alt, width: banner.width, height: banner.height, className: "absolute inset-0 size-full object-cover object-center", decoding: "async" }) }) }));
}
