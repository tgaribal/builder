import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/sdk';
import { Builder } from '@builder.io/sdk';
import { Links, Meta, Scripts, useCatch, useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import builderConfig from '../../builderConfig.json';

builder.init(builderConfig.apiKey);

export const loader: LoaderFunction = async ({ params }) => {
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: `/${params['*']}`,
      },
    })
    .toPromise();

  
  console.log('LOADER PAGE: ', page)
  if (!page) {
    throw new Response('Page Not Found', {
      status: 404,
      statusText:
        "We couldn't find this page, please check your url path and if the page is published on Builder.io.",
    });
  }

  return page;
};

export function CatchBoundary() {
  const caught = useCatch();
  const errorMessage = `Error: ${caught.status}`
  return (
    <html>
      <head>
        <title>{errorMessage}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h3>
          Error: {caught.status} - {caught.statusText}
        </h3>
        <p>
          Make sure you have this page published on{' '}
          <a target="_blank" href="https://builder.io/content" rel="noreferrer">
            Builder.io
          </a>
        </p>
        <Scripts />
      </body>
    </html>
  );
}

export default function Page() {
  const page: BuilderContent = useLoaderData<BuilderContent>();
  console.log('PAGE: ', page)
  const isPreviewingInBuilder = useIsPreviewing();

  if (!page && !isPreviewingInBuilder) {
    return (<div> BAD PAGE </div>);
  }

  return (
    <div>
      <h3>Welcome to the Builder.io + Remix starter</h3>
      <BuilderComponent model="page" content={page} />
    </div>
  );
}
