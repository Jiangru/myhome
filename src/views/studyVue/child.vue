<template lang="pug">
  .child
    | 兄弟组件2
    .click-change(@click="changeText") 改变文字
    .child-text {{ childText }}
</template>
<script>
import eventHub from '@/plugins/eventHub'
export default {
  name: 'child',
  data () {
    return {
      childText: '初始化'
    }
  },
  methods: {
    changeText () {
      console.log(eventHub)
      eventHub.$emit('changeChildText', '兄弟2')
    }
  }
}
</script>

