import { Builder, withChildren, BuilderBlocks  } from '@builder.io/react';
import Link from 'next/link';

export const ExampleWithChildren = (props) => {
  
  return (
    <div>
        <h2>THIS IS TEXT</h2>
        <BuilderBlocks
            child
            parentElementId={props.builderBlock && props.builderBlock.id}
            blocks={props.after}
            dataPath={`component.options.after`} />
    </div>
  )
 };

 Builder.registerComponent(withChildren(ExampleWithChildren), {
    name: "ProductBox",
    inputs: [
      {
        name: "product",
        type: "request",
        hidden: true,
        defaultValue: {
            '@type': '@builder.io/core:Request',
            request: {
                url: "https://builder.commercelayer.io/api/skus/ZNRJSPQELl",
                method: "GET",
            }
        }
      },
      {
        name: "after",
        type: "blocks",
        hideFromUI: true,
        defaultValue: [],
      },
    ],
 })


//  "product": {
//     "request": {
//     "headers": {
//     "Accept": "application/vnd.api+json"
//     },
//     "method": "GET",
//     "url": "https://builder.commercelayer.io/api/skus/ZNRJSPQELl"
//     },
//     "@type": "@builder.io/core:Request",
//     "options": {
//     "product": "ZNRJSPQELl"
//     }
//     },


//     inputs: [
//         {
//           name: 'products',
//           type: 'request',
//           // Hide this from the UIs
//           hidden: true,
//           defaultValue: {
//             '@type': '@builder.io/core:Request',
//             request: {
//               url: 'https://api.shopstyle.com/api/v2/products',
//               // Optional
//               query: defaultProductsQueryParams,
//               // Optional
//               headers: productQueryHeaders,
//             },
//             bindings: {
//               'query.limit': 'amount',
//               // any expression is supported - e.g. "category ? 'foo' : 'bar'", etc
//               'query.cat': 'category || "womens-fashion"',
//             },
//           },
//         },