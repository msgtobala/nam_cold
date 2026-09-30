import LegalDocument from '@components/LegalDocument'
import { strings } from '@strings/strings'

export default function Terms() {
  return (
    <LegalDocument content={strings.terms} linkPrivacyPolicy />
  )
}
