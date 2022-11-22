import { classNames } from 'impulse-utils'

export default function Card(props) {
  return (
    <div
      className={classNames(
        'rounded-sm shadow-md p-3 h-[80vh] w-full',
        props.className
      )}
      style={props.style}
    >
      test
    </div>
  )
}
