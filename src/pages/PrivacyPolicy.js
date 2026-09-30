import { jsx as _jsx } from "react/jsx-runtime";
import LegalDocument from '@components/LegalDocument';
import { strings } from '@strings/strings';
export default function PrivacyPolicy() {
    return _jsx(LegalDocument, { content: strings.privacyPolicy });
}
