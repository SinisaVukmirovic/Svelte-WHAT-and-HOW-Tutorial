<script>
	import StartUp from './components/StartUp.svelte';
	import Variables from './components/Variables.svelte';
	import Reactivity from './components/Reactivity.svelte';
</script>

<main>
	<StartUp />
	<hr>
	<Variables />
	<hr>
	<Reactivity />
	<hr>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(h1) {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>