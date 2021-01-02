import Image from 'next/image'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 px-2 max-w-screen-lg mx-auto mt-5">
      <div>
        <header>
          <h1 className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <ul className="space-y-2 mt-5">
            <li>Ut enim ad minim veniam, quis nostrud</li>
            <li>voluptate velit esse cillum dolore eu fugiat</li>
          </ul>
        </header>
        <form className="mt-5 space-y-4 max-w-sm">
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
          <footer className="text-sm">
            Excepteur sint occaecat
            <span className="text-blue-900 dark:text-blue-300">
              {' '}
              cupidatat non proident
            </span>
            , sunt in culpa qui officia deserunt
          </footer>
        </form>
      </div>
      <div className="hidden md:block">
        <Image
          className="md:rounded-lg md:overflow-hidden"
          priority
          objectFit="cover"
          src="/nature1.jpg"
          alt="Picture of the author"
          width={1280}
          height={780}
        />
      </div>
    </section>
  )
}
