<script>
	// Exported variables for dynamic content
	import EventCard from '$lib/components/EventCard/EventCard.svelte';

	export let profilePicture = "/path/to/default-profile.png";
	export let userName = "John Doe";
	export let hostedGames = [
		{ title: "Catan Night", date: "August 20, 2024", location: "John's House" },
		{ title: "Monopoly Madness", date: "July 15, 2024", location: "Community Center" },
	];
	export let attendedGames = [
		{ title: "Chess Tournament", date: "June 10, 2024", host: "Jane Smith" },
		{ title: "Scrabble Showdown", date: "May 25, 2024", host: "Michael Johnson" },
	];
	export let bio = "A passionate board game enthusiast who loves strategy games and organizing game nights for friends and family.";
	export let contactInfo = {
		email: "john.doe@example.com",
		phone: "+1-555-555-5555",
		location: "San Francisco, CA"
	};
</script>

<section class="min-h-screen py-20">
	<!-- Profile Section -->
	<div class="max-w-4xl mx-auto p-8 rounded-lg">
		<div class="flex flex-col items-center text-center mb-8">
			<img src={profilePicture} alt="Profile" class="size-44 rounded-full object-cover mb-6 border border-gray-300" />
			<h1 class="text-4xl font-bold">{userName}</h1>
			<p class="text-gray-600 mt-2 w-3/4">{bio}</p>
		</div>

		<!-- Hosted Games Section -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold mb-4">Hosted Games</h2>
			<ul class="space-y-4">
				<EventCard />
				{#each hostedGames as game}
					<li class="p-4 bg-gray-50 rounded-lg shadow-sm">
						<h3 class="text-xl font-bold">{game.title}</h3>
						<p class="text-gray-700">Date: {game.date}</p>
						<p class="text-gray-700">Location: {game.location}</p>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Attended Games Section -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold mb-4">Attended Games</h2>
			<ul class="space-y-4">
				{#each attendedGames as game}
					<li class="p-4 bg-gray-50 rounded-lg shadow-sm">
						<h3 class="text-xl font-bold">{game.title}</h3>
						<p class="text-gray-700">Date: {game.date}</p>
						<p class="text-gray-700">Hosted by: {game.host}</p>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Contact Information Section -->
		<div>
			<h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
			<p class="text-gray-700"><strong>Email:</strong> {contactInfo.email}</p>
			<p class="text-gray-700"><strong>Phone:</strong> {contactInfo.phone}</p>
			<p class="text-gray-700"><strong>Location:</strong> {contactInfo.location}</p>
		</div>
	</div>
</section>

<style>
    /* Custom styles can be added here if necessary */
</style>