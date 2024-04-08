import type { AppProps } from 'next/app'

import { builder } from '@builder.io/react'
builder.init('41522f1b6cf543838120df677d7a6868')
// builder.init('271bdcf584e24ca896dede7a91dfb1cb')
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
