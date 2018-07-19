<template lang="pug">
  .request-animation-frame
</template>
<script>
export default {
  name: 'request-animation-frame',
  data () {
    return {

    }
  },
  methods: {
    showLater () {
      setTimeout(() => {
        console.log('a')
      }, 0)
    },
    showCss () {
      requestAnimationFrame(() => {
        console.log('b')
      })
    }
  },
  mounted () {
    this.showLater()
    this.showCss()
    console.log('c')
  }
}
</script>

