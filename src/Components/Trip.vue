<template>
  <div class="trips"> 
     {{trip.user_id}} 
  </div>   
</template>
<script> 
export default {
  name: 'trip',
  props: ['trip'],
  data () {
    return { 

    }
  },
  mounted() {
    console.log("ready function on trips", this.$root.$route.params.id);
  }
}
</script>