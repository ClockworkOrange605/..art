'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { TokensList } from '@/components/Market/Tokens/List'
import { TokenItem } from '@/components/Market/Tokens/Item'

import { ObjectID } from '@/shared/Types'

import './index.css'

export default function Home() {
  const layoutRef = useRef<HTMLElement>(null)

  const pageRef1 = useRef<HTMLDivElement>(null)
  const pageRef2 = useRef<HTMLDivElement>(null)
  const pageRef3 = useRef<HTMLDivElement>(null)
  const pageRef4 = useRef<HTMLDivElement>(null)
  const pageRef5 = useRef<HTMLDivElement>(null)

  const onResize = () =>
    pageRef3?.current?.scrollIntoView({ behavior: 'instant' })

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToFirstPage: React.MouseEventHandler<HTMLButtonElement> = () =>
    pageRef1.current?.scrollIntoView({ behavior: 'smooth' })

  const scrollToSecondPage: React.MouseEventHandler<HTMLButtonElement> = () =>
    pageRef2.current?.scrollIntoView({ behavior: 'smooth' })

  const scrollToThirdPage: React.MouseEventHandler<HTMLButtonElement> = () =>
    pageRef3.current?.scrollIntoView({ behavior: 'smooth' })

  const scrollToFourthPage: React.MouseEventHandler<HTMLButtonElement> = () =>
    pageRef4.current?.scrollIntoView({ behavior: 'smooth' })

  const scrollToFifthPage = () =>
    pageRef5.current?.scrollIntoView({ behavior: 'smooth' })

  // TODO: use global state manager
  const [tokenId, setTokenId] = useState<ObjectID>()
  const openToken = (tokenId: ObjectID) => {
    setTokenId(tokenId)
    scrollToFifthPage()
  }

  return (
    <>
      <header>
        <a className='Logo' href='/'>
          ..
        </a>

        <button onClick={scrollToFirstPage}>First</button>
        <button onClick={scrollToSecondPage}>Second</button>
        <button onClick={scrollToThirdPage}>Third</button>
        <button onClick={scrollToFourthPage}>Fourth</button>
        <button onClick={scrollToFifthPage}>Fifth</button>
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

        <div ref={pageRef4} className='Page bg-[#999]'>
          <div className='Content'>
            <TokensList openToken={openToken} />
          </div>
        </div>

        <div ref={pageRef5} className='Page bg-[#2cb]'>
          <div className='Content'>
            <TokenItem tokenId={tokenId} />
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  )
}
