<script  setup></script>

<template>
  <div>
    <LandingPageTitleSection  title="Contact">
      <template #desc>
        Creating New Value Beyond the Constraints of the Real World
      </template>
    </LandingPageTitleSection> 
    <div class="container mx-auto">
     
      <div class="mb-4 grid grid-cols-1 md:grid-cols-2">
      
      <div >
        <img class="mx-auto" width="500" src="/images/whatabout.png" >
      </div>
      <div>
        <div class="mb-4 grid grid-cols-1 md:grid-cols-2">
          <div class="p-2">
            <input class="bg-white border-2 p-2 rounded-lg w-full mb-2" placeholder="Name">
          </div>
          <div class="p-2">
            <input class="bg-white border-2 p-2 rounded-lg w-full mb-2" placeholder="Email">
          </div>
          <div class="p-2">
            <input class="bg-white border-2 p-2 rounded-lg w-full mb-2" placeholder="Mobile">
          </div>
          <div class="p-2">
            <select placeholder="Subject" class="bg-white border-2 p-2 rounded-lg w-full mb-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="p-2 col-start-1 col-end-3" >
            <textarea rows="6" class="bg-white border-2 p-2 rounded-lg w-full mb-2" placeholder="Message"></textarea>
          </div>

        </div>
      </div>
      </div>
    
    </div>
    
  </div>
</template>

