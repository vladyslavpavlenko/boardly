<script>
	import Header from '$lib/components/Navbar/Navbar.svelte';
	import '../app.css';
	import { Footer } from 'flowbite-svelte';
</script>

<div class="m-6 font-sans">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>