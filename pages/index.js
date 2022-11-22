import { classNames, subComponent } from 'impulse-utils'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Card from '../components/card.js'
import { CSSTransition } from 'react-transition-group'

const colors = ['yellow', 'green', 'gray', 'red']

export default function Home() {
  const [move, setMove] = useState(false)
  const [index, setIndex] = useState(0)
  const node1Ref = useRef(null)
  const node2Ref = useRef(null)
  useEffect(() => {
    let timer
    if (move) {
      timer = setTimeout(() => {
        setMove(false)
        setIndex(index + 1)
      }, 300)
    }
    return () => clearTimeout(timer)
  }, [move])
  return (
    <div>
      <div className="overflow-y-hidden h-[100vh] w-[100vw]">
        <button type="button" className="z-50" onClick={() => setMove(true)}>
          Click me
        </button>
        <CSSTransition
          nodeRef={node1Ref}
          in={move}
          timeout={300}
          classNames="my-node"
        >
          <div
            ref={node1Ref}
            className="h-[100vh] w-full space-y-2 p-8 flex items-center justify-center"
          >
            <Card
              style={{
                backgroundColor: colors[index],
              }}
            />
          </div>
        </CSSTransition>
        <CSSTransition
          nodeRef={node2Ref}
          in={move}
          timeout={300}
          classNames="my-node"
        >
          <div
            ref={node2Ref}
            className="h-[100vh] w-full space-y-2 p-8 flex items-center justify-center"
          >
            <Card
              style={{
                backgroundColor: colors[index + 1],
              }}
            />
          </div>
        </CSSTransition>
        {/* <Transition
        show={move}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="h-[100vh] w-full space-y-2 p-8 flex items-center justify-center translate-y-full">
          <Card className="bg-green-300" />
        </div>
      </Transition> */}
      </div>
    </div>
  )
}
