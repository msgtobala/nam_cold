import { jsx as _jsx } from "react/jsx-runtime";
const widthClasses = {
    /** 1440 max; tighter side gutters */
    page: 'max-w-page px-3 sm:px-6 lg:px-page-x',
    /** 1440 max; tighter footer gutters */
    footer: 'max-w-page px-3 sm:px-6 lg:px-footer-x',
};
export default function Container({ as: Tag = 'div', width = 'page', children, className = '', }) {
    return (_jsx(Tag, { className: ['mx-auto w-full', widthClasses[width], className]
            .filter(Boolean)
            .join(' '), children: children }));
}
