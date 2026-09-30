import { jsx as _jsx } from "react/jsx-runtime";
import { productBannerConfig } from '@configs/productBanner';
/** Full-bleed NAM COLD OXY promotional banner */
export default function ProductBanner({ className = '', alt = productBannerConfig.alt, }) {
    const { image, width, height, ariaLabel, topGapClassName } = productBannerConfig;
    return (_jsx("section", { className: [topGapClassName, 'relative w-full overflow-hidden', className]
            .filter(Boolean)
            .join(' '), "aria-label": ariaLabel, children: _jsx("img", { src: image, alt: alt, width: width, height: height, className: "block h-auto w-full", decoding: "async" }) }));
}
