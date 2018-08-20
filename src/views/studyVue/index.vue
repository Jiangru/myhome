<template lang="pug">
  .vue-study
    .list-wrap
      .list-item(@click="goPath('/study-vue/on-emit')") 非父子传递
      .list-item(@click="goPath('/study-vue/slot-page')") 父组件调用子组件方法
      .list-item(v-show="active") 是否隐藏
    router-view
</template>
<script>
export default {
  name: 'vue-study',
  data () {
    return {
      active: {
        type: Boolean,
        default: false
      }
    }
  },
  methods: {
    goPath (path) {
      const router = this.$router
      router.push({
        path: path
      })
    }
  }
}
</script>

