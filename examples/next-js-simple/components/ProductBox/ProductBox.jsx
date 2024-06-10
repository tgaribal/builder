import { Builder, withChildren, BuilderBlocks  } from '@builder.io/react';
import Link from 'next/link';

export const ExampleWithChildren = (props) => {
  console.log('PROPS PROPS: ', props);
  console.log('PROPS CHILDREN: ', props.children)
  return (
    <div>
        <h2>THIS IS TEXT</h2>
        {/* <BuilderBlocks
            child
            parentElementId={props.builderBlock && props.builderBlock.id}
            blocks={props.after}
            dataPath={`component.options.after`} /> */}
            {props.children}
    </div>
  )
 };

 let firstChild = 'something';
 Builder.registerComponent(withChildren(ExampleWithChildren), {
    name: "ProductBox",
    childRequirements: {
      message: 'You can only put Buttons, Text, or Headings in a Hero',
      query: {
        'component.name': { $in: ['Button', 'Text', 'Heading'] },
      },
    },
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
      {
        name: 'siblings',
        type: 'object',
        // keysHelp/erText: 'hey this is something',
        folded: true,
        onChange: (options) => {
          console.log('OPTIONS: ', options.get('siblings'));
          firstChild = options.get('siblings').get('firstChild').get('name')
          console.log('FIRST: ', firstChild)
        },
        subFields: [
          {
            name: 'firstChild',
            subFields: [
              {
                name: 'name',
                type: 'string',
                required: true,
              },
              {
                name: 'age',
                type: 'number',
              },
              {
                name: 'location',
                type: 'string',
              },
            ],
          },
          {
            name: 'secondChild',
            type: 'object',
            subFields: [
              {
                name: 'name',
                type: 'string',
                defaultValue: firstChild,
                required: true
              },
              {
                name: 'age',
                type: 'number',
              },
              {
                name: 'location',
                type: 'string',
              },
            ],
          },
        ],
  }
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

