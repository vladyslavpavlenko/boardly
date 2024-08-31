<script>
	export let speed = 65;
	export let customClass = '';
	export let customStyle = '';

	let quotes = [
		{
			text: `"It's not whether you win or lose, it's how you play the game."`,
			author: 'Anonymous'
		},
		{
			text: `"When you play the game of thrones, you win or you die."`,
			author: 'Cersei Lannister, Game of Thrones'
		},
		{
			text: `"Life is a game. All you have to do is know how to play it."`,
			author: 'Albert Einstein'
		},
		{ text: `"In the game of life, the rules keep changing."`, author: 'Anonymous' },
		{ text: `"The dice are waiting for your roll!"`, author: 'Anonymous' },
		{ text: `"Strategy without tactics is the slowest route to victory."`, author: 'Sun Tzu' }
	];

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	quotes = shuffle(quotes);
</script>

<div
	class={`w-full bg-gray-900 text-white py-2 overflow-hidden relative ${customClass}`}
	style={customStyle}
>
	<div
		class="running-line flex items-center space-x-8 marquee-content"
		style="animation-duration: {speed}s;"
	>
		{#each quotes as { text, author }}
			<span>{text} - {author}</span>
		{/each}

		{#each quotes as { text, author }}
			<span>{text} - {author}</span>
		{/each}
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.running-line {
		display: flex;
		width: 200%;
		animation: marquee linear infinite;
	}

	.marquee-content {
		display: flex;
		white-space: nowrap;
	}
</style>
