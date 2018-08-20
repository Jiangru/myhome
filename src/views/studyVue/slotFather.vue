<template lang="pug">
  .slot-father
    .click-btn(@click="clickbtn")
      | 点击调用子组件方法
      slot
</template>
<script>
  export default {
    name: 'slot-father',
    data () {
      return {

      }
    },
    methods: {
      clickbtn () {
        console.log(this)
        // this.childrenFun ()
      }
    }
  }
</script>
