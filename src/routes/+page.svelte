<!-- <script lang="ts">
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
</script>
 

<Button onclick={toggleMode} variant="outline" size="icon">
 <SunIcon
  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
 />
 <MoonIcon
  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
 />
 <span class="sr-only">Toggle theme</span>
</Button> -->

<script lang="ts">

    // script imports
    import { particlesInit } from "@tsparticles/svelte";
    import { onMount } from "svelte";
    import { loadFull } from "tsparticles";

    // font+icon imports
    import "@fontsource-variable/space-grotesk";
    import HomeIcon from "@lucide/svelte/icons/home";
    import LinkedinIcon from "@lucide/svelte/icons/linkedin";
    import GithubIcon from "@lucide/svelte/icons/github";
    import MailIcon from "@lucide/svelte/icons/mail";

    // component imports
    import { Button } from "$lib/components/ui/button/index.js";
    import SmoothCursor from "$lib/components/ui/smooth-cursor/SmoothCursor.svelte";

    // TASK: remove useless imports
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import Dock from "$lib/components/ui/dock/Dock.svelte";
    import DockIcon from "$lib/components/ui/dock/DockIcon.svelte";
    import { toggleMode } from "mode-watcher";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";

    // tsParticles setup
    let ParticlesComponent: any;
    onMount(async () => {
        const module = await import("@tsparticles/svelte");
        ParticlesComponent = module.default;
    });
    let particlesUrl = "/particles.json"; // located in static folder
    let onParticlesLoaded = (event: any) => {
        const particlesContainer = event.detail.particles;
        console.log("Loaded tsParticles:", particlesContainer);
    };
    void particlesInit(async (engine) => {
        await loadFull(engine);
    });

    let letItSnow = () => {
        particlesUrl = "/particles_copy.json";
    };

</script>


<!-- tsParticles background -->

<svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    class="absolute inset-0 -z-10"
    url={particlesUrl}
    on:particlesLoaded={onParticlesLoaded}
/>

<!-- SMOOTH CURSOR (DND) -->
<!-- <SmoothCursor/> -->

<!-- Navigation Bar -->
<nav class="fixed top-0 left-0 w-full p-5 flex justify-items-center z-10 space-grotesk bg-black/30 backdrop-blur-md">
    <div class="m-auto">
        <a href="/" class="border-b-2 border-blue-600 hover:bg-blue-500/30 transition-colors mr-5">
            <span class="text-lg font-medium">Home</span>
        </a>
        <a href="#about" class="mr-5 text-gray-400 border-b border-transparent hover:border-blue-600 hover:bg-blue-500/30 transition-colors">
            <span class="text-lg font-medium">About</span>
        </a>
        <a href="#projects" class="mr-5 text-gray-400 border-b border-transparent hover:border-blue-600 hover:bg-blue-500/30 transition-colors">
            <span class="text-lg font-medium">Projects</span>
        </a>
        <a href="#blog" class="text-gray-400 border-b border-transparent hover:border-blue-600 hover:bg-blue-500/30 transition-colors">
            <span class="text-lg font-medium">Blog</span>
        </a> 
    </div>
</nav> 


<div class="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div class="flex w-full max-w-4xl flex-col gap-0.5">
        <h1 class="text-7xl space-grotesk font-bold mb-4 from-blue-500 to-purple-700 text-gradient">Sameer Haritasa</h1>
        <p class="mb-4 text-gray-200">
            CS @ UML &#8226; Full-Stack Developer &#8226; AI/ML Enthusiast
        </p>
        <p class="max-w-3xl text-gray-400 font-mono italic text-sm mb-7 transition-colors">
            /s̪əmiːɾə ɦɑːɾiːt̪əs̪ə/
        </p>
        <div class="items-start">
            <a
                href="https://www.linkedin.com/in/sameeramurthy/"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-neutral-800 hover:bg-neutral-900 text-white px-4 py-3 transition-colors mr-1">
                <LinkedinIcon class="fill-blue-500 stroke-blue-500 inline-block w-4 h-4"/>
            </a>
            <a
                href="https://github.com/SameeraMurthy"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-neutral-800 hover:bg-neutral-900 text-white px-4 py-3 transition-colors mr-1">
                <GithubIcon class="fill-gray-900 stroke-gray-50 inline-block w-4 h-4"/>
            </a>
            <a
                href="mailto:sameera.haritasa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-neutral-800 hover:bg-neutral-900 text-white px-4 py-3 transition-colors mr-1">
                <MailIcon class="stroke-gray-50 inline-block w-4 h-4"/>
            </a>
            <!-- <button
                type="button"
                onclick={snow}
                class="rounded-full bg-neutral-800 hover:bg-neutral-900 text-white px-4 py-3 transition-colors mr-1">
                <MailIcon class="stroke-gray-50 inline-block w-4 h-4"/>
            </button> -->
    </div>
    </div>
</div>