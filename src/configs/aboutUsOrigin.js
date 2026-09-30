import { aboutUsOriginImages } from '@resources/aboutUsOrigin';
import { strings } from '@strings/strings';
const copy = strings.aboutUsOrigin;
export const aboutUsOriginConfig = {
    eyebrow: copy.eyebrow,
    heading: copy.heading,
    paragraphs: [copy.paragraphs.lincoln, copy.paragraphs.namCold],
    year: copy.year,
    founded: copy.founded,
    image: {
        src: aboutUsOriginImages.origin,
        alt: copy.imageAlt,
        width: 1344,
        height: 768,
    },
};
