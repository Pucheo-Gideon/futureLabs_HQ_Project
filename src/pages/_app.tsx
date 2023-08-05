import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
  // <main  className={nunito_Sans.className}>
  // </main>
}
