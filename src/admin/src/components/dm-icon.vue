<template>
  <span class="icon" :style="{ backgroundImage: `url('${icons[icon]}')` }" ></span>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['icon'],    
    computed: mapState(["icons"])    
}
</script>

<style>
    .icon {       
        display: inline-block; 
        height: 15px;
        width: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;        
    }
</style>