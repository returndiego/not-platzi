import List from '../List'
import Image from 'next/image'

export default function BulletPointsIllustration() {
  return (
    <section className="max-w-screen-lg mx-auto md:mt-10">
      <article className="grid md:grid-cols-2 place-items-center gap-10">
        <Image
          className="md:rounded-lg md:overflow-hidden"
          objectFit="cover"
          src="/nature3.jpg"
          alt="desierto"
          width={1080}
          height={1080}
        />
        <ul className="space-y-3 px-5 pt-5">
          <List array={group1} />
        </ul>
      </article>
      <article className="grid md:grid-cols-2 place-items-center gap-10 mt-10">
        <ul className="hidden md:block space-y-3 px-5 pt-5">
          <List array={group2} />
        </ul>
        <Image
          className="md:rounded-lg md:overflow-hidden"
          objectFit="cover"
          src="/nature2.jpg"
          alt="clouds"
          width={1080}
          height={1080}
        />
        <ul className="md:hidden space-y-3 px-5 pt-5">
          <List array={group2} />
        </ul>
      </article>
    </section>
  )
}

const group1 = [
  {
    header: 'Sagittis orci a scelerisque purus semper',
    body:
      'Vitae Risus nullam eget felis itae Vitae Risus nullam eget felis itae Vitae Risus nullam eget felis itae',
  },
  {
    header: 'Scelerisque purus semper',
    body:
      'Vitae Risus nullam eget felis itae Vitae Risus nullam eget felis itae Vitae Risus nullam eget felis itae',
  },
]

const group2 = [
  {
    header: 'Sagittis orci a scelerisque purus semper',
    body: 'Vitae Risus null Risus nullam eget felis itae',
  },
  {
    header: 'Risus nullam eget felis',
    body:
      'Quisque non tellus orci ac auctor. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
  },
]
