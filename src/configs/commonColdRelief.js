import { commonColdImages } from '@resources/commonCold';
import { strings } from '@strings/strings';
const copy = strings.commonColdRelief;
export const commonColdReliefConfig = {
    label: copy.label,
    heading: copy.heading,
    description: copy.description,
    stats: [
        {
            id: 'formulations',
            value: copy.stats.formulations.value,
            label: copy.stats.formulations.label,
        },
        {
            id: 'relief',
            value: copy.stats.relief.value,
            label: copy.stats.relief.label,
        },
    ],
    photography: {
        src: commonColdImages.photography,
        alt: copy.photographyAlt,
        width: 600,
        height: 580,
    },
    products: {
        src: commonColdImages.products,
        alt: copy.productsAlt,
        width: 528,
        height: 180,
    },
    cta: copy.cta,
    ctaHref: '/products',
};
