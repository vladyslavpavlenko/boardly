<script lang="ts">
	import type { PageData } from './$types'
	import EventCard from '$lib/components/EventCard/EventCard.svelte';

	export let data: PageData

	const hostedEvents = data.user?.hostedEvents.map(event => ({
		title: event.title,
		date: new Date(event.date).toLocaleDateString(),
		location: event.location ? event.location.address : 'Unknown Location',
	}));

	const attendedEvents = data.user?.attendedEvents.map(attendee => ({
		title: attendee.event.title,
		date: new Date(attendee.event.date).toLocaleDateString(),
	}));
</script>

<section class="min-h-screen py-20">
	<!-- Profile Section -->
	<div class="max-w-4xl mx-auto p-8 rounded-lg">
		<div class="flex flex-col items-center text-center mb-8">
			<img
				src={data.user?.avatar}
				alt="Profile"
				class="size-44 rounded-full object-cover mb-6 border border-gray-300"
			/>
			<h1 class="text-4xl font-bold">{data.user?.name}</h1>
			{#if data.user?.bio}
				<p class="text-gray-600 mt-2 w-3/4">{data.user?.bio}</p>
			{/if}

			<!-- Contact Information Section -->
			<div class="flex flex-row gap-7 mt-3">
				<p class="text-gray-700"><strong>Email:</strong> {data.user?.email}</p>
				<p class="text-gray-700"><strong>Location:</strong> {data.user?.location?.city}</p>
			</div>
		</div>

		<!-- Hosted Games Section -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold mb-4">Hosted Games</h2>
			<div class="grid gap-4">
				{#each hostedEvents as event}
					<EventCard event={event}/>
				{/each}
			</div>
		</div>

		<!-- Attended Games Section -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold mb-4">Attended Games</h2>
			<div class="grid gap-4 grid-rows-2">
				{#each attendedEvents as event}
					<EventCard event={event}/>
				{/each}
			</div>
		</div>
	</div>
</section>
