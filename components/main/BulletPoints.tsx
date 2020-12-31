import { HiChevronRight } from 'react-icons/hi'

export default function BulletPoints() {
  return (
    <section>
      <ul className="grid md:grid-cols-3 gap-3">
        <li className="flex gap-1">
          <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
          <span>Vitae Risus nullam eget felis itae </span>
        </li>
        <li className="flex gap-1">
          <span>Maecenas pharetra convallis posuere morbi</span>
        </li>
        <li className="flex gap-1">
          <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
          <span>
            Quisque non tellus orci ac auctor. Praesent tristique magna sit
            amet. Sem viverra aliquet eget sit amet tellus cras adipiscing enim.
            Quam pellentesque nec nam aliquam
          </span>
        </li>
      </ul>
      <footer className="w-40 h-1 bg-blue-400 mx-auto mt-9"></footer>
    </section>
  )
}
