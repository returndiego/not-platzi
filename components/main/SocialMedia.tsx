import Link from 'next/link'
import {
  SiTiktok,
  SiSpotify,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiTwitter,
} from 'react-icons/si'

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

const SocialMediaIcons = [
  {
    svg: <SiFacebook className="w-7 h-7" />,
    username: 'example',
    link: 'https://facebook.com/example',
  },
  {
    svg: <SiTwitter className="w-7 h-7" />,
    username: 'example',
    link: 'https://twitter.com/example',
  },
  {
    svg: <SiYoutube className="w-7 h-7" />,
    username: 'example',
    link: 'https://youtube.com/example',
  },
  {
    svg: <SiLinkedin className="w-7 h-7" />,
    username: 'example',
    link: 'https://linkedin.com/example',
  },
  {
    svg: <SiInstagram className="w-7 h-7" />,
    username: 'example',
    link: 'https://instagram.com/example',
  },
  {
    svg: <SiSpotify className="w-7 h-7" />,
    username: 'example',
    link: 'https://spotify.com/example',
  },
  {
    svg: <SiTiktok className="w-7 h-7" />,
    username: 'example',
    link: 'https://tiktok.com/@example',
  },
]
