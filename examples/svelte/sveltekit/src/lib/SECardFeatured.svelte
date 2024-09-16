<!-- <script lang="ts">
	import { getWebpImageFormat } from '@se/common/utils';
	import type { ZoomAnimationParams } from '@se/common/src/actions/zoomAnimation/types';
	import zoom from '@se/common/src/actions/zoomAnimation/zoom';
	import ArrowIcon from '../../../carousel/ArrowIcon.svelte';
	import { twMerge } from 'tailwind-merge';
	import ContentOverlay from './ContentOverlay.svelte';
	import Typography from '@se/common/src/components/typography/Typography.svelte';

	export let author: string | undefined;
	export let type: string | undefined;
	export let chipTitle: string | undefined;
	export let createdAt: string | undefined;
	export let image: string | undefined;
	export let readingTime: string | undefined;
	export let shortDescription: string | undefined;
	// export let title: string | undefined;
	export let url: string | undefined;
	export let zoomParams: ZoomAnimationParams;
	export let noLineClamp: boolean = false;
	export let cardGradient: boolean = false;

	let open = false;

	const handleClick = (event: Event) => {
		open = !open;
	};

	$: titleCustomClass = `${noLineClamp ? '' : 'line-clamp-3'}`;

	$: image = getWebpImageFormat(image);
</script>

<div class="group relative overflow-hidden">
	<a
		href={url}
		class="card relative flex h-[446px] w-[255px] flex-col items-center overflow-hidden rounded-lg hover:no-underline md:h-[446px] md:w-[255px]"
		target="_self"
	>
		<div
			use:zoom={zoomParams}
			class="absolute h-full w-full bg-cover bg-no-repeat"
			style="background-image: url({image});"
		/>

		{#if cardGradient}<div class="card-gradient absolute h-full w-full" />{/if}

		<div class="z-[1] w-full rounded-t p-4 md:p-6">
			<div class="flex items-center justify-between">
				<Typography
					tag="h3"
					type="custom"
					className={`text-m md:text-xl mb-2 md:mb-6 mt-0 font-bold transition-transform text-white ${titleCustomClass}`}
				>
					{title}
				</Typography>
			</div>
		</div>

		<ContentOverlay
			{author}
			{title}
			{chipTitle}
			{createdAt}
			{open}
			{readingTime}
			{shortDescription}
			{type}
		/>
	</a>

	<button
		on:click={handleClick}
		class="absolute bottom-4 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full bg-white p-3 shadow-[0_0_40px_0_rgba(0,0,0,0.15)] transition-all duration-150 hover:!scale-110 md:hidden"
	>
		<ArrowIcon class={twMerge('transform', open ? 'rotate-90' : '-rotate-90')} />
	</button>
</div>

<style lang="postcss">
	.card-gradient {
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 95.89%);
	}
</style> -->
