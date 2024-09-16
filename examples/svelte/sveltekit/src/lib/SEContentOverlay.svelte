<!-- <script lang="ts">
	import Chip from '../../../chip/Chip.svelte';
	import { twMerge } from 'tailwind-merge';

	export let author: string | undefined;
	export let type: string | undefined;
	export let chipTitle: string | undefined;
	export let createdAt: string | undefined;
	export let readingTime: string | undefined;
	export let shortDescription: string | undefined;
	export let title: string | undefined;
	export let open: boolean;
</script>


<div
	class={twMerge(
		'absolute left-0 top-0 z-[1] h-full w-full translate-y-full transform rounded-lg bg-white p-6 transition-transform duration-300 ease-in-out',
		open && 'translate-y-se3',
		'lg:group-hover:translate-y-se3'
	)}
>
	{#if type}
		<p class="text-theme-primary-color text-sm font-medium">
			{type}
		</p>
	{/if}
	<div class="h3 text-theme-heading-color mb-4 mt-0 line-clamp-3 text-xl font-bold">
		{title ?? ''}
	</div>
	{#if shortDescription}
		<p class="text-theme-text-color mb-8 line-clamp-5 text-base font-medium">
			{shortDescription}
		</p>
	{/if}
	<p class="text-theme-primary-color text-sm font-medium">
		{author ?? ''}
	</p>
	<p class="text-theme-text-color mb-4 flex items-center text-sm font-medium">
		<span>{createdAt ?? ''}</span>
		{#if readingTime}
			<span class="mx-1.5">•</span>
			<span>{readingTime}</span>
		{/if}
	</p>
	{#if chipTitle}
		<Chip title={chipTitle} color="primaryGreen" />
	{/if}
</div> -->
