<script setup>
import { DocumentMagnifyingGlassIcon } from '@heroicons/vue/24/outline'

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
  <section>
    <LandingPageTitleSection image title="Research & Development">
      <template #icon>
        <DocumentMagnifyingGlassIcon class="mx-auto text-indigo-700 h-16 w-16"/>

        


      </template>
      <template #desc>
        Better Together
      </template>
    </LandingPageTitleSection>
    
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        
          <div >
            <p class="text-slate-500">
                Interested in <strong class="text-indigo-700">DUMMYLAND</strong> but don't know where to start? Tell us a little bit about yourself and we’ll make sure you 
            </p>
            <ul class="text-indigo-700  my-4">
                <li>Start building innovative solutions with DUMMYLAND</li>
                <li>Read the Documentation</li>
                <li>Attach your CV</li>
            </ul>
            <div class="flex flex-col">
                <div class="flex items-center mb-3">
                    <span class="w-6 h-6 bg-indigo-700 shadow-xl shadow-pink-800 rounded-full border-4 border-white mr-3"></span>
                    <strong class="text-indigo-700">Developing</strong>
                </div>
                <div class="flex items-center mb-3">
                    <span class="w-6 h-6 bg-indigo-700 shadow-xl shadow-pink-800 rounded-full border-4 border-white mr-3"></span>
                    <strong class="text-indigo-700">Researching</strong>
                </div>
                <div class="flex items-center mb-3">
                    <span class="w-6 h-6 bg-indigo-700 shadow-xl shadow-pink-800 rounded-full border-4 border-white mr-3"></span>
                    <strong class="text-indigo-700">Innovating</strong>
                </div>
                <p class="text-sm text-slate-500">
                    Let's start a conversation
            </p>
            <a href="#" class="mt-4 shadow-xl shadow-pink-400 bg-indigo-700 py-3 px-5 inline-block self-start text-white rounded-md">Join us</a>

            </div>
            

					</div>
          <div class="relative -mr-40 ml-40 pl-40 md:inline hidden" >
						<img class="absolute right-0 top-0  w-full" src="/images/research.png"/>
					</div>
      </div>
      </div>
    
  </section>

</template>

