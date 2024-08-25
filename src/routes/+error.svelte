<svelte:head>
	<title>Error</title>
	<meta name="description" content="Something went wrong" />
</svelte:head>

<script>
	import { Section, Page404 } from 'flowbite-svelte-blocks';
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center h-[700px]">
	<Section name="page404">
		<Page404>
			<svelte:fragment slot="h1">{$page.status}!</svelte:fragment>
			<svelte:fragment slot="paragraph">
				<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Uh-oh, it seems the dice didn't<br> roll in our favor...</p>
				<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{$page.error?.message}</p>
			</svelte:fragment>
		</Page404>
	</Section>
</div>