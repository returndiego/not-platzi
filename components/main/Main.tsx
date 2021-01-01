import Hero from './Hero'
import CompanyLogos from './CompanyLogos'
import SmallCardsGrid from './SmallCardsGrid'
import BulletPoints from './BulletPoints'
import MediumCardGrid from './MediumCardGrid'
import BulletPointsImages from './BulletPointsImages'
import BulletPointsIllustration from './BulletPointsIllustration'
import BulletPointsCarrousel from './BulletPointsCarrousel'
import SocialMedia from './SocialMedia'
// import Timeline from './Timeline'

export default function Main() {
  return (
    <main>
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
