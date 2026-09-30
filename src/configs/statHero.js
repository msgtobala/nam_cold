import { statHeroImages } from '@resources/statHero';
import { strings } from '@strings/strings';
const copy = strings.statHero;
export const statHeroConfig = {
    ariaLabel: copy.ariaLabel,
    alt: copy.alt,
    banner: {
        src: statHeroImages.banner,
        width: 1024,
        height: 395,
    },
};
