import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AngelProvider } from 'angel_ui'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AngelProvider>
      <Component {...pageProps} />
    </AngelProvider>
  )
}

export default MyApp
