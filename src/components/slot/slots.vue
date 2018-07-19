<template lang="pug">
  .slot
    slot(:lol="nameArr")
</template>
<script>
  export default {
    name: 'scope-slot',
    props: {
      nameArr: {}
    },
    data () {
      return {
        // nameArr: ['赵信', '萧何', '刘邦', '项羽', '诸葛亮', '司马懿']
      }
    },
    mounted () {
      console.log(this.$scopedSlots.default)
    }
  }
</script>
