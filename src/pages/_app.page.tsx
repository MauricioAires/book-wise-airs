import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'
import { globalStyles } from '@/styles/global'

const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
