import Link from 'next/link'
import SocialMediaIcons from '../../svg/SocialMediaIcons'

export default function SocialMedia() {
  return (
    <section className="px-2 max-w-screen-lg mx-auto mt-10">
      <header>
        <h1 className="text-2xl font-bold">
          Id velit ut tortor pretium potenti.
        </h1>
      </header>
      <div className="mt-5 px-5 grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
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
