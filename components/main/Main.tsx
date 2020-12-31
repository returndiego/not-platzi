import Hero from './Hero'
import CompanyLogos from './CompanyLogos'
import SmallCardsGrid from './SmallCardsGrid'
import BulletPoints from './BulletPoints'
import dynamic from 'next/dynamic'

const MediumCardGrid = dynamic(() => import('./MediumCardGrid'))
const BulletPointsImages = dynamic(() => import('./BulletPointsImages'))
const BulletPointsIllustration = dynamic(
  () => import('./BulletPointsIllustration')
)
const BulletPointsCarrousel = dynamic(() => import('./BulletPointsCarrousel'))
const SocialMedia = dynamic(() => import('./SocialMedia'))

// import Timeline from './Timeline'

export default function Main() {
  return (
    <main className="px-2 md:px-4 max-w-screen-lg mx-auto space-y-10">
      <Hero />
      <CompanyLogos />
      <SmallCardsGrid />
      <BulletPoints />
      <MediumCardGrid />
      <BulletPointsImages />
      <BulletPointsIllustration />
      <BulletPointsCarrousel />
      <SocialMedia />
      {/* <Timeline /> */}
    </main>
  )
}
