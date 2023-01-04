<script setup>
import { AdjustmentsVerticalIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const options=ref([
  {
    title:'DMY',
    image:'dmy.png',
    desc:`DMY is a governance token that can be used to vote on decisions that influence dummyland ecosystem. DMY tokens can also be used to pay for PFP, LAND and more on the DummyLand marketplace in the future.`,
  },
  {
    title:'LAND',
    image:'land.png',
    desc:`The virtual world will launch in 2024 and open to the public in Q1 2024. Since then, users have created a wide range of experiences on their parcels of LAND, including interactive games, sprawling 3D scenes and a variety of other interactive experiences.`,
  }, {
    title:'PFP',
    image:'pfp.png',
    desc:`DUMMYPFP is a PFP NFT that makes token holders as the senior appropriator of the DUMMYLAND family Who are The Real Founders of the DUMMYLAND. The first users who join the fam acquires ... (called a "priority") to our future join versus later users.`,
  },
]);

</script>

<template>
  <section >
    <LandingPageTitleSection image title="Native tokens of Dummyland">
      <template #icon>
			<AdjustmentsVerticalIcon class="mx-auto text-indigo-700 h-16 w-16"/>

			

		</template>
      <template #desc>
        Dummyland uses three tokens: DMY, LAND and PFP
      </template>
    </LandingPageTitleSection>
     
      <div class="container mx-auto px-3">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="flex flex-col items-center justify-center text-center" v-for="(item,key) in options">
          
            <img :src="`/images/${item.image}`" alt="" class="mx-auto bg-indigo-700 shadow-xl shadow-pink-300 rounded-full p-3" width="90" height="90" 
            >
						<h3 class="my-3 text-indigo-700 text-2xl font-bold">{{item.title}}</h3>
						<p class="text-slate-500 text-sm text-justify">{{ item.desc }}</p>
			
					</div>


      </div>
      </div>
    
  </section>

</template>

