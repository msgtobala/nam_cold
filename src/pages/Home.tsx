import HeroBanner from '@components/HeroBanner'
import Journey from '@components/Journey'
import KnowledgeHub from '@components/KnowledgeHub'
import ProductBanner from '@components/ProductBanner'
import SolutionsGrid from '@components/SolutionsGrid'
import Symptoms from '@components/Symptoms'
import WhyChoose from '@components/WhyChoose'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Symptoms />
      <SolutionsGrid />
      <ProductBanner />
      <Journey />
      <WhyChoose />
      <KnowledgeHub />
    </>
  )
}
