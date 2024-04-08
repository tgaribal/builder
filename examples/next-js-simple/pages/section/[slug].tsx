import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { BuilderComponent, builder, useIsPreviewing, BuilderContent } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import { HeroWithChildren } from '@components/hero/Hero'


export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {

  const articleData =
    (await builder
      .get('post', {
        query: {
            'data.slug': params?.slug
        },
        enrich: true,
      }).toPromise()) || null

    console.log('hello article: ',articleData);

  return {
    props: {
      articleData
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const articles = await builder.getAll('post', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  })

  return {
    paths: articles.map((article) => `/section/${article.data?.slug}`),
    fallback: true
  }
}

export default function Page({
  articleData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !articleData && !isPreviewingInBuilder
  console.log('hello article: ',articleData?.data);

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

            <BuilderContent model="post" options={{includeRefs: true}}>
                {(data, loading, fullContent) => {
                    console.log('DATA: ', data)
                    /*use your data here within your custom component*/
                    return (
                    <>
                        <h1>{data?.header}</h1>
                        <div>By: {data?.author?.value?.data?.name}</div>
                        <BuilderComponent content={articleData} model="post" />
                    </>
                    );
                }}
            </BuilderContent>
          
            {/* <BuilderComponent model="section-model-blog" content={articleData} /> */}
        </>
      )}
    </>
  )
}
