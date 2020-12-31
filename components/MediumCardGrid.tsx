import CardIcons from '../svg/CardIcons'
import Calendar from '../svg/Calendar'
import Link from 'next/link'

export default function MediumCardGrid() {
  return (
    <section>
      <header>
        <h1 className="text-2xl text-center">Sed vulputate mi sit amet</h1>
      </header>
      <div className="mt-4 grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-900">
        {CardIcons.map(({ link, svg, title, color }, idx) => {
          return (
            // Only return a subset of all icons
            idx < 5 && (
              <Link key={idx} href={`/${link}`}>
                <a
                  className={`flex items-center gap-3 px-2 py-4 bg-gray-900 text-${color}-300 rounded-md`}
                >
                  {svg}
                  <div className="space-y-2">
                    <p className="font-medium">{title}</p>
                    <p
                      className={`inline-block px-3 rounded font-bold bg-${color}-100 text-${color}-900`}
                    >
                      Risus nullam
                    </p>
                  </div>
                </a>
              </Link>
            )
          )
        })}

        <a
          href="#"
          className="flex items-center gap-3 px-2 py-2 bg-blue-100 text-blue-900 rounded-md"
        >
          <Calendar />
          <div>
            <p className="font-bold">Cursus in as dplatea</p>
          </div>
        </a>
      </div>
    </section>
  )
}
