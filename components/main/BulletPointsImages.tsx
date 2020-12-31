import { HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'

export default function BulletPointsImages() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-2">
        <Image
          objectFit="cover"
          layout="responsive"
          src="/code.jpg"
          alt="Picture of the author"
          width={1920}
          height={1275}
        />
        <section>
          <ul className="space-y-3">
            {group1.map((sentence, idx) => (
              <li key={idx} className="flex gap-1">
                <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
                <span>{sentence}</span>
              </li>
            ))}
          </ul>

          <div className="my-5 space-x-3">
            <button className="px-3 py-1 border-2 border-gray-500 bg-black rounded-md">
              Google
            </button>
            <button className="px-3 py-1 border-2 border-gray-500 bg-black rounded-md">
              Apple
            </button>
          </div>

          <ul className="space-y-3">
            {group2.map((sentence, idx) => (
              <li key={idx} className="flex gap-1">
                <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
                <span>{sentence}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
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

const group1 = [
  'Vitae Risus nullam eget felis itae ',
  'Maecenas pharetra convallis posuere morbi',
  'Quisque non tellus orci ac auctor. Praesent tristique magna sit amet. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
]

const group2 = [
  'Vitae Risus nullam eget felis itae',
  'Quisque non tellus orci ac auctor. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
  'Maecenas pharetra convallis posuere morbi',
]
