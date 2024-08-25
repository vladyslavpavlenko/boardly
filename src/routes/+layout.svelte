<script>
	import Header from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import '../app.css';
</script>

<div class="font-sans min-h-screen bg-gradient-to-bl from-white via-primary-100 to-white relative overflow-hidden">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>