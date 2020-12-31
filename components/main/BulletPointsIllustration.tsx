import { HiChevronRight } from 'react-icons/hi'

export default function BulletPointsIllustration() {
  return (
    <section className="space-y-4">
      <article className="grid md:grid-cols-2 gap-3">
        <div className="w-full h-full bg-green-700">Photo</div>
        <ul className="space-y-3">
          <li className="flex gap-1">
            <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
            <div>
              <h1 className="text-lg bold">
                Sagittis orci a scelerisque purus semper
              </h1>
              <span>Vitae Risus nullam eget felis itae </span>
            </div>
          </li>
          <li className="flex gap-1">
            <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
            <div>
              <h1 className="text-lg bold">
                Sagittis orci a scelerisque purus semper
              </h1>
              <span>Vitae Risus nullam eget felis itae </span>
            </div>
          </li>
        </ul>
      </article>
      <article className="grid md:grid-cols-2 gap-3">
        <div className="w-full h-full bg-green-700">Photo</div>
        <ul className="space-y-3">
          <li className="flex gap-1">
            <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
            <div>
              <h1 className="text-lg bold">
                Sagittis orci a scelerisque purus semper
              </h1>
              <span>Vitae Risus nullam eget felis itae </span>
            </div>
          </li>
          <li className="flex gap-1">
            <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
            <div>
              <h1 className="text-lg bold">
                Sagittis orci a scelerisque purus semper
              </h1>
              <span>Vitae Risus nullam eget felis itae </span>
            </div>
          </li>
        </ul>
      </article>
    </section>
  )
}
