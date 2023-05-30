import { ReactNode } from 'react'

import { Nav, Footer } from './index'

type AppWrapperProps = {
  children: ReactNode
}

export default function AppWrapper(props: AppWrapperProps) {
  return (
    <>
      <header>
        <Nav/>
      </header>
      <main className='app__main' id='main'>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}

