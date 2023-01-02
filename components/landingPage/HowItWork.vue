<script setup>
import { ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import YouTube from 'vue3-youtube'

</script>

<template>
  <section class="bg-contain bg-center py-20" :style="{'background-image': `url(/images/bg1.png)`}">
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
						<h3 class="text-indigo-700 text-1xl font-bold">DUMMYLAND support you across the entire engagement
							lifecycle</h3>
						<p class="">This is an endless virtual assistant and evolution is the main subject
							of DUMMY. It's an independent product that can operate in any environment that the consumers
							like and continues to live with the consumer </p>
						<p class="">Blockchain and artificial intelligence (AI) have evolved into leading
							technologies that power innovation across almost every industry. DUMMYLAND is a combination
							of these two technology. </p>

					</div>

      </div>
      </div>
    
  </section>

</template>

