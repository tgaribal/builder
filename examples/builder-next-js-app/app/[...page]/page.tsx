import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../../components/builder';
import '../../builder-registry';

// Builder Public API Key set in .env file
builder.init('89cddbc998f54a0bbf8478e9140edd84');

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get('page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + (props?.params?.page?.join('/') || ''),
      },
      prerender: false
    })
    // Convert the result to a promise
    .toPromise();
    console.log('helo')

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}
