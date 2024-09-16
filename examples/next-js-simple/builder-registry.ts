import { builder, Builder, Text } from '@builder.io/react'
import dynamic from 'next/dynamic'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)
//external dependencies

Builder.registerComponent(
  dynamic(() => import('./components/Counter/Counter')),
  {
    name: 'Counter',
    // models:["page"],
    inputs: [
      {
        name: 'initialCount',
        type: 'number',
      },
      {
        name: 'formList',
        type: 'list',
        copyOnAdd: false,
        // onChange: (options:any) => {
        //   const formsArr = [...options.get('formList')];
        //   const formIdSet = new Set();
        //   for (const form of formsArr) {
        //    const formId = form.get('formId');
        //    console.log('GET HELLO: ', formId);
        //    if (formIdSet.has(formId)) {
        //     // Duplicate formId found
        //       // alert('Please dont use duplicate IDs')
        //     } else {
        //       formIdSet.add(formId);
        //     }
        //   }
        // },
        subFields: [
          {
            name: 'formId',
            type: 'text',
          },
        ],
      },
      {
        // To be removed in final commit. Needed for demo on feature branch tests
        name: 'dropdownSource1',
        friendlyName: 'Example of Localized Variant Property',
        type: 'string',
        enum: ["hello", "new", "another", "image"],
        defaultValue: 'external',
        required: true,
        localized: true,
        onChange: function (options:any) {
          const source = options.get('dropdownSource1').toJSON();
          console.log('tests - source', source);
        },
      },
      {
        name: 'anotherField',
        type: 'boolean',
        defaultValue: true,
        localized: true,
        helperText: 'This field should be visible only if variant = image',
        showIf: function (options: any) {
          const source = options.get('dropdownSource1').toJSON();
          for (const key in source) {
            if (key !== '@type' && key !== 'Default') {
              return source[key] === 'image';
            }
          }
          return source.Default === 'image';
        },
      },
      {
        name: 'someObject',
        friendlyName: 'Example of Object',
        type: 'list',
        copyOnAdd: false,
        localized: true,
        subFields: [
          {
            name: 'dropdownSource2',
            friendlyName: 'Example of Localized Variant Property',
            helperText:
              'Inside of Type=List Object showIf of localized variants is not working correctly.',
            type: 'string',
            enum: ["hello", "new", "another", "image"],
            defaultValue: 'external',
            required: true,
            localized: true,
            onChange: `const source = options.get('dropdownSource2').toJSON();
              console.log('tests - source (inside Object)', source);`,
          },
          {
            name: 'anotherField',
            helperText:
              'This field should be visible only if variant = image. Inside of Type=List Objects showIf is not working correctly.',
            type: 'boolean',
            defaultValue: true,
            localized: true,
            showIf: `const source = options.get('dropdownSource2').toJSON();
              for (const key in source) {
                if (key !== '@type' && key !== 'Default') {
                  return source[key] === 'image';
                }
              }
              return source.Default === 'image'`,
          }
        ]
      }
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./components/Quote')),
  {
    name: 'Single Quote',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F74e188d8900f4088bf174efd59a3df01%2Fda51ad4037944e6a892ffcf53c8b3b8b',
    inputs: [
      {
        name: 'quote',
        type: 'text',
        defaultValue:
          'Please hit your single quote content and then hit enter.',
      },
      { name: 'author', type: 'reference', model: 'author' },
    ],
  }
)

Builder.registerComponent(
  dynamic(
    async () => (await import('./components/AsyncComp/AsycnComp')).AsyncComp
  ),
  {
    name: 'AsyncComp',
  }
)

Builder.registerComponent(
  dynamic(() => import('./components/Hero')),
  {
    name: 'Hero',
    inputs: [
      {
        name: 'buttonText',
        type: 'string',
        required: true,
      },
      {
        name: 'imageAlt',
        type: 'string',
        required: true,
      },
      {
        name: 'imageSrc',
        type: 'file',
        required: true,
      },
      {
        name: 'subtitle',
        type: 'string',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        required: true,
      },
    ],
  }
)

// const CloudinaryImage = (props:any) => {
//   if (!props.cloudinaryOptions) {
//     return ('Choose an Image')
//   }
//   return (
//     <img src={props?.cloudinaryOptions?.url} width={props?.cloudinaryOptions?.width} height={props?.cloudinaryOptions?.height} />
//   )
// }

// Builder.registerComponent(CloudinaryImage,
//   {
//     name: 'CloudinaryImage',
//     image:
//       'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png',
//     inputs: [{
//       name: 'useCloudinary',
//       type: 'boolean',
//       defaultValue: true
//     },
//       { 
//       name: 'cloudinaryOptions', 
//       type: 'cloudinaryImageEditor',
//       showIf: 
//     },
//     {
//       name: 'image',
//       type: 'file'
//     }
  
//   ],
//   }
// )