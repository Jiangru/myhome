<template lang="pug">
    .blog
        .left-content
            j-menu(
                :menuTitle="listData.menuTitle"
                :menuContent="listData.menuContent"
                @click-li="clickLi")
            j-menu(
                :menuTitle="listData.menuTitle"
                :menuContent="listData.menuContent")
            j-menu(
                :menuTitle="listData.menuTitle"
                :menuContent="listData.menuContent")
            j-menu(
                :menuTitle="listData.menuTitle"
                :menuContent="listData.menuContent")
        .right-content
            router-view
</template>
<script>
import iRow from 'iview/src/components/layout/row.vue'
import iCol from 'iview/src/components/layout/col.vue'
import JMenu from '@/components/JMenu'
export default {
    name: 'blog',
    components: {
        iRow, iCol, JMenu
    },
    data () {
        return {
            listData: {
                menuTitle: '随笔',
                menuContent: [
                    {
                        label: '前端开发的未来',
                        route: '/test'
                    },
                    {
                        label: '我的宝宝即将到来',
                        route: '/test'
                    },
                    {
                        label: 'JavaScript原型链',
                        route: '/test'
                    }
                ]
            }
        }
    },
    methods: {
        clickLi (val) {
            console.log(val, this.$route)
        }
    }
}
</script>

