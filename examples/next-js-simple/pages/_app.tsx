import type { AppProps } from 'next/app'

import { builder } from '@builder.io/react'
builder.init('271bdcf584e24ca896dede7a91dfb1cb')
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)
// console.log()
console.log('KEY: ', process.env.BUILDER_PUBLIC_KEY!)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
