
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Play', href: '/play' },
  { name: 'About us', href: '/about' },
  { name: 'Contact', href: '/contact' },


  
]

const mobileMenuOpen = ref(false)




const count = ref(0)
</script>

<template>
   <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="px-6 pt-6 lg:px-8">
      <div>
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
          <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-10" src="/images/logo.png" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 items-center">
            <nuxtLink v-for="item in navigation" :key="item.name" :href="item.href" class="font-semibold text-gray-900 hover:text-gray-900">
              {{ item.name }}
            </nuxtLink>
            <a class=" shadow-xl shadow-pink-300 bg-indigo-700 py-1 px-3 inline-block self-start text-white rounded-md">Buy Token</a>
          </div>
          <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <div class="flex items-center justify-start">
                <a class="mx-1" href="https://www.instagram.com/dummylandai/"><img class="mx-auto w-full" src="/images/instagram.png"/></a>
                <a class="mx-1" href="https://twitter.com/dummylandai"><img class="mx-auto w-full" src="/images/twitter.png"/></a>
                <a class="mx-1" href="https://www.youtube.com/@dummylandai"><img class="mx-auto w-full" src="/images/youtube.png"/></a>



              </div>          </div>
        </nav>
        <ClientOnly>
        <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div class="flex h-9 items-center justify-between">
              <div class="flex">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8" src="/images/logo.png" alt="" />
                </a>
              </div>
              <div class="flex">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <div class="flex items-center justify-start">
                <a class="mx-1" href="https://www.instagram.com/dummylandai/"><img class="mx-auto w-full" src="/images/instagram.png"/></a>
                <a class="mx-1" href="https://twitter.com/dummylandai"><img class="mx-auto w-full" src="/images/twitter.png"/></a>
                <a class="mx-1" href="https://www.youtube.com/@dummylandai"><img class="mx-auto w-full" src="/images/youtube.png"/></a>


              </div>                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </ClientOnly>
      </div>
    </div>
</template>

