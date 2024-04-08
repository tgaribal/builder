import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, builder, useIsPreviewing, withChildren, BuilderContent, Builder, Image } from '@builder.io/react'
import { getAsyncProps } from '@builder.io/utils';
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
import * as fs from 'fs';
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import '@components/hero/Hero'
import "@components/KnowdeButton/KnowdeButton"
import "@components/Slider/Slider"
import "@components/AsyncComp/AsycnComp"
import "@components/ProductBox/ProductBox"
import "@components/abTestComp/AbTestComp";

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  console.log("ALL PARAMS: ", params?.page)

  const locale = 'Default';
  const page =
    (await builder
      .get("pdp", {
      userAttributes: {
          urlPath: '/',
        },
      options: {
        enrich: true,
      }
      }).toPromise()) || null

      console.log("PAGE: ", page)

  return {
    props: {
      page,
      locale
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}
export async function getStaticPaths() {
  const pages = await builder.getAll('pdp', {
    options: { noTargeting: true },
    fields: 'data.url',
  })
  // const paths = pages.map((page) => `${page.data?.url}`);
  // console.log('PATHS: ', paths)
  return {
    paths: [], //pages.map((page) => `{${page.data?.url}}`),
    fallback: true,
  }
}

export default function Page({
  page,
  locale
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !page && !isPreviewingInBuilder
  // const fetch = require("node-fetch");
  // const fs = require('fs');
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
    console.log('client page: ', page)
  const addToCart = () => {
    alert('ITEM ADDED');
  }
  const handleClick = () => {
    console.log('hello')
    builder.track('my-custom-event');
    builder.trackConversion(99);
    builder.track('some-other-event', { meta: { productId: 'abc123', somethingElse: true }})
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <>
      <BuilderContent model="pdp">
        {(data, loading, content) => {
            return(<BuilderComponent 
              model="pdp" 
              locale={locale} 
              content={content}
              // context={{baseUrl: 'http://localhost', addToCart}}
              // options={{enrich: true}}
              // contentLoaded={(data, something) => {
              //   console.log('PAGE in loaded: ', something)
              // }}
              // data={{user: 'tim', loggedIn: true}} />
              />)
}}</BuilderContent>
      </>
      )}
    </>
  )
}
