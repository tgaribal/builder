'use client'
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../../../components/builder';
import '../../../builder-registry'
import { BuilderContent } from '@builder.io/react';

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function LandingPage(props: PageProps) {
  const landingPage = await builder
    // Get the page content from Builder with the specified options
    .get('landing-page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + (props?.params?.page || ''),
      },
    }).toPromise();

    console.log('hellloooo landing')
    const darkHeader = await builder
      .get('header-section', {
        key: 'dark',
        query: {
          data: {
            type: 'dark'
          }
        },
      }).toPromise();

      const lightHeader = await builder
      .get('header-section', {
        key: 'light',
        query: {
          data: {
            type: 'light'
          }
        },
      }).toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <BuilderContent model="landing-page" content={landingPage}> 
        {(data, loading, content) => {
          console.log('data', data?.header)
          if (loading) return <div>Loading...</div>;
          return (
            // Add your code to access your data
            <>
              <RenderBuilderContent content={data?.header === 'light' ? lightHeader : darkHeader} model="header-section"  />
              <RenderBuilderContent content={landingPage} model="landing-page" />
            </>
          );
        }}
      </BuilderContent>
    </>
  );
}
