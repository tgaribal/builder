import { Builder, withChildren, BuilderBlocks  } from '@builder.io/react';
import Link from 'next/link';

export const ExampleWithChildren = (props) => {
  
  return (
    <div>
        <BuilderBlocks
            child
            parentElementId={props.builderBlock && props.builderBlock.id}
            blocks={props.before}
            dataPath={`component.options.before`} />
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
    name: "ProductsCollection",
    inputs: [
      {
        name: "before",
        type: "blocks",
        hideFromUI: true,
        defaultValue: [],
      },
      {
        name: "types",
        friendlyName: "Types",
        type: "list",
        subFields: [
          { name: "name", type: "text" },
          { name: "image", type: "text" },
          { name: "hasFilter", type: "boolean", defaultValue: true },
          {
            name: "products",
            friendlyName: "Products",
            type: "list",
            subFields: [
              { name: "productId", type: "text" },
              { name: "name", type: "text" },
              { name: "description", type: "text" },
              { name: "image", type: "text" },
              { name: "pricing", type: "text" },
              { name: "productUrl", type: "text" },
              { name: "fragrance", type: "text" },
              { name: "tag", type: "text" },
            ],
          },
        ],
      },
      {
        name: "after",
        type: "blocks",
        hideFromUI: true,
        defaultValue: [],
      },
    ],
 })

//  Builder.registerComponent(KnowdeButton, {
//     name: "Card Deck",
//     fiendlyName: 'FRIENDLY CARD DECK',
//     inputs: [
//         {
//         name: "cards",
//         type: "list",
//         subFields: [
//             {
//             name: "type",
//             type: "text",
//             enum: [
//                 "standard",
//                 "gradient",
//                 "image",
//                 "cta",
//                 "blog"
//             ]
//             },
//             {
//             name: "eyebrow - localized",
//             type: "text",
//             localized: true
//             },
//             {
//             name: "heading - localize",
//             type: "text",
//             localized: true
//             },
//             {
//             name: "headingAs",
//             type: "text",
//             enum: [
//                 "h2",
//                 "h3",
//                 "h4",
//                 "h5",
//                 "h6"
//             ]
//             },
//             {
//             name: "body",
//             type: "longtext"
//             },
//             {
//             name: "callToAction",
//             type: "object",
//             defaultValue: {
//                 label: {
//                     "Default": "Button CTA"
//                 },
//                 heirarchy: "primary",
//                 size: "md"
//             },
//             subFields: [
//                 {
//                     name: "label",
//                     type: "text",
//                     localized: true
//                 },
//                 {
//                     name: "hierarchy",
//                     type: "text",
//                     localized: true,
//                     enum: [
//                         "primary",
//                         "link",
//                         "secondary",
//                         "tertiary",
//                         "outline",
//                         "purpleGradient",
//                         "greenGradient"
//                     ]
//                 },
//                 {
//                     name: "size",
//                     type: "text",
//                     enum: [
//                         "sm",
//                         "md",
//                         "lg",
//                         "xl"
//                     ]
//                 },
//                 {
//                 name: "url",
//                 type: "url"
//                 },
//                 {
//                 name: "endIcon",
//                 type: "text",
//                 enum: [
//                     "none",
//                     "chevron",
//                     "arrow-up-right",
//                     "arrow-right"
//                 ]
//                 }
//             ]
//             },
//             {
//             name: "backgroundGradient",
//             type: "text",
//             enum: [
//                 "none",
//                 "pink",
//                 "purple",
//                 "blue",
//                 "green"
//             ]
//             },
//             {
//             name: "backgroundImage",
//             type: "object",
//             subFields: [
//                 {
//                 name: "src",
//                 type: "file",
//                 allowedFileTypes: [
//                     "jpeg",
//                     "jpg",
//                     "png",
//                     "svg"
//                 ]
//                 },
//                 {
//                 name: "alt",
//                 type: "text"
//                 }
//             ]
//             },
//             {
//             name: "mobileBackgroundImage",
//             type: "object",
//             subFields: [
//                 {
//                 name: "src",
//                 type: "file",
//                 allowedFileTypes: [
//                     "jpeg",
//                     "jpg",
//                     "png",
//                     "svg"
//                 ]
//                 },
//                 {
//                 name: "alt - localized",
//                 type: "text",
//                 localized: true
//                 }
//             ],
//             showIf: "options.get('type') === 'image'"
//             },
//             {
//             name: "isFeatured",
//             type: "boolean"
//             },
//             {
//             name: "hiddenOnDesktop",
//             type: "boolean"
//             }
//         ]
//         },
//         {
//         name: "featured",
//         type: "boolean"
//         },
//         {
//         name: "numCols",
//         type: "number",
//         helperText: "Provide a number between 1 to 3"
//         }
//     ]
// })


// Builder.registerComponent(KnowdeButton, {
//     name: "Knowde Button",
//     inputs: [
//         {
//             name: "size",
//             type: "string",
//             defaultValue: "small",
//             enum: [
//                 "small",
//                 "medium",
//                 "large",
//                 "inline"
//             ]
//         },
//         {
//             name: "color",
//             type: "string",
//             defaultValue: "primary",
//             enum: [
//                 "primary",
//                 "primary-inverted",
//                 "secondary",
//                 "secondary-inverted",
//                 "tetriary",
//                 "tetriary-inverted"
//             ]
//         },
//         {
//             name: "icon",
//             type: "string"
//         },
//         {
//             name: "title",
//             type: "string",
//             required: true
//         },
//         {
//             name: "link",
//             type: "url"
//         }
//     ],
// });