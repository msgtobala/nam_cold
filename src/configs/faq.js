import { strings } from '@strings/strings';
const copy = strings.faq;
/** Figma Products FAQ (177:1806) */
export const faqConfig = {
    eyebrow: copy.eyebrow,
    headingAccent: copy.headingAccent,
    headingRest: copy.headingRest,
    items: [
        {
            id: 'onset',
            question: copy.items.onset.question,
            answer: copy.items.onset.answer,
        },
        {
            id: 'frequency',
            question: copy.items.frequency.question,
            answer: copy.items.frequency.answer,
        },
        {
            id: 'children',
            question: copy.items.children.question,
            answer: copy.items.children.answer,
        },
        {
            id: 'pregnancy',
            question: copy.items.pregnancy.question,
            answer: copy.items.pregnancy.answer,
        },
        {
            id: 'storage',
            question: copy.items.storage.question,
            answer: copy.items.storage.answer,
        },
        {
            id: 'other-medicines',
            question: copy.items.otherMedicines.question,
            answer: copy.items.otherMedicines.answer,
        },
        {
            id: 'store-general',
            question: copy.items.storeGeneral.question,
            answer: copy.items.storeGeneral.answer,
        },
    ],
};
