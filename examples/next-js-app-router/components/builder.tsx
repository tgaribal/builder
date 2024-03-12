'use client';
import { BuilderComponent, useIsPreviewing, builder, Builder } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import { ProductBadge } from './ProductBadge';
import { ProductBanner } from './ProductBanner';
builder.init('271bdcf584e24ca896dede7a91dfb1cb');
interface BuilderPageProps {
  content: any;
  data: any;
}

export function RenderBuilderContent({ content, data }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  console.log('IS PREVIEWING: ', isPreviewing)

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="product-detail-page" data={data}/>;
  }

  return <DefaultErrorPage statusCode={404} />;
}

Builder.registerComponent(ProductBanner,
  {
    models: ['product-detail-page'],
    name: 'Banner',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/awards.svg',
    description:
      'Product badge for Product Detail Page',
    defaults: {
      bindings: {
        'component.options.product': 'state.product'
      }
    }
  }
);
Builder.registerComponent(ProductBadge,
  {
    models: ['product-detail-page'],
    name: 'Badge',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/awards.svg',
    description:
      'Product badge for Product Detail Page',
    defaults: {
      bindings: {
        'component.options.product': 'state.product'
      }
    }
  }
);

// export default async function ProductPage({ params }: { params: { handle: string } }) {
//   const product = await getProductById(params.handle);

//   if (!product) return notFound();

//   const content = await builder
//     // Get the page content from Builder with the specified options
//     .get(sectionModel, {
//       userAttributes: {
//         urlPath: product.handle
//       },
//       // Set prerender to false to return JSON instead of HTML
//       prerender: false
//     })
//     // Convert the result to a promise
//     .toPromise();
  
//   <RenderBuilderSection content={content} model={sectionModel} data={{ product }} />