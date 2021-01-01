import List from '../List'

export default function BulletPoints() {
  return (
    <section className="px-2 max-w-screen-lg mx-auto mt-10">
      <ul className="grid md:grid-cols-3 gap-3">
        <List array={group} />
      </ul>
    </section>
  )
}

const group = [
  {
    body: 'Vitae Risus nullam eget felis itae',
  },
  {
    body: 'Maecenas pharetra convallis posuere morbi',
  },
  {
    body:
      'Quisque non tellus orci ac auctor. Praesent tristique magna sit amet. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam pellentesque nec nam aliquam',
  },
]
