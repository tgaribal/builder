import { useRouter } from 'next/router'
import { builder, useIsPreviewing, BuilderContent } from '@builder.io/react'

export async function getStaticProps({ params }) {

  const articleData =
    (await builder
      .get('article', {
        query: {
            'data.slug': params?.slug
        },
        //enrich the data to make sure our author reference includes all content 
        options: {
          enrich: true
        },
      }).toPromise()) || null

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
  const articles = await builder.getAll('article', {
    options: { noTargeting: true },
    fields: 'data.slug',
  })

  return {
    paths: articles.map((article) => `/blog/${article.data?.slug}`),
    fallback: true
  }
}

export default function Page({ articleData }) {
  const router = useRouter();
  const isPreviewingInBuilder = useIsPreviewing();
  const show404 = !articleData && !isPreviewingInBuilder;

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Header />
      <BuilderContent model="article" content={articleData}>
        {(data, loading) => (
          <div>
            <HeroContainer backgroundImage={data?.image}>
                <Title>
                    {data?.title }
                </Title>
                <Eyebrow>{data?.blurb}</Eyebrow>
                <AuthorBlock>
                  By {data?.author?.value?.data?.name}
                  <div>{showTime(data?.timestamp)}</div>
                </AuthorBlock>
            </HeroContainer>
            <div>
              {data?.content?.map((item, index) => (
                <Section key={index} backgroundImage={item.banner.backgroundImage}>
                  {item?.content}
                </Section>
              ))}
            </div>
          </div>
        )}
      </BuilderContent>

      <Footer />
    </>
  )
}
