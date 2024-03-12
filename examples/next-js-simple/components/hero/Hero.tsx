import { Builder, BuilderBlocks, withChildren  } from '@builder.io/react';

// export const TestCustomComponent = (props:any) => {
//   // console.log("PROSP: ", props.shouldSendFrontendEmail)
//   return (
//     <>
//     <div >
//       <h2>{props?.inputVal}</h2>
//       <>
//         {props?.list?.map((item: any, index: any) => {
//           return <div key={item.number+index}>{item.reviewText}</div>
//         })}
//       </>
//     </div>
//     <div>{props.children}</div>
//     </>
//   )
//  };


// const enum = ["CA", "NY", "IL"];

type Props = {
	maxWidth: string;
	children: any;
	attributes: any;
	builderBlock: any;
};

function Section({ maxWidth, attributes, builderBlock }: Props) {
  console.log('MAX WIDTH Section: ', maxWidth)
	return (
		<section {...attributes} className={`${attributes.className} mx-auto`} style={{ maxWidth }} key={attributes.key}>
			<BuilderBlocks blocks={builderBlock.children} parentElementId={builderBlock.id} dataPath="this.children" />
		</section>
	);
}

export const SectionWithChildren = withChildren(Section);

Builder.registerComponent(SectionWithChildren, {
	name: 'Core:Section',
	// image: 'https://cdn.corpemf.com/www/builder-io/section.png',
  image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F01f5bfaeb99b47c784ea405ce9cbf18a',
	override: true,
	canHaveChildren: true,
	noWrap: true,
	inputs: [
		{
			name: 'maxWidth',
			type: 'string',
			enum: [
				{
					label: 'None',
					value: '100%'
				},
				{
					label: 'Large',
					value: '32rem'
				},
				{
					label: 'Extra large',
					value: '36rem'
				},
				{
					label: '2xl',
					value: '42rem'
				},
				{
					label: '3xl',
					value: '48rem'
				},
				{
					label: '4xl',
					value: '56rem'
				},
				{
					label: '5xl',
					value: '64rem'
				},
				{
					label: '6xl',
					value: '72rem'
				},
				{
					label: '7xl',
					value: '80rem'
				}
			],
			defaultValue: '72rem'
		}
	],
	defaultStyles: {
		marginTop: '0',
		paddingTop: '20px',
		paddingBottom: '20px',
		paddingLeft: '20px',
		paddingRight: '20px'
	}
});

// Builder.registerComponent(TestCustomComponent, {
//     name: "ApplyForm",
//     inputs: [
//       {
//         name: 'shouldSendFrontendEmail',
//         type: 'boolean',
//         defaultValue: false
//       },
//       {
//         name: 'shouldSendBrontendEmail',
//         type: 'boolean',
//         defaultValue: false
//       }
//     ],
//     "hooks": {}
// })
// Builder.registerComponent(TestCustomComponent, {
//   name: 'Test Custom Comp hello',
//   // tag: 'something else here',
//   inputs: [
//     {
//       name: 'inputVal',
//       type: 'html',
//       defaultValue: 'this is some text',
//       localized: true,
//       // regex: {
//       //   pattern: "^\/[a-z]$",
//       //   // flags for the RegExp constructor; for example, "gi"  */
//       //   options: "g",
//       //   // message to display to end-users if the regex fails
//       //   message: "You must use a relative url starting with '/...' "
//       // },
//       onChange: (options: any) => {
//         const val = options.get('inputVal');

//         console.log('KAHSDFKHASDKFHAKSDHFALKSHD: ', options, val)

//       }
//     },
//     {
//       name: 'category',
//       type: 'text',
//       enum: ['movies', 'tv'],
//     },
//     {
//       name: 'number',
//       type: 'text',
//       defaultValue: "10",
//       enum: ['1', '2', '3']
//     },
//     {
//         name: "state",
//         type: "text",
//         defaultValue: "CA",
//         required: true,
//         onChange: (options: any) => {
//             options.set('city', "San Francisco")
//             console.log(options)
//         }
//     },
//     {
//         name: "city",
//         type: "text",
//         enum: [
//             "San Francisco",
//             "Palo Alto",
//         "New York City",
//             "Albany",
//         "Chicago"
//        ],
//        showIf: (options) => {
//         return options.get('state') === 'CA'
//        },
//        defaultValue: "San Francisco",
//     },
//     {
//       name: 'odel',
//       type: 'model',
//       model: 'banner'
//     },
//     {
//       name: 'list',
//       type: 'list',
//       defaultValue: [{
//         reviewText: "\"You guys are the best\"",
//         newTab: true,
//         number: "1",
//         reviewAuthor: "Jane Smith"
//       }],
//       subFields: [
//         {
//           name: 'reviewText',
//           type: 'string',
//           defaultValue: '"You guys are the best"'
//         },
//         {
//           name: "newTab",
//           type: "boolean",
//           defaultValue: true
//         },
//         {
//           name: 'number',
//           type: 'string',
//           required: true,
//           defaultValue: '1',
//           regex: {
//             // pattern to test, like "^\/[a-z]$" 
//             pattern: "^[1-9]?[0-9]{1}$|^100$",
//             // flags for the RegExp constructor, e.g. "gi"  */
//             options: "g",
//             // message to display to end-users if the regex fails
//             message: "must use a number between 1 and 10 "
//           }
//         },
//         {
//           name: 'reviewAuthor',
//           type: 'string',
//           defaultValue: 'Jane Smith',
//         },
//       ],
//       onChange: (options: any) => {
//         console.log('hello')

//         // const val = [{reviewText: "\"You guys are the best\"",newTab: true,number: "1",reviewAuthor: "Jane Smith"}]
//         // const newVal = new Map(val.map(obj => {...obj}));
//         if (options.get('list').length > 2) {
//           console.log('in on change isError');

//           options.set('list', [{reviewText: "\"You guys are the best\"",newTab: true,number: "1",reviewAuthor: "Jane Smith"}]);
//           console.log('hello after set')
//           // console.log('this is after set: ', options.get('list'))
//         }
//       }
//     }
//   ]
// });
