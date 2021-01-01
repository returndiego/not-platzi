import { HiChevronRight } from 'react-icons/hi'

export default function List({
  array,
}: {
  array: { header?: string; body: string }[]
}) {
  return (
    <>
      {array.map(({ body, header }, idx) => (
        <li className="flex" key={idx}>
          <HiChevronRight className="h-7 w-7 text-green-400 flex-none" />
          <div>
            {header && <h1 className="text-2xl font-bold">{header}</h1>}
            <p className="text-lg">{body}</p>
          </div>
        </li>
      ))}
    </>
  )
}
