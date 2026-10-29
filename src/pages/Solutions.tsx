import AllergyRelief from '@components/AllergyRelief'
import BlockedNose from '@components/BlockedNose'
import CommonColdRelief from '@components/CommonColdRelief'
import HeroBanner from '@components/HeroBanner'
import KidsCare from '@components/KidsCare'
import KnowledgeHub from '@components/KnowledgeHub'
import Manifesto from '@components/Manifesto'
import NightCongestion from '@components/NightCongestion'
import ProductJourney from '@components/ProductJourney'
import ReliefIntro from '@components/ReliefIntro'
import ReliefScience from '@components/ReliefScience'

export default function Solutions() {
  return (
    <>
      <HeroBanner />
      <Manifesto />
      <ReliefIntro />
      <CommonColdRelief />
      <BlockedNose />
      <NightCongestion />
      <AllergyRelief />
      <ProductJourney />
      <KidsCare />
      <ReliefScience />
      <KnowledgeHub />
    </>
  )
}
