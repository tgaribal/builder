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
	eyebrow: string;
};

function Hero({ maxWidth, children, eyebrow }: Props) {
  console.log('MAX WIDTH Section: ', maxWidth)
	return (
		<section  >
			<span>THIS IS A SECTION {eyebrow}</span>
		</section>
	);
}

// export const HeroWithChildren = withChildren(Hero);

Builder.registerComponent(Hero, {
	name: "Hero",
	inputs: [
	  {
		name: "eyebrow",
		type: "text",
		defaultValue: "Optional Eyebrow",
		localized: true,
	  },
	  {
		name: "headline",
		type: "text",
		defaultValue: "Powerful for developers. Fast for everyone.",
		localized: true,
	  },
	  {
		name: "headingAs",
		type: "text",
		enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
		defaultValue: "h1",
	  },
	  {
		name: "body",
		type: "text",
		localized: true,
		defaultValue:
		  "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
	  },
	// //   {
	// // 	name: "buttons",
	// // 	type: "list",
	// // 	subFields: ButtonConfig.inputs,
	// //   },
	  {
		name: "centered",
		type: "boolean",
		defaultValue: false,
		localized: true,
	  },
	  {
		name: "image",
		type: "object",
		// localized: true,
		subFields: [
		  {
			name: "src",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
		  },
		  {
			name: "alt",
			type: "text",
		  },
		],
		showIf: "options.get('centered') === false",
		helperText:
		  "Will only showcase if the value of the centered field is set to true",
	  },
	  {
		name: "newsLetter",
		type: "boolean",
		localized: true,
		defaultValue: false,
	  },
	  {
		name: "centered",
		type: "boolean",
		localized: true,
		defaultValue: false,
	  },
	  {
		name: "rightImage",
		type: "object",
		// localized: true,
		subFields: [
		  {
			name: "src",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
		  },
		  {
			name: "alt",
			type: "text",
		  },
		],
		showIf: "options.get('centered') === true",
		helperText:
		  "Will only showcase if the value of the centered field is set to true. Make sure leftImage fields are left empty.",
	  },
	  {
		name: "leftImage",
		type: "object",
		// localized: true,
		subFields: [
		  {
			name: "src",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
		  },
		  {
			name: "alt",
			type: "text",
		  },
		],
		showIf: "options.get('centered') === true",
		helperText:
		  "Will only showcase if the value of the centered field is set to true. Make sure rightImage fields are left empty.",
	  },
	]
});