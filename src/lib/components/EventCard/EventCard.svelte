<script lang="ts">
	import { Avatar, Card } from 'flowbite-svelte';
	import type { Event } from '@prisma/client';

	export let event: Event;
</script>

<Card href={`/explore/events/${event.id}`} class="shadow-none hover:-translate-y-1 hover:border-gray-300 border hover:bg-gray-50 border-gray-200 rounded-2xl">
	<!-- Event Date and Time -->
	<p class="font-normal text-gray-500 dark:text-gray-400 mb-1 capitalize font-mono leading-tight">
		● {event.date}
	</p>

	<!-- Event Title -->
	<h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
		{event.title}
	</h5>

	<!-- Event Location -->
	<p class="font-normal text-gray-500 dark:text-gray-400 mb-4 mt-1 leading-tight">
		{event.location}
	</p>

	<!-- Event Description -->
	{#if event.description}
		<p class="font-normal text-black">
			{event.description}
		</p>
	{/if}

	<!-- Placeholder for Avatars of Attendees -->
	<div class="flex ms-4 mt-4">
		<Avatar src="https://flowbite-react.com/images/people/profile-picture-2.jpg" size="sm" stacked />
		<Avatar src="https://flowbite-react.com/images/people/profile-picture-2.jpg" size="sm" stacked />
		<Avatar src="https://flowbite-react.com/images/people/profile-picture-2.jpg" size="sm" stacked />
		<Avatar stacked href="/" size="sm" class="bg-gray-100 text-black hover:bg-gray-200 text-sm">+3</Avatar>
	</div>
</Card>