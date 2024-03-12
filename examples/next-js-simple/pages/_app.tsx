import type { AppProps } from 'next/app'

import { builder } from '@builder.io/react'
builder.init('e7fb3d1e4da14573bd2a1edb7bfee5f1')
// builder.init('271bdcf584e24ca896dede7a91dfb1cb')
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
