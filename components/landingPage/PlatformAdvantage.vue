<script setup>
import { AdjustmentsVerticalIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const options=ref([
  {
    title:'Access',
    image:'pd.png',
    desc:`This is an endless virtual assistant and evolution is the main subject of DUMMY. It's an independent product that can operate in any environment that the consumers like and continues to live with the consumer`,
  },
  {
    title:'Access',
    image:'pd.png',
    desc:`This is an endless virtual assistant and evolution is the main subject of DUMMY. It's an independent product that can operate in any environment that the consumers like and continues to live with the consumer`,
  }, {
    title:'Access',
    image:'pd.png',
    desc:`This is an endless virtual assistant and evolution is the main subject of DUMMY. It's an independent product that can operate in any environment that the consumers like and continues to live with the consumer`,
  }, {
    title:'Access',
    image:'pd.png',
    desc:`This is an endless virtual assistant and evolution is the main subject of DUMMY. It's an independent product that can operate in any environment that the consumers like and continues to live with the consumer`,
  },
]);

</script>

<template>
  <section >
    <LandingPageTitleSection image title="Platform Advantage">
      <template #icon>
			<AdjustmentsVerticalIcon class="mx-auto text-indigo-700 h-16 w-16"/>

			

		</template>
      <template #desc>
        Participants of our platform gain six major competitive advantages:
      </template>
    </LandingPageTitleSection>
     
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="flex flex-col items-center justify-center text-center" v-for="(item,key) in options">
          
            <img :src="`/images/${item.image}`" alt="" class="mx-auto bg-white shadow-xl shadow-pink-800 rounded-full p-3" width="90" height="90" 
            >
						<h3 class="my-3 text-indigo-700 text-2xl font-bold">{{item.title}}</h3>
						<p class="text-slate-500 text-sm">{{ item.desc }}</p>
			
					</div>


      </div>
      </div>
    
  </section>

</template>

