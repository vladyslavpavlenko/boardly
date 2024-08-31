<script>
	import RunningLine from '$lib/components/RunningLine/RunningLine.svelte';
</script>

<svelte:head>
	<title>Boardly - Hop In!</title>
	<meta name="description" content="Find your next board game group with Boardly." />
</svelte:head>

<section class="flex flex-col items-center justify-center text-center">
	<div class="my-56 flex flex-col items-center">
		<img src="/src/lib/images/location-color.png" alt="Location Icon" class="h-32 mb-2" />
		<h2 class="text-5xl font-extrabold mt-4 mb-6">Join a Game, Meet Friends</h2>
		<p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
			Boardly connects you with fellow board game enthusiasts nearby. Whether you're into strategy
			games, party games, or classics, find your perfect match and roll the dice together.
		</p>
		<div class="flex gap-4 justify-center">
			<a
				href="/explore"
				class="px-8 py-4 bg-gray-800 text-white text-lg font-medium rounded-full hover:bg-gray-700"
				>Explore Games</a
			>
			<a
				href="/virtual"
				class="px-8 py-4 bg-transparent text-lg font-medium text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white"
				>Host a Game</a
			>
		</div>
	</div>

	<RunningLine customClass="rotate-1" />

	<section class="w-full bg-white py-40">
		<h3 class="text-4xl font-bold mb-12">Why Boardly?</h3>
		<div
			class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
		>
			<div class="flex flex-col items-center">
				<img
					src="/src/lib/images/chat-bubble-color.png"
					alt="Community Icon"
					class="h-32 mb-2 hover:rotate-6"
				/>
				<h4 class="text-2xl font-semibold mb-2">Strong Community</h4>
				<p class="text-gray-600">
					Join a thriving community of board game lovers. Find new friends and enjoy games together.
				</p>
			</div>

			<div class="flex flex-col items-center">
				<img
					src="/src/lib/images/chess-color.png"
					alt="Selection Icon"
					class="h-32 mb-2 hover:rotate-6"
				/>
				<h4 class="text-2xl font-semibold mb-2">Wide Game Selection</h4>
				<p class="text-gray-600">
					From modern hits to timeless classics, discover a wide variety of games tailored to your
					preferences.
				</p>
			</div>

			<div class="flex flex-col items-center">
				<img
					src="/src/lib/images/map-pin-color.png"
					alt="Location Icon"
					class="h-32 mb-2 hover:rotate-6"
				/>
				<h4 class="text-2xl font-semibold mb-2">Virtual & In-Person</h4>
				<p class="text-gray-600">
					Play in person or join a virtual game from the comfort of your home. Flexible options for
					all.
				</p>
			</div>
		</div>
	</section>

	<RunningLine customClass="-rotate-1" speed={90} />
</section>
