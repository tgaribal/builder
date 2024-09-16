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
        type: 'list',
        localized: true,
        // keysHelp/erText: 'hey this is something',
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
        ],
        onChange: `
          let menuItems = options.get('siblings').toJSON();
          console.log('MENYU', menuItems)
          for (const locale in menuItems) {
              if (locale !== '@type' && menuItems[locale].length > 5) {
                  console.log('herkeh')
                  alert('Maximum items is 5.');
                  menuItems = menuItems[locale].slice(0, 5);
                  options.set('siblings', menuItems);
              }
              if (locale !== '@type' && menuItems[locale].length <= 2) {
                console.log('herkeh')
                alert('Minimum items is 2.');
                menuItems = menuItems[locale].slice(0, 2);
                options.set('siblings', menuItems);
            }
              
          }
      `,
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

