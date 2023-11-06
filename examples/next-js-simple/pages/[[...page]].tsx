import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, builder, useIsPreviewing, withChildren, BuilderContent, Builder, Image } from '@builder.io/react'
import { getAsyncProps } from '@builder.io/utils';
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import '@components/hero/Hero'
import "@components/KnowdeButton/KnowdeButton"
import "@components/Slider/Slider"
import "@components/AsyncComp/AsycnComp"


const retailerData = { name: 'retailer one', token: 100} //getRetailerToken()
// builder.apiVersion = 'v1';

Builder.registerComponent(
  (props: any) => {
    if (!props.cloudinaryOptions) {
      return 'Choose an Image'
    }
    return (
      <img
        src={props.cloudinaryOptions.url}
        width={props.cloudinaryOptions.width}
        height={props.cloudinaryOptions.height}
      />
    )
  },
  {
    name: 'CloudinaryImage',
    image:
      'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png',
    inputs: [{ 
      name: 'cloudinaryOptions', 
      type: 'cloudinaryImageEditor' 
    }],
  }
)
export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  console.log("ALL PARAMS: ", params?.page)
  const locale = 'en';

  const page =
    (await builder
      .get("page", {
      userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || ''),
          // locale
        },
      // locale,
      enrich: true
      }).toPromise()) || null
      // console.log('PAGE SERVER: ', page)
    // const authors = 
    // console.log('AUTHORS: ', authors);
    // await getAsyncProps(page, {
    //   async AsyncComp(props) {
    //     let user = await builder.getAll('author', {limit: 3, fields: 'data.name'}) || null;
    //     return {
    //       user 
    //     };
    //   },
    // });

    console.log('SERVER: ', page)
    // console.log('something: ', something)
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
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    fields: 'data.url,id',
    limit: 100
  })
  let paths = pages.map((page) => {
    // console.log('URL: ', page?.data?.url, page)
    // if (!page?.data?.url) {
    //   console.log('ID: ', page?.id)
    //   return '/'
    // }
    let url = `${page?.data?.url}`;
    return url;
  })
  // console.log('PATHS: ', paths)

  return {
    paths,
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

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
    // console.log('client page: ', page)
  const handleClick = () => {
    console.log('hello')
    builder.track('my-custom-event');
    builder.trackConversion(99);
    builder.track('some-other-event', { meta: { productId: 'abc123', somethingElse: true }})
  }
  //   const updateFooter = async(url = 'https://builder.io/api/v1/write/footer/badee73ef0534a8b99c64aa494b54f33') => {
  //       const data = {
  //         data: {
  //           boolean: true
  //         }
  //       };
  //       const response = await fetch(url, {
  //           method: 'PATCH',
  //           headers: {
  //               Authorization: 'Bearer bpk-33b7b99357794f8ba2b843c61f2cf45e'
  //           },
  //           body: JSON.stringify(data)
  //       }); 
  //       console.log('RESPONSE: ', response);
  //       return response.json();
  //   }
  //   const writeContent = (e: any) => {
  //     console.log('click', e)
  //     updateFooter();
  // }  
console.log('PAGE', page)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!page && <meta name="robots" content="noindex" />}
        <title>{page?.data?.title}</title>
        {page?.data?.scripts}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
            <BuilderComponent 
              model="page" 
              locale={locale} 
              content={page}
              data={{retailerData}} />
      
      )}
    </>
  )
}
