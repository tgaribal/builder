'use client'
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../../components/builder';
import '../../builder-registry'

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
// builder.init('271bdcf584e24ca896dede7a91dfb1cb')

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  console.log('PARMAS from catchal ', props?.params)
  const page = await builder
    // Get the page content from Builder with the specified options
    .get('article', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + (props?.params?.page?.join('/') || ''),
      },
      options: {
        enrich: true
      },
    }).toPromise();

    console.log('PAGE: ', page?.data?.header);

  return (
    <>
      {/* Render the Builder page */}
      {/* <RenderBuilderContent content={header} model="header-section" key={header?.id} /> */}
      <RenderBuilderContent content={page} model="page" />
    </>
  );
}
