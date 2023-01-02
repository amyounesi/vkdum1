<script setup>
defineProps({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
    

});
</script>
<template>
    <div class="text-center my-16">
        <slot name="icon"></slot>
        <h2 class="text-3xl text-indigo-700 font-extrabold">{{title}}</h2>
        <div class="text-slate-500"><slot name="desc"></slot></div>
      </div>

</template>