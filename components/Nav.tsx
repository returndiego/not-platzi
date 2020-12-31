import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900">
      <div className="h-12 px-4 mx-auto max-w-screen-lg flex justify-between items-center">
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <section className="flex items-center gap-3">
          <article className="block md:hidden">Dropdown</article>
          <article className="hidden md:flex gap-3">
            <Link href="/#">
              <a>minim</a>
            </Link>
            <Link href="/#">
              <a>cillum</a>
            </Link>
            <Link href="/#">
              <a>consectetur</a>
            </Link>
            <Link href="/#">
              <a>Excepteur</a>
            </Link>
            <Link href="/#">
              <a>occaecat</a>
            </Link>
            <Link href="/#">
              <a>enim</a>
            </Link>
          </article>
          <Link href="/#">
            <a className="py-1 px-3 bg-green-400 text-black rounded font-bold">
              Login
            </a>
          </Link>
          <article className="self-center">Menu</article>
        </section>
      </div>
    </nav>
  )
}
