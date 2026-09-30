import { lifestyleImages } from '@resources/lifestyle';
import { strings } from '@strings/strings';
const copy = strings.lifestyle;
export const lifestyleConfig = {
    sleep: {
        eyebrow: copy.sleep.eyebrow,
        heading: copy.sleep.heading,
        description: copy.sleep.description,
        image: {
            src: lifestyleImages.sleepHero,
            alt: copy.sleep.imageAlt,
            width: 1184,
            height: 864,
        },
    },
    situations: {
        eyebrow: copy.situations.eyebrow,
        heading: copy.situations.heading,
        cards: [
            {
                id: 'office',
                title: copy.situations.cards.office.title,
                description: copy.situations.cards.office.description,
                image: lifestyleImages.office,
                imageAlt: copy.situations.cards.office.imageAlt,
            },
            {
                id: 'travel',
                title: copy.situations.cards.travel.title,
                description: copy.situations.cards.travel.description,
                image: lifestyleImages.travel,
                imageAlt: copy.situations.cards.travel.imageAlt,
            },
            {
                id: 'sleep',
                title: copy.situations.cards.sleep.title,
                description: copy.situations.cards.sleep.description,
                image: lifestyleImages.sleep,
                imageAlt: copy.situations.cards.sleep.imageAlt,
            },
            {
                id: 'outdoor',
                title: copy.situations.cards.outdoor.title,
                description: copy.situations.cards.outdoor.description,
                image: lifestyleImages.outdoor,
                imageAlt: copy.situations.cards.outdoor.imageAlt,
            },
        ],
    },
};
