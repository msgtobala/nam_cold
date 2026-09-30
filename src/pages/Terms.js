import { jsx as _jsx } from "react/jsx-runtime";
import LegalDocument from '@components/LegalDocument';
import { strings } from '@strings/strings';
export default function Terms() {
    return (_jsx(LegalDocument, { content: strings.terms, linkPrivacyPolicy: true }));
}
