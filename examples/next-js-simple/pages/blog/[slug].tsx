import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { BuilderComponent, builder, useIsPreviewing, BuilderContent } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import * as fs from 'fs';
import { RouteMatcher } from 'next/dist/server/future/route-matchers/route-matcher'

// builder.init(builderConfig.apiKey)
builder.init('271bdcf584e24ca896dede7a91dfb1cb');

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {

  const articleData =
    (await builder
      .get('article', {
        query: {
          'data.slug': params?.slug
        },
        options: {
          enrich: true
        }
      }).toPromise()) || null

      const articleTemplate = 
      (await builder
        .get('blog-template', {
          options: {
            enrich: true
          }
        }).toPromise()) || null

  return {
    props: {
      articleData,
      articleTemplate
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const articles = await builder.getAll('article', {
    options: { noTargeting: true, enrich: true },
    omit: 'data.blocks',
  })

  return {
    paths: [], //articles.map((article) => `/blog/${article.data?.slug}`),
    fallback: true
  }
}

export default function Page({
  articleData,
  articleTemplate
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !articleData && !isPreviewingInBuilder
  // console.log('hello article: ',articleData?.data)
  // // console.log('hello template: ', articleTemplate);
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!articleData && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <>
          <BuilderContent model="article" content={articleData}>
            {(article, loading, content) => {
              console.log('here is the stuff:', article)
            return(<>
              <BuilderComponent model="blog-template" content={articleTemplate} data={{article}} options={{ enrich: true }}/>
            </>)
          }}
          </BuilderContent>
        </>
      )}
    </>
  )
}