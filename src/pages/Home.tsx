import HeroBanner from '@components/HeroBanner'
import Journey from '@components/Journey'
import ProductBanner from '@components/ProductBanner'
import SolutionsGrid from '@components/SolutionsGrid'
import Symptoms from '@components/Symptoms'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Symptoms />
      <SolutionsGrid />
      <ProductBanner />
      <Journey />
    </>
  )
}
