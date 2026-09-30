import { aboutUsPromiseIcons } from '@resources/aboutUsPromise';
import { strings } from '@strings/strings';
const copy = strings.aboutUsPromise;
const cards = copy.cards;
export const aboutUsPromiseConfig = {
    heading: copy.heading,
    description: copy.description,
    cards: [
        {
            id: 'trusted',
            title: cards.trusted.title,
            description: cards.trusted.description,
            icon: aboutUsPromiseIcons.star,
            backgroundClassName: 'bg-surface-sand',
        },
        {
            id: 'accessible',
            title: cards.accessible.title,
            description: cards.accessible.description,
            icon: aboutUsPromiseIcons.globe,
            backgroundClassName: 'bg-[#e8f0e0]',
        },
        {
            id: 'innovative',
            title: cards.innovative.title,
            description: cards.innovative.description,
            icon: aboutUsPromiseIcons.flaskRound,
            backgroundClassName: 'bg-[#ede8f5]',
        },
        {
            id: 'family-focused',
            title: cards.familyFocused.title,
            description: cards.familyFocused.description,
            icon: aboutUsPromiseIcons.heart,
            backgroundClassName: 'bg-[#e8f2f8]',
        },
    ],
};
