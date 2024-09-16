<!-- <script lang="ts">
	import type { BuilderBlock } from '@builder.io/sdk-svelte/src/types/builder-block';
	import { getContext } from 'svelte';
	export let buttonText: string;
	export let builderBlock: BuilderBlock | null = null;
	
	export const DEFAULT_ICON =
	'https://cdn.builder.io/api/v1/image/assets%2Fce12916b553d4493a13999ca23941359%2F9da56d1a3efe4126a5b0cf9f0dde8d60';
	
	// builderBlock data is taken from the context if present or the prop
	let builderBlockData: BuilderBlock | null = builderBlock;
	builderBlockData = getContext('builderBlock');
	
	console.log('BUILDER BLOCK:', builderBlock, builderBlockData?.id)
</script>

{#if true}
	<div
		class="z-19 fixed bottom-10 md:block xl:bottom-[56px] ltr:right-10 ltr:xl:right-[56px] rtl:left-[56px] rtl:xl:left-[56px]"
	>
		<div id={builderBlockData?.id} />
		<div
			data-something={builderBlockData?.component?.name}
		>
			<button
				tabindex={0}
				data-testid="contact_sales_id"
				class="md:h-se68 leading-se21 bg-se-green-100 shadow-se-blue-101 hover:bg-se-light-green-100 active:bg-se-dark-green-100
					relative flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded
					px-3 py-5 text-lg font-bold
					text-white no-underline hover:no-underline md:w-auto"
			>

				<span class="hidden md:block md:leading-[normal]">{buttonText}</span>
			</button>
		</div>
	</div>
{/if}

<style>
	.svgColor {
		filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7475%) hue-rotate(44deg)
			brightness(97%) contrast(111%);
	}

	.icon-filter {
		filter: brightness(0) saturate(100%) invert(25%) sepia(90%) saturate(3618%) hue-rotate(131deg)
			brightness(92%) contrast(101%);
	}
</style> -->
