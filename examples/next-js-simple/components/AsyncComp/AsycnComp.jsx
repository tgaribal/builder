import { Builder, withChildren  } from '@builder.io/react';

export function AsyncComp(props) {
    console.log('PROPS: ', props)
    return (
        <div >
            {/* <img src=`{${props.image}?&width=${props.width}&height=${props.height}}` /> */}
        </div>
    )
};

Builder.registerComponent(withChildren(AsyncComp), {
  name: 'AsyncComp',
  inputs: [
    {
      name: 'image',
      type: 'file'
    },
    {
      name: 'height',
      type: 'number',
      required: true,
      showIf: (options) => {
        return options.get('image')
      }
    },
    {
      name: 'width',
      type: 'number',
      showIf: (options) => {
        return options.get('image')
      }
    },
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'New tab',
        },
        {
          name: 'content',
          type: 'uiBlocks',
          defaultValue: [],
        },
      ],
      copyOnAdd: false,
      defaultValue: [
        {
          label: 'Tab 1',
          content: [],
        },
      ],
    },
  ],
});

