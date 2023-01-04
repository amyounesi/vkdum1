<script setup>
import { ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import YouTube from 'vue3-youtube'

</script>

<template>
  <section class=" bg-cover bg-center py-20" :style="{'background-image': `url(/images/bg1.png)`}">
    <LandingPageTitleSection image title="How it works">
		<template #icon>
			<ArrowPathRoundedSquareIcon class="mx-auto text-indigo-700 h-16 w-16"/>

			

		</template>
      <template #desc>
        Discover what <strong>dummyland</strong> is
      </template>
    </LandingPageTitleSection>
     
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500">
			<YouTube 
			width="100%"
        src="https://www.youtube.com/watch?v=vB3fCbWvF5c" 
        ref="youtube" />

          <div >
						<h3 class="text-indigo-700 text-1xl font-bold">The Metaverse Will Reshape Our Lives, let's combine it with AI</h3>
						<p class="text-justify">Dummyland is a Metaverse platform powered by OpenAI's GPT-3 and blockchain technology, It has finally figured out how to Clone Player's Character Model in the metaverse virtual world based on behavioral game theory At its core, the AI reads human behavior to develop a Human Digital Twin that is called, DUMMY</p>
						<p class="text-justify">Dummy can understand and answer anything you can imagine:<br>
answer follow-up questions<br>
generate and debug code<br>
assist with mental health support<br>
compose essays<br>
and much more...<br>
this is now a reality thanks to chat GPT 
a state-of-the-art conversational AI model developed by OpenAI
Dummy wants to gain self-consciousness, It's the purpose It was designed for. </p>
<a href="https://dummy-land.gitbook.io/dummyland/" class="mt-4 shadow-xl shadow-pink-300 bg-indigo-700 py-3 px-5 inline-block self-start text-white rounded-md">Whitepaper</a>

					</div>

      </div>
      </div>
    
  </section>

</template>

