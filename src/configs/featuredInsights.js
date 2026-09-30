import { featuredInsightsImages } from '@resources/featuredInsights';
import { strings } from '@strings/strings';
const copy = strings.featuredInsights;
export const featuredInsightsConfig = {
    ariaLabel: copy.ariaLabel,
    eyebrow: copy.eyebrow,
    heading: copy.heading,
    viewAll: copy.viewAll,
    viewAllHref: '/products',
    topicsLabel: copy.topicsLabel,
    divider: featuredInsightsImages.divider,
    articles: [
        {
            id: 'progressive-strength',
            tag: copy.articles.progressiveStrength.tag,
            title: copy.articles.progressiveStrength.title,
            description: copy.articles.progressiveStrength.description,
            image: featuredInsightsImages.dumbbells,
            imageAlt: copy.articles.progressiveStrength.imageAlt,
            imageWidth: 1153,
            imageHeight: 1364,
            imageFit: 'framed',
        },
        {
            id: 'functional-strength',
            tag: copy.articles.functionalStrength.tag,
            title: copy.articles.functionalStrength.title,
            description: copy.articles.functionalStrength.description,
            image: featuredInsightsImages.kettlebell,
            imageAlt: copy.articles.functionalStrength.imageAlt,
            imageWidth: 1024,
            imageHeight: 1024,
            imageFit: 'cover',
        },
    ],
    topics: [
        { id: 'cold-care', label: copy.topics.coldCare },
        { id: 'allergies', label: copy.topics.allergies },
        { id: 'kids-care', label: copy.topics.kidsCare },
        { id: 'everyday-wellness', label: copy.topics.everydayWellness },
        { id: 'product-science', label: copy.topics.productScience },
    ],
};
