import CardIcons from '../svg/CardIcons'
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
        {CardIcons.map(({ link, svg, title, color }, idx) => {
          return (
            <Link key={idx} href={`/${link}`}>
              <a
                className={`flex items-center gap-3 px-2 py-2 bg-${color}-100 text-${color}-900 rounded-md`}
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
