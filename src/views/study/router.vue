<template lang="pug">
  .router
    button(@click="showRouter") 点击{{ showName }}
    button(@click="goPath") 跳转
    br
    button(@click="goChild") {{ label | overallFilter }}
    router-view
    router-view(name="one")
</template>
<script>
  export default {
    name: 'study-router',
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(vm.label)
      })
      // console.log(this.showName)
    },
    beforeRouteUpdate (to, from, next) {
      console.log(to, from)
      next()
    },
    data () {
      return {
        showName: 'jiangruyi',
        label: '嵌套子路由'
      }
    },
    methods: {
      goChild () {
        this.$router.push({
          path: `/study-router/route`
        })
      },
      goPath () {
        this.$router.push({
          path: '/study-router/zhangyao'
        })
      },
      showRouter () {
        console.log(this.$router)
        console.log(this.$route)
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from)
      }
    },
    mounted () {
      let params = this.$route.params
      this.showName = params.id
    }
  }
</script>
