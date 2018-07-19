<template lang="pug">
  .router
    button(@click="showRouter") 点击{{ showName }}
    button(@click="goPath") 跳转
    br
    button(@click="goChild") {{ label | overallFilter }}
    my-slot(:nameArr="obj")
      template(slot-scope="scope")
        ul
          li(v-for="name in scope.lol.lpl") {{name}}
    .text-area
      | {{ watchData }}
    .change-btn(@click="changeData")
      | 变换数组
    router-view
    router-view(name="one")
</template>
<script>
  import mySlot from '@/components/slot'
  export default {
    name: 'study-router',
    components: {
      mySlot
    },
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
        label: '嵌套子路由',
        arr: ['赵信', '萧何', '刘邦', '项羽', '诸葛亮', '司马懿', '蒋如意'],
        obj: {
          lpl: ['rng', 'edg', 'ig', 'rw'],
          lck: ['kz', 'skt', 'kt']
        },
        watchData: {
          team1: '火箭',
          team2: '湖人'
        }
      }
    },
    methods: {
      changeData () {
        this.watchData = {
          team1: '火箭',
          team2: '湖人',
          team3: '勇士'
        }
      },
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
      },
      watchData: {
        immediate: true,
        handler (newVal) {
          console.log(newVal)
        }
      }
    },
    mounted () {
      console.log(this.$route)
      let params = this.$route.params
      this.showName = params.id
    }
  }
</script>
<style>
  .change-btn {
    width: 100px;
    height: 26px;
    line-height: 26px;
    background: #3388ff;
    text-align: center;
    cursor: pointer;
  }
</style>

