<script setup>
import { MapIcon } from '@heroicons/vue/24/outline'

</script>

<template>
  <section >
    <LandingPageTitleSection image title="Road Map">
      <template #icon >
        <MapIcon class="mx-auto text-indigo-700 h-16 w-16"/>
      </template>
      <template #desc>
        Phases of the Continuous Improvement Process
      </template>
    </LandingPageTitleSection>
     
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="flex flex-col align-middle text-center">
            <img class="mx-auto bg-white shadow-md rounded-full p-3" width="90" src="/images/pd.png">
						<h3 class="my-2 text-indigo-700 text-2xl font-bold">Access</h3>
						<p class="text-slate-500 text-sm">This is an endless virtual assistant and evolution is the main subject
							of DUMMY. It's an independent product that can operate in any environment that the consumers
							like and continues to live with the consumer </p>
			
					</div>


      </div>
      </div>
    
  </section>

</template>

