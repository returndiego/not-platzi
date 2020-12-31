import Chevron from '../svg/Chevron'

export default function BulletPointsCarrousel() {
  return (
    <section>
      <ul className="space-y-3">
        <li className="flex gap-1">
          <Chevron />
          <span>Vitae Risus nullam eget felis itae </span>
        </li>
        <li className="flex gap-1">
          <Chevron />
          <span>
            Quisque non tellus orci ac auctor. Sem viverra aliquet eget sit amet
            tellus cras adipiscing enim. Quam pellentesque nec nam aliquam
          </span>
        </li>
        <li className="flex gap-1">
          <Chevron />
          <span>Maecenas pharetra convallis posuere morbi</span>
        </li>
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
    </section>
  )
}
