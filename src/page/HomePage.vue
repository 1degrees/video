<template>
    <div class="contents">
        <truns></truns>
    </div>
</template>
<script>
import truns from '@/components/Turns'
export default {
  name: 'Home',
  components:{truns},
  data () {
    return {}
  }
}
</script>
<style scoped>
 div.contents{
  width: 100%;
  height: 100%;
}
</style>
