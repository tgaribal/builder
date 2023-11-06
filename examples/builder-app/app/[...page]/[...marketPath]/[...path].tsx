import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../../../components/builder'


// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string;
    marketPath: string;
    path: string[];
  };
}

export default async function Page(props: PageProps) {
  console.log('PROPS: ', props)
  const locale = props?.params?.marketPath;

  const content = await builder
    // Get the page content from Builder with the specified options
    .get('page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + (props?.params?.path?.join('/') || ''),
        locale
      },
      locale
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent locale={locale} content={content} />
    </>
  );
}
