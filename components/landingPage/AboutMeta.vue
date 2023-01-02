<script setup>
import { PlusIcon,CheckBadgeIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const options = ref([
{
    desc:'Web3 is an idea for a new iteration of the World Wide Web based on blockchains, which incorporates concepts including decentralization and token-based'
  }, {
    desc:'Web3 is an idea for a new iteration of the World Wide Web based on blockchains, which incorporates concepts including decentralization and token-based'
  }, {
    desc:'Web3 is an idea for a new iteration of the World Wide Web based on blockchains, which incorporates concepts including decentralization and token-based'
  }, {
    desc:'Web3 is an idea for a new iteration of the World Wide Web based on blockchains, which incorporates concepts including decentralization and token-based'
  },
])

</script>

<template>
  <section >
    <LandingPageTitleSection image title="What about the metaverse">
      <template #icon>
        <PlusIcon class="mx-auto text-indigo-700 h-16 w-16"/>
      </template>
      <template #desc>
        Web3 and metaverse are not the same
      </template>
    </LandingPageTitleSection>
     
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div >
						<img class="mx-auto w-full" src="/images/whatabout.png"/>
					</div>
          <div >
            <div v-for="(item,key) in options" class="flex items-center flex-row justify-center mb-4">
                <div class=" shadow-xl shadow-pink-400 p-4 mr-3 bg-indigo-700 rounded-full">
                  <CheckBadgeIcon class="h-10 w-10 stroke-white " aria-hidden="true" />
                </div>
                  <div class="text-slate-500 text-sm">{{ item.desc }}</div>
              </div>

					</div>

      </div>
      </div>
    
  </section>

</template>

