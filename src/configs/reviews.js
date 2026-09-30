import { reviewsImages } from '@resources/reviews';
import { strings } from '@strings/strings';
const copy = strings.reviews;
export const reviewsConfig = {
    eyebrow: copy.eyebrow,
    heading: copy.heading,
    ratingValue: copy.ratingValue,
    ratingMeta: copy.ratingMeta,
    stars: {
        filled: reviewsImages.starFilled,
        filledSm: reviewsImages.starFilledSm,
        empty: reviewsImages.starEmpty,
    },
    reviews: [
        {
            id: 'priya',
            quote: copy.cards.priya.quote,
            name: copy.cards.priya.name,
            meta: copy.cards.priya.meta,
            rating: 5,
            avatar: reviewsImages.avatars.priya,
            avatarAlt: copy.cards.priya.avatarAlt,
        },
        {
            id: 'arjun',
            quote: copy.cards.arjun.quote,
            name: copy.cards.arjun.name,
            meta: copy.cards.arjun.meta,
            rating: 5,
            avatar: reviewsImages.avatars.arjun,
            avatarAlt: copy.cards.arjun.avatarAlt,
        },
        {
            id: 'sunita',
            quote: copy.cards.sunita.quote,
            name: copy.cards.sunita.name,
            meta: copy.cards.sunita.meta,
            rating: 4,
            avatar: reviewsImages.avatars.sunita,
            avatarAlt: copy.cards.sunita.avatarAlt,
        },
    ],
};
