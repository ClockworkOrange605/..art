'use client'

import { useRef } from 'react'

import './index.css'

export default function Home() {
  const layoutRef = useRef<HTMLElement>(null)

  const pageRef1 = useRef<HTMLDivElement>(null)
  const pageRef2 = useRef<HTMLDivElement>(null)
  const pageRef3 = useRef<HTMLDivElement>(null)
  const pageRef4 = useRef<HTMLDivElement>(null)

  const scrollToFirstPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    pageRef1.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSecondPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    pageRef2.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToThirdPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    pageRef3.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFourthPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    pageRef4.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header>
        <button onClick={scrollToFirstPage}>First</button>
        <button onClick={scrollToSecondPage}>Second</button>
        <button onClick={scrollToThirdPage}>Third</button>
        <button onClick={scrollToFourthPage}>Fourth</button>
      </header>

      <main ref={layoutRef}>
        <div ref={pageRef1} className='Page bg-orange-500'>
          <div className='Content'></div>
        </div>

        <div ref={pageRef2} className='Page bg-[#000]'>
          <div className='Content'></div>
        </div>

        <div ref={pageRef3} className='Page bg-[#2cb]'>
          <div className='Content'></div>
        </div>

        <div ref={pageRef4} className='Page bg-[#]'>
          <div className='Content'></div>
        </div>
      </main>

      <footer></footer>
    </>
  )
}
