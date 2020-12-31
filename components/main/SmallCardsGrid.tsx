import {
  HiTemplate,
  HiLightningBolt,
  HiCog,
  HiBadgeCheck,
  HiCurrencyDollar,
  HiGlobeAlt,
  HiTerminal,
  HiAtSymbol,
  HiColorSwatch,
  HiHashtag,
  HiLibrary,
  HiPuzzle,
} from 'react-icons/hi'
import Link from 'next/link'

export default function CardsGrid() {
  return (
    <section>
      <header>
        <h1 className="text-2xl text-center">
          Tempor id eu nisl nunc mi ipsum
        </h1>
      </header>
      <div className="grid auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4 text-gray-900 place-content-evenly">
        {CardIcons.map(({ link, svg, title, colors }, idx) => {
          return (
            <Link key={idx} href={link}>
              <a
                className={`flex items-center gap-3 px-2 py-2 ${colors} rounded-md`}
              >
                {svg}
                <div>
                  <p className="text-sm">ut faucibus pulvinar</p>
                  <p className="font-bold">{title}</p>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

const CardIcons = [
  {
    svg: <HiTemplate className="w-12 h-12" />,
    title: 'Voluptate velit',
    colors: 'bg-yellow-100 text-yellow-900',
    link: '/#',
  },
  {
    svg: <HiLightningBolt className="w-12 h-12" />,
    title: 'Dolor sit amet',
    colors: 'bg-green-100 text-green-900',
    link: '/#',
  },
  {
    svg: <HiCog className="w-12 h-12" />,
    title: 'Sagittis orci',
    colors: 'bg-blue-100 text-blue-900',
    link: '/#',
  },
  {
    svg: <HiBadgeCheck className="w-12 h-12" />,
    title: 'Ut enim ad minim',
    colors: 'bg-red-100 text-red-900',
    link: '/#',
  },
  {
    svg: <HiCurrencyDollar className="w-12 h-12" />,
    title: 'Cursus',
    colors: 'bg-indigo-100 text-indigo-900',
    link: '/#',
  },
  {
    svg: <HiGlobeAlt className="w-12 h-12" />,
    title: 'Sint occaecat',
    colors: 'bg-purple-100 text-purple-900',
    link: '/#',
  },
  {
    svg: <HiTerminal className="w-12 h-12" />,
    title: 'Praesent tristique',
    colors: 'bg-red-100 text-red-900',
    link: '/#',
  },
  {
    svg: <HiAtSymbol className="w-12 h-12" />,
    title: 'Maecenas pharetra',
    colors: 'bg-yellow-100 text-yellow-900',
    link: '/#',
  },
  {
    svg: <HiColorSwatch className="w-12 h-12" />,
    title: 'Vitae Risus',
    colors: 'bg-green-100 text-green-900',
    link: '/#',
  },
  {
    svg: <HiHashtag className="w-12 h-12" />,
    title: 'Cras adipiscing',
    colors: 'bg-purple-100 text-purple-900',
    link: '/#',
  },
  {
    svg: <HiLibrary className="w-12 h-12" />,
    title: 'Tempor id eu',
    colors: 'bg-blue-100 text-blue-900',
    link: '/#',
  },
  {
    svg: <HiPuzzle className="w-12 h-12" />,
    title: 'Sed vulputate',
    colors: 'bg-yellow-100 text-yellow-900',
    link: '/#',
  },
]
