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
    <section className="sm:px-2 max-w-screen-lg mx-auto mt-10">
      <header>
        <h1 className="text-2xl text-center">
          Tempor id eu nisl nunc mi ipsum
        </h1>
      </header>
      <div className="grid auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4 place-content-evenly">
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
    colors:
      'border-2 border-yellow-700 dark:border-yellow-500 bg-yellow-100 dark:bg-transparent text-yellow-900 dark:text-yellow-200',
    link: '/#',
  },
  {
    svg: <HiLightningBolt className="w-12 h-12" />,
    title: 'Dolor sit amet',
    colors:
      'border-2 border-green-700 dark:border-green-500 bg-green-100 dark:bg-transparent text-green-900 dark:text-green-200',
    link: '/#',
  },
  {
    svg: <HiCog className="w-12 h-12" />,
    title: 'Sagittis orci',
    colors:
      'border-2 border-blue-700 dark:border-blue-500 bg-blue-100 dark:bg-transparent text-blue-900 dark:text-blue-200',
    link: '/#',
  },
  {
    svg: <HiBadgeCheck className="w-12 h-12" />,
    title: 'Ut enim ad minim',
    colors:
      'border-2 border-red-700 dark:border-red-500 bg-red-100 dark:bg-transparent text-red-900 dark:text-red-200',
    link: '/#',
  },
  {
    svg: <HiCurrencyDollar className="w-12 h-12" />,
    title: 'Cursus',
    colors:
      'border-2 border-indigo-700 dark:border-indigo-500 bg-indigo-100 dark:bg-transparent text-indigo-900 dark:text-indigo-200',
    link: '/#',
  },
  {
    svg: <HiGlobeAlt className="w-12 h-12" />,
    title: 'Sint occaecat',
    colors:
      'border-2 border-purple-700 dark:border-purple-500 bg-purple-100 dark:bg-transparent text-purple-900 dark:text-purple-200',
    link: '/#',
  },
  {
    svg: <HiTerminal className="w-12 h-12" />,
    title: 'Praesent tristique',
    colors:
      'border-2 border-red-700 dark:border-red-500 bg-red-100 dark:bg-transparent text-red-900 dark:text-red-200',
    link: '/#',
  },
  {
    svg: <HiAtSymbol className="w-12 h-12" />,
    title: 'Maecenas pharetra',
    colors:
      'border-2 border-yellow-700 dark:border-yellow-500 bg-yellow-100 dark:bg-transparent text-yellow-900 dark:text-yellow-200',
    link: '/#',
  },
  {
    svg: <HiColorSwatch className="w-12 h-12" />,
    title: 'Vitae Risus',
    colors:
      'border-2 border-green-700 dark:border-green-500 bg-green-100 dark:bg-transparent text-green-900 dark:text-green-200',
    link: '/#',
  },
  {
    svg: <HiHashtag className="w-12 h-12" />,
    title: 'Cras adipiscing',
    colors:
      'border-2 border-purple-700 dark:border-purple-500 bg-purple-100 dark:bg-transparent text-purple-900 dark:text-purple-200',
    link: '/#',
  },
  {
    svg: <HiLibrary className="w-12 h-12" />,
    title: 'Tempor id eu',
    colors:
      'border-2 border-blue-700 dark:border-blue-500 bg-blue-100 dark:bg-transparent text-blue-900 dark:text-blue-200',
    link: '/#',
  },
  {
    svg: <HiPuzzle className="w-12 h-12" />,
    title: 'Sed vulputate',
    colors:
      'border-2 border-yellow-700 dark:border-yellow-500 bg-yellow-100 dark:bg-transparent text-yellow-900 dark:text-yellow-200',
    link: '/#',
  },
]
