import List from '../List'
import Image from 'next/image'

export default function BulletPointsImages() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto mt-10 pb-5 md:py-5">
        <div className="grid md:grid-cols-2 gap-2">
          <Image
            className="md:rounded-lg md:overflow-hidden"
            objectFit="cover"
            src="/code.jpg"
            alt="code"
            width={1920}
            height={1920}
          />
          <section className="px-2">
            <ul className="space-y-3 py-5">
              <List array={group1} />
            </ul>

            <div className="mx-auto my-5 space-x-3">
              <button className="px-3 py-1 border-2 border-gray-500 text-white bg-black rounded-md">
                Google
              </button>
              <button className="px-3 py-1 border-2 border-gray-500 text-white bg-black rounded-md">
                Apple
              </button>
            </div>
          </section>
        </div>
        <form className="px-2 mt-5 space-y-4 max-w-lg">
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

const group1 = [
  {
    body: 'Vitae Risus nullam eget felis itae ',
  },
  {
    body: 'Maecenas pharetra convallis posuere morbi',
  },
  {
    body:
      'Quisque non tellus orci ac auctor. Praesent tristique magna sit amet. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
  },

  {
    body: 'Vitae Risus nullam eget felis itae',
  },
  {
    body:
      'Quisque non tellus orci ac auctor. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
  },
  {
    body: 'Maecenas pharetra convallis posuere morbi',
  },
]
