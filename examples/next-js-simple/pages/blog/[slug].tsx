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
// builder.init('dfd7048cf175429cb138b8ae9a1d66e9');

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
        },
        enrich: true
      }).toPromise()) || null

      const articleTemplate = 
      (await builder
        .get('blog-template', {
            userAttributes: {
              articleType: articleData?.data?.category
            },
            options: {
              enrich: true
            }
        }).toPromise()) || null
        
    console.log('hello article: ',articleData)
    // console.log('hello template: ', articleTemplate);

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
  // console.log('GET STATIC PATHS')
  const articles = await builder.getAll('article', {
    options: { noTargeting: true, enrich: true }
    // omit: 'data.blocks',
  })
  // articles.forEach(article => {
  //   console.log('hello')
  //   console.log('FOR EACH ARTICLE: ', article?.data?.author )
  // })
  // console.log('ARTICLES: ', articles)

  return {
    paths: articles.map((article) => `/blog/${article.data?.slug}`),
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
  console.log('hello article: ',articleData?.data)
  // console.log('hello template: ', articleTemplate);
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
          {/* <BuilderComponent model="blog-template" content={articleTemplate} options={{enrich: true}} data={{article: articleData?.data}}/> */}
          <BuilderContent model="article" content={articleData} options={{query: {'data.slug': router.query.slug}}}>
            {(article, loading, content) => {
              console.log('here is the stuff:', articleData.data.headline, article.headline)
            return(<>
              <BuilderComponent model="blog-template" content={articleTemplate} />
            </>)
          }}

          </BuilderContent>
        </>
      )}
    </>
  )
}
