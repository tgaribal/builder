import { Builder, withChildren  } from '@builder.io/react';

export function AsyncComp(props) {
    console.log('PROPS: ', props)
    return (
        <div >
            {/* {props.user.map(user => {
                return (<div>{user.item}</div>)
            })} */}
        </div>
    )
};

Builder.registerComponent(withChildren(AsyncComp), {
  name: 'AsyncComp',
  inputs: [
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
      defaultValue: [
        {
          label: 'Tab 1',
          content: [],
        },
      ],
    },
  ],
});

