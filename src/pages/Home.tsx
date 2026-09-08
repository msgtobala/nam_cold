import HeroBanner from '@components/HeroBanner'
import SolutionsGrid from '@components/SolutionsGrid'
import Symptoms from '@components/Symptoms'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Symptoms />
      <SolutionsGrid />
    </>
  )
}
