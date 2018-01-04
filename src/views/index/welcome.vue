<template lang="pug">
    .welcome
        .container(:style="{'height': `${tHeight}px`}")
            i.fa.fa-anchor
            p Welcome to My Home!
            .content-wrap
                i-row(:gutter="10")
                    i-col(span="8")
                        .modular 1
                    i-col(span="8")
                        .modular 2
                    i-col(span="8")
                        .modular 3
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
        calculateHeight () {
            let $body = document.body
            let $html = document.documentElement

            // IE下document.documentElement.clientHeight === 0
            this.tHeight = $html.clientHeight || $body.clientHeight
            console.log(this.tHeight)
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

