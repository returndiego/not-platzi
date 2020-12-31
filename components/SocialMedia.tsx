import Link from 'next/link'
import SocialMediaIcons from '../svg/SocialMediaIcons'

export default function SocialMedia() {
  return (
    <section className="space-y-4 py-5">
      <header>
        <h1 className="text-2xl font-bold">
          Id velit ut tortor pretium potenti.
        </h1>
      </header>
      <div className="px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-2 place-content-center">
        {SocialMediaIcons.map(({ svg, username, link }, idx) => {
          return (
            <Link key={idx} href={link}>
              <a className="flex items-center gap-2">
                {svg}
                <span>@{username}</span>
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
