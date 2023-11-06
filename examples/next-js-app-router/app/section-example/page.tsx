import React from 'react';
import { builder } from '@builder.io/sdk';
import Head from 'next/head';
import { RenderBuilderContent } from '@/components/builder';

// Replace with your Public API Key
// builder.init('271bdcf584e24ca896dede7a91dfb1cb');
builder.init('89cddbc998f54a0bbf8478e9140edd84')
interface PageProps {
  params: {
    page: string[];
  };
}

export default async function SectionExample(props: PageProps) {
  const content = await builder
    .get('blog-article', {
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      <div
        style={{
          background: 'purple',
          fontSize: 24,
          textAlign: 'center',
          height: 200,
          padding: 20,
        }}
      >
        Non builder content
      </div>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
      <div
        style={{
          background: 'blue',
          fontSize: 14,
          textAlign: 'center',
          height: 200,
          padding: 20,
        }}
      >
        Non builder content
      </div>
    </>
  );
}
