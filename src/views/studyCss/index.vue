<template lang="pug">
  .css-index
    .list-wrap
      .list-item(@click="goPath('/study-css/animation')") 动画(animation)
    router-view
</template>
<script>
export default {
  name: 'css-index',
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

