import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { BuilderComponent, builder, useIsPreviewing, BuilderContent } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import '../../builder-registry'

builder.init('271bdcf584e24ca896dede7a91dfb1cb');

let locale="en-US";

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {

  const articleData =
    (await builder
      .get('article', {
        query: {
          'data.slug': params?.slug
        },
        locale,
        options: {
          enrich: true
        }
      }).toPromise()) || null

      const articleTemplate = 
      (await builder
        .get('blog-template', {
          userAttributes: {
            urlPath: `/blog/${params?.slug}`
          },
          options: {
            enrich: true
          },
          locale,
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
    options: { noTargeting: true },
    fields: 'data.slug',
  })

  return {
    paths: articles.map((article: any) => `/blog/${article.data?.slug}`),
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
  const useDataVisualPreview = (isPreviewingInBuilder && builder?.editingModel === "article");
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
        useDataVisualPreview ? (
            <BuilderContent model="article" content={articleData}>
              {(article, loading, content) => { 
                return(<> 
                  <BuilderComponent model="blog-template" locale={locale} content={articleTemplate} data={{article}} />
                </>)
              }} 
            </BuilderContent> 
        ) : (
          <BuilderComponent model="blog-template" locale={locale} content={articleTemplate} data={{article: articleData?.data}} />
        )
      )}
    </>
  )
}