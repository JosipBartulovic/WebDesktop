<template>
  <div class="desktop">
    <center></center>
    <button v-on:click="fetchVue()">click me</button>
  </div>
</template>

<script>
  import Shortcut from '@/components/icons/Shortcut'

  export default {
    name: 'Desktop',
    
    data: () => {
      return { 
        }
      },
    
    methods: {
      fetchVue: function(){
        this.$http
      }
    },
    

    components: {Shortcut}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
