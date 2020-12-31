import {
  HiCog,
  HiCurrencyDollar,
  HiGlobeAlt,
  HiAtSymbol,
  HiColorSwatch,
} from 'react-icons/hi'
import { HiCalendar } from 'react-icons/hi'
import Link from 'next/link'

export default function MediumCardGrid() {
  return (
    <section>
      <header>
        <h1 className="text-2xl text-center">Sed vulputate mi sit amet</h1>
      </header>
      <div className="mt-4 grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-900">
        {CardIcons.map(({ link, svg, title, buttonColor, textColor }, idx) => {
          return (
            <Link key={idx} href={link}>
              <a
                className={`flex items-center gap-3 px-2 py-4 bg-gray-900 ${textColor} rounded-md`}
              >
                {svg}
                <div className="space-y-2">
                  <p className="font-medium">{title}</p>
                  <p
                    className={`inline-block px-3 rounded font-bold ${buttonColor}`}
                  >
                    Risus nullam
                  </p>
                </div>
              </a>
            </Link>
          )
        })}

        <Link href="/#">
          <a className="flex items-center gap-3 px-2 py-2 bg-green-100 text-green-900 rounded-md">
            <HiCalendar className="w-14 h-14" />
            <div>
              <p className="font-bold">Cursus in as dplatea</p>
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}

const CardIcons = [
  {
    svg: <HiCog className="w-14 h-14" />,
    title: 'Maecenas pharetra',
    link: '/#',
    buttonColor: 'bg-blue-100 text-blue-900',
    textColor: 'text-blue-300',
  },
  {
    svg: <HiCurrencyDollar className="w-14 h-14" />,
    title: 'Quisque non tellus',
    link: '/#',
    buttonColor: 'bg-red-100 text-red-900',
    textColor: 'text-red-300',
  },
  {
    svg: <HiGlobeAlt className="w-14 h-14" />,
    title: 'Quam pellentesque',
    link: '/#',
    buttonColor: 'bg-green-100 text-green-900',
    textColor: 'text-green-300',
  },
  {
    svg: <HiAtSymbol className="w-14 h-14" />,
    title: 'Praesent tristique',
    link: '/#',
    buttonColor: 'bg-yellow-100 text-yellow-900',
    textColor: 'text-yellow-300',
  },
  {
    svg: <HiColorSwatch className="w-14 h-14" />,
    title: 'convallis posuere',
    link: '/#',
    buttonColor: 'bg-indigo-100 text-indigo-900',
    textColor: 'text-indigo-300',
  },
]
