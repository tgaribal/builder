import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic(() => import('./components/Counter/Counter')),
  {
    name: 'Counter',
    inputs: [
      {
        name: 'initialCount',
        type: 'number',
      },
    ],
  }
)
Builder.registerComponent(
  dynamic(() => import('./components/Quote')), 
  {
    name: 'Single Quote',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F74e188d8900f4088bf174efd59a3df01%2Fda51ad4037944e6a892ffcf53c8b3b8b',
    inputs: [
      {
        name: 'quote',
        type: 'text',
        defaultValue: 'Please hit your single quote content and then hit enter.',
      },
      { name: 'author', type: 'reference', model: 'author' },
    ],
  }
)
