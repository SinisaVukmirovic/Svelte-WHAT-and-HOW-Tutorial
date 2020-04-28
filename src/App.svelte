<script>
	import StartUp from './components/StartUp.svelte';
	import Variables from './components/Variables.svelte';
	import Reactivity from './components/Reactivity.svelte';
	import PropsComponent from './components/props/PropsComponent.svelte';
	import LogicBlocks from './components/LogicBlocks.svelte';
	import AwaitBlock from './components/AwaitBlock.svelte';
	import DomEvents from './components/DomEvents.svelte';
	import Bindings from './components/Bindings.svelte';
	import Destroy from './components/lifeCycle/Destroy.svelte';
	import BeforeAfterUpdate from './components/lifeCycle/BeforeAfterUpdate.svelte';

	// Destroy
	let showCounter = false;
</script>

<main>
	<StartUp />
	<hr>
	<Variables />
	<hr>
	<Reactivity />
	<hr>
	<PropsComponent />
	<hr>
	<LogicBlocks />
	<hr>
	<AwaitBlock />
	<hr>
	<DomEvents />
	<hr>
	<Bindings />
	<hr>
	<!-- Destroy -->
	<h2>Life Cycles</h2>
	<p class="subtitle">On Destroy Method</p>
	{#if showCounter}
		<Destroy />
	{/if}
	<button on:click={() => showCounter = !showCounter}>Show Count</button>
	<hr>
	<BeforeAfterUpdate />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		/* max-width: 240px; */
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

	:global(p.subtitle) {
		font-weight: bold;
		color: #ff3e00;
		font-size: 1.5rem;
	}
</style>