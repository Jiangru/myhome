<template lang="pug">
  .slot-child
    .slot-child-text 子组件
</template>
<script>
  export default {
    name: 'slot-child',
    data () {
      return {

      }
    },
    methods: {
      childrenFun () {
        console.log('我是子组件方法')
      }
    }
  }
</script>

