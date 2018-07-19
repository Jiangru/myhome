<template>
  <div>
    <ul>
      <li v-for="item in list1">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item in list2">{{item}}</li>
    </ul>
    <ol>
      <li v-for="item in list3">{{item}}</li>
    </ol>
    <ol>
      <li v-for="item in list4">{{item}}</li>
    </ol>
    <ol>
      <li v-for="item in list5">{{item}}</li>
    </ol>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: []
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    to.meta.keepAlive = false
    next()
  },
  created() {
    // this.composeList12()
    // this.composeList34()
    // this.composeList5()
    // this.$nextTick(function() {
    //   // DOM 更新了
    //   console.log('finished test ' + new Date().toString())
    //   console.log(document.querySelectorAll('li').length)
    // })
  },
  methods: {
    composeList12() {
      let count = 10000

      for (let i = 0; i < count; i++) {
        this.list1.push(`I am a 测试信息～～啦啦啦${i}`)
      }
      console.log('finished list1 ' + new Date().toString())
      console.log(document.querySelectorAll('li').length)

      for (let i = 0; i < count; i++) {
        this.list2.push(`I am a 测试信息～～啦啦啦${i}`)
      }
      console.log('finished list2 ' + new Date().toString())
      console.log(document.querySelectorAll('li').length)

      this.$nextTick(function() {
        // DOM 更新了
        console.log('finished tick1&2 ' + new Date().toString())
        console.log(document.querySelectorAll('li').length)
      })
    },
    composeList34() {
      let count = 10000

      for (let i = 0; i < count; i++) {
        this.list3.push(`I am a 测试信息～～啦啦啦${i}`)
      }
      console.log('finished list3 ' + new Date().toString())
      console.log(document.querySelectorAll('li').length)

      this.$nextTick(function() {
        // DOM 更新了
        console.log('finished tick3 ' + new Date().toString())
        console.log(document.querySelectorAll('li').length)
      })

      setTimeout(this.setTimeout1, 0)
    },
    setTimeout1() {
      let count = 10000

      for (let i = 0; i < count; i++) {
        this.list4.push(`I am a 测试信息～～啦啦啦${i}`)
      }
      console.log('finished list4 ' + new Date().toString())
      console.log(document.querySelectorAll('li').length)

      this.$nextTick(function() {
        // DOM 更新了
        console.log('finished tick4 ' + new Date().toString())
        console.log(document.querySelectorAll('li').length)
      })
    },
    composeList5() {
      let count = 10000

      this.$nextTick(function() {
        // DOM 更新了
        console.log('finished tick5-1 ' + new Date().toString())
        console.log(document.querySelectorAll('li').length)
      })

      setTimeout(this.setTimeout2, 0)
    },
    setTimeout2() {
      let count = 10000

      for (let i = 0; i < count; i++) {
        this.list5.push(`I am a 测试信息～～啦啦啦${i}`)
      }
      console.log('finished list5 ' + new Date().toString())
      console.log(document.querySelectorAll('li').length)

      this.$nextTick(function() {
        // DOM 更新了
        console.log('finished tick5 ' + new Date().toString())
        console.log(document.querySelectorAll('li').length)
      })
    }
  }
}
</script>
