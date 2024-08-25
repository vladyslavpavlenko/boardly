<script>
	import {
		Navbar,
		NavBrand,
		NavUl,
		NavHamburger,
		NavLi,
		Button,
	} from 'flowbite-svelte';
</script>

<nav class="p-6">
	<Navbar class="fixed top-4 left-4 right-4 mx-auto max-w-full lg:max-w-[1400px] rounded-2xl z-50 backdrop-filter backdrop-blur-md bg-opacity-85 border border-gray-200">
		<NavBrand href="/">
			<img src="/src/lib/images/boardly-logo.svg" class="me-3 m-1 h-9 sm:h-9" alt="Boardly Logo" />
			<span class="hidden md:inline self-center whitespace-nowrap text-2xl font-medium dark:text-white">boardly</span>
		</NavBrand>
		<div class="flex md:order-2">
			<div class="flex gap-4">
				<Button href="/login" size="sm" color="none" class="text-lg border-0 hover:underline underline-offset-2 hover:text-current">Log in</Button>
				<Button href="/signup" class="text-lg" color="dark">Sign up</Button>
			</div>
			<NavHamburger />
		</div>
		<NavUl class="order-1">
			<NavLi href="/about" class="hover:underline underline-offset-2 text-lg hover:text-current">About</NavLi>
			<NavLi href="/explore" class="hover:underline underline-offset-2 text-lg hover:text-current">Explore</NavLi>
		</NavUl>
	</Navbar>
</nav>