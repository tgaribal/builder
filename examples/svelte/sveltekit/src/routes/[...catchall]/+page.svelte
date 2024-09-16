<script>
	import Counter from '../../lib/Counter.svelte';
	import SeButton from '../../lib/SeButton.svelte';
	import ContentOverlay from '../../lib/SEContentOverlay.svelte';
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '../../apiKey';

	// Create an array of your custom components and their properties
	const CUSTOM_COMPONENTS = [
		{
			component: Counter,
			name: 'Counter',
			inputs: [
				{
					name: 'name',
					type: 'string',
					defaultValue: 'hello'
				},
				{
					name: 'count',
					type: 'number',
					defaultValue: 0
				},
				{
				name: 'menuItems',
				friendlyName: 'Menu Items',
				type: "list",
				localized: true,
				subFields: [
					{
						name: 'item',
						type: 'object',
						subFields: [
							{
								name: 'name',
								type: 'text',
								required: true,
							},
							{
								name: 'age',
								type: 'number',
							},
							{
								name: 'location',
								type: 'text',
							},
						],
					}
				],
				defaultValue: [
					{
						localized: true,
						Default: [
							{
								item: {
									name: 'hello',
									age: 12,
									location: 'world'

								}
							}
						]
					}
				],
				onChange: `let menuItems = options.get('menuItems');
					console.log('change', menuItems.toJSON());
					for (const locale of menuItems.keys()) {
						console.log(menuItems.get(locale).length, " and then ");
						if (locale !== '@type' && menuItems.get(locale).length > 3) {
							alert('Maximum items is 3.');
							const newItems = menuItems.get(locale).slice(0, 3);
							menuItems.set(locale,newItems);
							options.set('menuItems', menuItems);
						} 
						if (locale !== '@type' && menuItems.get(locale).length <= 1) {
							const currentItems = menuItems.get(locale).slice(0, 1);
							console.log('herkeh: ', currentItems)
							alert('Minimum items is 1.');
							menuItems.set(locale,currentItems);
							options.set('menuItems', menuItems);
						}
					}
				`,
			},
			],
		},
	];

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;

	// we want to show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
  <h1>Welcome to SvelteKit</h1>

  <div>Below is your Builder Content:</div>
  {#if canShowContent}
    <div>page Title: {data.content?.data?.title || 'Unpublished'}</div>
    <Content
      model="page"
      content={data.content}
      apiKey={BUILDER_PUBLIC_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  {:else}
    Content Not Found
  {/if}
</main>

<footer>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</footer>

<style>
  h1 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
