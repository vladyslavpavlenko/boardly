<script lang="ts">
	import { Section } from 'flowbite-svelte-blocks';
	import { Button, Label, Input } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Log in</title>
	<meta name="description" content="Log into Boardly" />
</svelte:head>

<div class="text flex flex-col items-center justify-center h-[740px]">
	<Section name="login">
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form class="flex flex-col space-y-3" action="/">
				<h3 class="text-center text-xl font-medium text-gray-900 dark:text-white p-0">Sign up</h3>
				<Label class="space-y-2 text-lg">
					<span>Your Name</span>
					<Input size="lg" class="font-normal" type="email" name="text" required />
				</Label>
				<Label class="space-y-2 text-lg">
					<span>Email</span>
					<Input
						size="lg"
						class="font-normal"
						type="email"
						name="email"
						placeholder="name@example.com"
						required
					/>
				</Label>
				<Label class="space-y-2 text-lg">
					<span>Password</span>
					<Input
						size="lg"
						class="font-normal"
						type="password"
						name="password"
						placeholder="••••••••"
						required
					/>
				</Label>
				<Button type="submit" size="lg" class="w-full">Sign up</Button>
				<div class="w-1/5 place-self-center py-2">
					<hr />
				</div>
				<Button type="submit" size="lg" color="light" class="w-full">Continue with Google</Button>
				<p class="text-lg text-center font-light text-gray-500 dark:text-gray-400">
					Already have an account? <a
						href="/login"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a
					>
				</p>
			</form>
		</div>
	</Section>
</div>
