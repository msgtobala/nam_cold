import Faq from '@components/Faq'
import KnowledgeHub from '@components/KnowledgeHub'
import Lifestyle from '@components/Lifestyle'
import ProductJourney from '@components/ProductJourney'
import ProductScience from '@components/ProductScience'
import ProductsHero from '@components/ProductsHero'
import Reviews from '@components/Reviews'
import StatHero from '@components/StatHero'
import TrustBar from '@components/TrustBar'

export default function Products() {
  return (
    <>
      <ProductsHero />
      <TrustBar />
      <ProductScience />
      <StatHero />
      <Lifestyle />
      <ProductJourney />
      <Reviews />
      <Faq />
      <KnowledgeHub />
    </>
  )
}
