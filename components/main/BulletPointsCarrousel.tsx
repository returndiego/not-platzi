import List from '../List'

export default function BulletPointsCarrousel() {
  return (
    <section className="px-2 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto mt-10 py-5">
        <ul className="space-y-3">
          <List array={group} />
        </ul>

        <form className="mt-5 space-y-4 max-w-lg">
          <label className="font-medium">
            nisi ut aliquip ex ea commodo
            <input
              name="email"
              placeholder="ex ea commodo"
              className="mt-1 px-3 py-1 w-full rounded-md border-2 dark:border-gray-600 dark:bg-gray-900 transition focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
            />
          </label>
          <button className="px-3 py-1 w-full rounded font-bold bg-blue-600 text-white dark:bg-blue-600 transition focus:outline-none hover:bg-blue-700 focus:bg-blue-700 hover:shadow-md focus:shadow-md focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-200">
            Lorem
          </button>
        </form>
      </div>
    </section>
  )
}

const group = [
  {
    body: 'Vitae Risus nullam eget felis itae ',
  },
  {
    body:
      'Quisque non tellus orci ac auctor. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
  },
  {
    body: 'Maecenas pharetra convallis posuere morbi',
  },
]
