import {
  SiGithub,
  SiNextDotJs,
  SiYarn,
  SiVisualstudiocode,
  SiBrave,
  SiSpotify,
  SiTailwindcss,
  SiTelegram,
} from 'react-icons/si'

export default function CompanyLogos() {
  return (
    <section>
      <p className="text-center">Pretium lectus quam id leo in vitae.</p>
      <article className="flex flex-wrap place-content-around my-5 gap-5">
        <SiGithub className="w-8 h-8" />
        <SiNextDotJs className="w-8 h-8" />
        <SiYarn className="w-8 h-8" />
        <SiVisualstudiocode className="w-8 h-8" />
        <SiBrave className="w-8 h-8" />
        <SiSpotify className="w-8 h-8" />
        <SiTailwindcss className="w-8 h-8" />
        <SiTelegram className="w-8 h-8" />
      </article>
      <footer className="w-40 h-1 bg-blue-400 mx-auto"></footer>
    </section>
  )
}
