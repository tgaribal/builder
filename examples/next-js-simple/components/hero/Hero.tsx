import { Builder, withChildren  } from '@builder.io/react';

export const TestCustomComponent = (props:any) => {
  
  return (
    <>
    <div >
      <h2>{props?.inputVal}</h2>
      <>
        {props?.list?.map((item: any, index: any) => {
          return <div key={item.number+index}>{item.reviewText}</div>
        })}
      </>
    </div>
    <div>{props.children}</div>
    </>
  )
 };


// const enum = ["CA", "NY", "IL"];

Builder.registerComponent(TestCustomComponent, {
  name: 'Test Custom Comp hello',
  // tag: 'something else here',
  inputs: [
    {
      name: 'inputVal',
      type: 'html',
      defaultValue: 'this is some text',
      localized: false,
      // regex: {
      //   pattern: "^\/[a-z]$",
      //   // flags for the RegExp constructor; for example, "gi"  */
      //   options: "g",
      //   // message to display to end-users if the regex fails
      //   message: "You must use a relative url starting with '/...' "
      // },
      onChange: (options: any) => {
        const val = options.get('inputVal');

        console.log('KAHSDFKHASDKFHAKSDHFALKSHD: ', options, val)

      }
    },
    {
      name: 'category',
      type: 'text',
      enum: ['movies', 'tv'],
    },
    {
      name: 'number',
      type: 'text',
      defaultValue: "10",
      enum: ['1', '2', '3']
    },
    {
        name: "state",
        type: "text",
        defaultValue: "CA",
        required: true,
        onChange: (options: any) => {
            options.set('city', "San Francisco")
            console.log(options)
        }
    },
    {
        name: "city",
        type: "text",
        enum: [
            "San Francisco",
            "Palo Alto",
        "New York City",
            "Albany",
        "Chicago"
       ],
       showIf: (options) => {
        return options.get('state') === 'CA'
       },
       defaultValue: "San Francisco",
    },
    {
      name: 'odel',
      type: 'model',
      model: 'banner'
    },
    {
      name: 'list',
      type: 'list',
      defaultValue: [{
        reviewText: "\"You guys are the best\"",
        newTab: true,
        number: "1",
        reviewAuthor: "Jane Smith"
      }],
      subFields: [
        {
          name: 'reviewText',
          type: 'string',
          defaultValue: '"You guys are the best"'
        },
        {
          name: "newTab",
          type: "boolean",
          defaultValue: true
        },
        {
          name: 'number',
          type: 'string',
          required: true,
          defaultValue: '1',
          regex: {
            // pattern to test, like "^\/[a-z]$" 
            pattern: "^[1-9]?[0-9]{1}$|^100$",
            // flags for the RegExp constructor, e.g. "gi"  */
            options: "g",
            // message to display to end-users if the regex fails
            message: "must use a number between 1 and 10 "
          }
        },
        {
          name: 'reviewAuthor',
          type: 'string',
          defaultValue: 'Jane Smith',
        },
      ],
      onChange: (options: any) => {
        console.log('hello')

        // const val = [{reviewText: "\"You guys are the best\"",newTab: true,number: "1",reviewAuthor: "Jane Smith"}]
        // const newVal = new Map(val.map(obj => {...obj}));
        if (options.get('list').length > 2) {
          console.log('in on change isError');

          options.set('list', [{reviewText: "\"You guys are the best\"",newTab: true,number: "1",reviewAuthor: "Jane Smith"}]);
          console.log('hello after set')
          // console.log('this is after set: ', options.get('list'))
        }
      }
    }
  ]
});

