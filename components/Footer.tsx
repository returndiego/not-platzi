import { FaceBook, Instagram, Youtube, Twitter } from '../svg/SocialMediaIcons'
import { GitHub, IBM, Nextjs, Unity } from '../svg/Brands'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-lg pt-5 pb-9 space-y-10">
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <section className="text-center md:text-left space-y-3">
            <div className="grid justify-items-center">
              <svg
                className="w-20 h-20"
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
              <div>
                Nunc lobortis mattis aliquam faucibus purus in. Hendrerit
                gravida rutrum quisque non tellus orci ac auctor augue
              </div>
            </div>
            <div className="space-y-3">
              <p>mattis aliquam faucibus purus in</p>
              <div className="flex gap-3 place-content-around">
                <a
                  href="#"
                  className="flex items-center gap-2"
                  aria-label="Facebook"
                >
                  <FaceBook />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </section>

          <section className="grid gap-3 sm:place-content-center">
            <a href="#" className="border-l-2 border-red-600 pl-2">
              Lorem.
            </a>
            <a href="#" className="border-l-2 border-green-600 pl-2">
              Aliquet sagittis
            </a>
            <a href="#" className="border-l-2 border-blue-600 pl-2">
              Lorem, ipsum
            </a>
            <a href="#" className="border-l-2 border-yellow-600 pl-2">
              Ullamcorper eget
            </a>
            <a href="#" className="border-l-2 border-indigo-600 pl-2">
              Egestas diam
            </a>
            <a href="#" className="border-l-2 border-pink-600 pl-2">
              Morbi enim
            </a>
            <a href="#" className="border-l-2 border-purple-600 pl-2">
              Nunc consequat
            </a>
          </section>

          <section className="space-y-3">
            <p>Adipiscing elit duis tristique sollicitudin nibh</p>
            <figure className="flex place-content-center gap-10">
              <IBM />
              <Unity />
            </figure>
            <p>Adipiscing elit sollicitudin nibh</p>
            <figure className="flex place-content-center gap-10">
              <Nextjs />
              <GitHub />
            </figure>
          </section>
        </section>

        <section className="flex flex-wrap place-content-around gap-3 mx-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <form className="grid gap-2 sm:flex sm:gap-0">
            <input
              placeholder="consectetur adipisicing"
              className="px-3 py-1 rounded-md sm:rounded-r-none border-2 dark:border-gray-600 dark:bg-gray-900 transition focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
            />
            <button className="px-3 py-1 border-2 sm:rounded-l-none border-blue-700 bg-blue-700 rounded">
              consectetur
            </button>
          </form>
        </section>

        <section className="space-y-3 flex flex-col md:flex-row place-items-center gap-3 mx-auto">
          <section className="flex flex-wrap place-content-around gap-1 mx-auto">
            <a href="#">Nunc non</a>
            <a href="#">tortor</a>
            <a href="#">Lorem</a>
            <a href="#">Pism</a>
            <a href="#">faucibus</a>
            <a href="#">Tempus urna</a>
            <a href="#">Ipsuym</a>
            <a href="#">aliquam</a>
          </section>

          <section className="flex gap-3">
            <a
              href="#"
              className="px-3 py-1 bg-gray-900 border border-gray-500 rounded"
            >
              PT
            </a>
            <a
              href="#"
              className="px-3 py-1 bg-gray-900 border border-gray-500 rounded"
            >
              ES
            </a>
            <a
              href="#"
              className="px-3 py-1 bg-gray-900 border border-gray-500 rounded"
            >
              EN
            </a>
          </section>
          <section>
            <p>Id velit ut 💚 tortor pretium viverra</p>
          </section>
        </section>
      </div>
    </footer>
  )
}
