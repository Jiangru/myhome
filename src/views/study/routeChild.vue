<template lang="pug">
  .route-child
    .title 内嵌路由{{ id }}
</template>
<script>
  export default {
    name: 'route-child',
    data () {
      return {
        id: ''
      }
    },
    methods: {

    },
    watch: {
      '$route' (to, from) {
        console.log(to, from)
      }
    },
    mounted () {
      this.id = this.$route.params.childId
    }
  }
</script>
