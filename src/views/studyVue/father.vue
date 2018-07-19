<template lang="pug">
  .father
    | 兄弟组件1
    .click-change(@click="getChildText") 获取兄弟2文本
    .father-text {{ childText }}
</template>
<script>
import eventHub from '@/plugins/eventHub'
export default {
  name: 'father',
  data () {
    return {
      childText: '兄弟1'
    }
  },
  methods: {
    getChildText () {
      console.log(eventHub)
      eventHub.$on('changeChildText', function (text) {
        console.log(text)
        this.childText = text
      })
    }
  }
}
</script>

