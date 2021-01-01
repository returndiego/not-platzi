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
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="px-2 py-5 max-w-screen-2xl mx-auto mt-10">
        <p className="text-lg text-center">
          Pretium lectus quam id leo in vitae.
        </p>
        <article className="flex flex-wrap place-content-around mt-5 gap-5">
          <SiGithub className="w-10 h-10" />
          <SiNextDotJs className="w-10 h-10" />
          <SiYarn className="w-10 h-10" />
          <SiVisualstudiocode className="w-10 h-10" />
          <SiBrave className="w-10 h-10" />
          <SiSpotify className="w-10 h-10" />
          <SiTailwindcss className="w-10 h-10" />
          <SiTelegram className="w-10 h-10" />
        </article>
      </div>
    </section>
  )
}
