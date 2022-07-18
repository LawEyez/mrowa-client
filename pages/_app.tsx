import type { AppProps } from 'next/app'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

import '../styles/globals.css'

// Create progress bar.
const progress = new ProgressBar({
  size: 1,
  color: '#fff',
  className: 'z-[1000]',
  delay: 100
})

// Listen for route change events.
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
