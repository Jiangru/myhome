<template lang="pug">
  .vue-study
    .list-wrap
      .list-item(@click="goPath('/study-vue/on-emit')") 非父子传递
    router-view
</template>
<script>
export default {
  name: 'vue-study',
  data () {
    return {

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

