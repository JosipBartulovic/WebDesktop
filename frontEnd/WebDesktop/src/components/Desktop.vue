<template>
  <div class="desktop">
    <Shortcut :text='B'></Shortcut>
    <center></center>
  </div>
</template>

<script>
import Shortcut from '@/components/icons/Shortcut'
console.log(Shortcut)
export default {
  name: 'Desktop',
  data: () => {
    return {
      B: "B"
    }
  },
  components: {Shortcut}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
