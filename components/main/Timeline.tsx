// import Brands from '../svg/Brands'

export default function Timeline() {
  return (
    <section className="grid">
      <div className="mx-auto grid md:grid-cols-5 gap-3 md:gap-0 border-l-4 md:border-none pl-4 md:pl-0">
        {/* {Brands.map((arr, index) => {
          arr.map(({ year, svg, sentence }, idx) => {
            return (
              <article key={idx} className="space-y-2">
                <h1 className="relative md:block">
                  <div className="md:hidden absolute bg-white w-4 h-1 -left-5 top-2"></div>
                  <span className="md:hidden">{year}</span>
                  <span className="hidden md:flex justify-center items-center h-10 text-center text-xl font-bold bg-gray-900">
                    {year}
                  </span>
                </h1>
                {svg}
                <p className="mr-4">{sentence}</p>
              </article>
            )
          })
        })} */}
      </div>
    </section>
  )
}
