import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { BuilderComponent, builder, useIsPreviewing, BuilderContent } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import Easteregg from 'pages/preview/easteregg'

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {

  const easteregg =
    (await builder
      .get('easteregg', {
        userAttributes: {
            productHandle: params?.slug,
            category: 'about'
        }
      }).toPromise()) || null


  return {
    props: {
        easteregg
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const articles = await builder.getAll('product', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  })

  return {
    paths: articles.map((article) => `/products/${article.data?.slug}`),
    fallback: true
  }
}

export default function Page({
  easteregg
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !easteregg && !isPreviewingInBuilder
  console.log('hello article: ',easteregg?.data);

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!easteregg && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <>  
            <h1>This is a product</h1>
            <div>this is the content</div>
            <BuilderComponent content={easteregg} model="easteregg" />
            <div>this is footer</div>
        </>
      )}
    </>
  )
}
