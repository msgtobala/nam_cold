import { insightsLibraryImages } from '@resources/insightsLibrary';
import { strings } from '@strings/strings';
const copy = strings.insightsLibrary;
const articles = copy.articles;
export const insightsLibraryConfig = {
    ariaLabel: copy.ariaLabel,
    eyebrow: copy.eyebrow,
    heading: copy.heading,
    searchPlaceholder: copy.searchPlaceholder,
    searchAriaLabel: copy.searchAriaLabel,
    articles: [
        {
            id: 'cold-care',
            tag: articles.coldCare.tag,
            title: articles.coldCare.title,
            readTime: articles.coldCare.readTime,
            image: insightsLibraryImages.coldCare,
            imageAlt: articles.coldCare.imageAlt,
        },
        {
            id: 'sleep',
            tag: articles.sleep.tag,
            title: articles.sleep.title,
            readTime: articles.sleep.readTime,
            image: insightsLibraryImages.sleep,
            imageAlt: articles.sleep.imageAlt,
        },
        {
            id: 'allergies',
            tag: articles.allergies.tag,
            title: articles.allergies.title,
            readTime: articles.allergies.readTime,
            image: insightsLibraryImages.allergies,
            imageAlt: articles.allergies.imageAlt,
        },
        {
            id: 'kids-care',
            tag: articles.kidsCare.tag,
            title: articles.kidsCare.title,
            readTime: articles.kidsCare.readTime,
            image: insightsLibraryImages.kidsCare,
            imageAlt: articles.kidsCare.imageAlt,
        },
        {
            id: 'product-science',
            tag: articles.productScience.tag,
            title: articles.productScience.title,
            readTime: articles.productScience.readTime,
            image: insightsLibraryImages.productScience,
            imageAlt: articles.productScience.imageAlt,
        },
        {
            id: 'everyday-wellness',
            tag: articles.everydayWellness.tag,
            title: articles.everydayWellness.title,
            readTime: articles.everydayWellness.readTime,
            image: insightsLibraryImages.everydayWellness,
            imageAlt: articles.everydayWellness.imageAlt,
        },
    ],
};
