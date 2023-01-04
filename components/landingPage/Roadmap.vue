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
     
    <div class="timeline">
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      Q2 2022
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
        DIODE: The idea was born 
      </div>
      <div class="timeline__event__description">
        <p>Team building
          <br>Software Architecture & Design
          <br>Website launch & Smart Contract
          <br>Whitepaper Release
        </p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline__event__date">
      Q1 2023
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        IC: Public Relations 
      </div>
      <div class="timeline__event__description">
        <p>Partnership with press release platforms 
          <br>Audit & KYC
          <br>Listing on DEX & CEX
          <br>Listing on CoinGecko & CMC
          <br>Marketing Push to Spread
          <br>Pancake swap launch
</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline__event__date">
      Q2 2024
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        CPU
      </div>
      <div class="timeline__event__description">
        <p>SDK Release
            <br>Major Marketing Plans
            <br>More Exchange Listing
        </p>
      </div>

    </div>
  </div>
  <div class="timeline__event animated fadeInUp timeline__event--type1">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      Q4 2025
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        QUANTUM
      </div>
      <div class="timeline__event__description">
        <p>Research & Integrate New Chains
          <br>Project X Full Launch (more info coming)</p>
      </div>
    </div>
  </div>

</div>
    
  </section>

</template>

