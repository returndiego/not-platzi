import Hero from './Hero'
import CompanyLogos from './CompanyLogos'
import SmallCardsGrid from './SmallCardsGrid'
import BulletPoints from './BulletPoints'
import MediumCardGrid from './MediumCardGrid'
import BulletPointsImages from './BulletPointsImages'
import BulletPointsIllustration from './BulletPointsIllustration'
import BulletPointsCarrousel from './BulletPointsCarrousel'
// import Timeline from './Timeline'
import SocialMedia from './SocialMedia'

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
      {/* <Timeline /> */}
      <SocialMedia />
    </main>
  )
}
