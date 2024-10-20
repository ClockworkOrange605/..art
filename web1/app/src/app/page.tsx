'use client'

import { useEffect, useRef } from 'react'

import { useTokensList } from '@/api/Tokens'

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
        <a className='Logo' href='/'>
          ..
        </a>

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

        <div ref={pageRef4} className='Page bg-[#999]'>
          <div className='Content'>
            <TokensList />
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  )
}

const TokensList = () => {
  const { data, error, isLoading } = useTokensList()

  useEffect(() => {
    console.log('length', data?.data.length)

    console.log(
      data?.data.map((token: any) =>
        token.events.map((event: any) => event.event)
      )
    )
  }, [data])

  return (
    <div className='TokenListContainer'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}

      {/* TODO: typization */}
      {!isLoading && !error && (
        <>
          {data?.data.map((item: any) => (
            <div className='TokenItem' key={item.id}>
              <div>
                {item.metadata.name}
                <a
                  href={item.metadata.external_url}
                  target='_blank'
                  rel='no-follow'
                >
                  🔗
                </a>
              </div>
              <img src={item.metadata.image} alt={item.metadata.name} />
            </div>
          ))}
        </>
      )}
    </div>
  )
}
