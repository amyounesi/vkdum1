<script setup>
import { PlusIcon,CheckBadgeIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const options = ref([
{
    desc:'to aid governments in helping displaced people',
    image:'dmy.png',
  }, {
    desc:'to help people with disabilities access information',
    image:'dmy.png',

  }, {
    desc:"to teach children who don't have access to education",
    image:'dmy.png',
  }, {
    desc:'to make a better world for everyone Who Wants to Make a Difference',
    image:'dmy.png',
  },
])
</script>

<template>
  <section >
    <LandingPageTitleSection image title="Why do we need Digital Human Twins?">
      <template #icon>
        <img src="/images/pfp.png" alt="" class="mx-auto mb-2 h-20 w-20 p-1" >
      </template>
      <template #desc>
        Creating New Value Beyond the Constraints of the Real World
      </template>
    </LandingPageTitleSection> 
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div >
						<img class="mx-auto w-full" src="/images/whatabout.png"/>
					</div>
          <div >
            <div v-for="(item,key) in options" class="flex items-center flex-row  mb-4">
              <img :src="`/images/${item.image}`" alt="" class="mr-2 h-12 w-12 bg-indigo-700 shadow-xl shadow-pink-300 rounded-full p-1" >
                  <div class="text-slate-500 text-lg">{{ item.desc }}</div>
              </div>
					</div>
      </div>
      </div>
  </section>
</template>

