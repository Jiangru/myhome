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
                        .menu-title
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
                        .menu-title
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
            console.log(this.$router)
            let router = this.$router
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

