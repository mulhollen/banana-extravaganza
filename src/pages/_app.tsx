import '@/styles/globals.css'
import '@/styles/App.scss'
import type { AppProps } from 'next/app'
import { AppWrapper } from '@/components/shared-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
