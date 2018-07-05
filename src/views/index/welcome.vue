<template lang="pug">
  .welcome
    .gradient-line
    .container(:style="{'height': `${tHeight}px`}")
      .content-wrap
        i.fa.fa-anchor.big-icon
        .content-title Welcome to My Home!
        i-row(:gutter="10")
          i-col(span="8")
            .modular
              .menu-item
                  i.fa.fa-share-alt-square
            .menu-title(@click="handleClick('/study-router')")
              | 分享
              .up-line
              .down-line
          i-col(span="8")
            .modular
              .menu-item
                  i.fa.fa-fire
            .menu-title(@click="handleClick('/blog')")
              | 博客
              .up-line
              .down-line
          i-col(span="8")
            .modular
              .menu-item
                  i.fa.fa-camera-retro
            .menu-title(@click="handleClick()")
              | 生活
              .up-line
              .down-line
</template>

<script>
import _ from '@/libs/utils'
import iRow from 'iview/src/components/layout/row.vue'
import iCol from 'iview/src/components/layout/col.vue'

export default {
    name: 'welcomeHtml',
    components: {
        iRow, iCol
    },
    data () {
        return {
            tHeight: null, // 浏览器高度
        }
    },
    methods: {
        handleClick (gopath) {
            // console.log(this.$router)
            // console.log(this.$routes)
            let router = this.$router
            // if (gopath === '/study-router') {
            //   router.replace({
            //     name: 'studyRouter',
            //     params: {
            //       id: 'jiangruyi'
            //     },
            //     query: {
            //       user: 'admin'
            //     }
            //   }, function onComplete () {
            //     alert(666)
            //   }, function onAbort () {
            //     alert(777)
            //   })
            // } else {
            //   router.push({
            //     path: gopath
            //   })
            // }
            router.push({
              path: gopath
            })
        },
        calculateHeight () {
            let $body = document.body
            let $html = document.documentElement

            // IE下document.documentElement.clientHeight === 0
            this.tHeight = $html.clientHeight || $body.clientHeight
            // console.log(this.tHeight)
        }
    },
    created () {
        this.calculateHeight()
        _.addEvent(window, 'resize', this.calculateHeight)
    },
    mounted () {
    },
    beforeDestroy () {
        _.removeEvent(window, 'resize', this.calculateHeight)
    }
}
</script>

