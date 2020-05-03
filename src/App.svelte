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
	import Writable from './components/store/Writable.svelte';
	import Readable from './components/store/Readable.svelte';
	import Props from './components/slots/Props.svelte';
	import Slots from './components/slots/Slots.svelte';
	// context
	import { setContext } from 'svelte';
	import Showcase from './components/context/Showcase.svelte';
	import Tween from './components/motion/Tween.svelte';
	import Spring from './components/motion/Spring.svelte';
	import FadeInOut from './components/transitions/FadeInOut.svelte';

	// Destroy
	let showCounter = false;

	// Context
	let ShowcaseImgs = [
        'http://cdn.dota2.com/apps/dota2/images/heroes/keeper_of_the_light_hphover.png?v=5832821',
        'http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_hphover.png?v=5832821',
        'http://cdn.dota2.com/apps/dota2/images/heroes/windrunner_hphover.png?v=5832821',
        'http://cdn.dota2.com/apps/dota2/images/heroes/enigma_hphover.png',
        'http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png',
        'http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_hphover.png?v=5832821',
        'http://cdn.dota2.com/apps/dota2/images/heroes/axe_hphover.png?v=5832821',
        'http://cdn.dota2.com/apps/dota2/images/heroes/pudge_hphover.png?v=5832821',
        'http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png?v=5832821',
		'http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png?v=5832821',
		'http://cdn.dota2.com/apps/dota2/images/heroes/sniper_hphover.png?v=5832821',
		'http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_hphover.png?v=5832821',
		'http://cdn.dota2.com/apps/dota2/images/heroes/razor_hphover.png?v=5832821',
		'http://cdn.dota2.com/apps/dota2/images/heroes/templar_assassin_hphover.png?v=5832821',
		'http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png?v=5832821'
	];
	
	setContext('ShowcaseImgs', ShowcaseImgs);

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
	<!-- Destroy section -->
	<h2>Life Cycles</h2>
	<p class="subtitle">On Destroy Method</p>
	{#if showCounter}
		<Destroy />
	{/if}
	<button on:click={() => showCounter = !showCounter}>Show Count</button>
	<!-- end of destroy section -->
	<hr>
	<BeforeAfterUpdate />
	<hr>
	<!-- Store section -->
	<Writable />
	<hr>
	<Readable />
	<hr>
	<Props />
	<hr>
	<Slots />
	<hr>
	<!-- Context -->
	<Showcase />
	<Tween />
	<hr>
	<p class="subtitle">Spring</p>
	<Spring />
	<hr>
	<FadeInOut />
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