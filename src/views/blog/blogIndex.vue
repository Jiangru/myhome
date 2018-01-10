<template lang="pug">
    .blog
        .left-content
            j-menu(
                :menuTitle="listData.menuTitle"
                :menuContent="listData.menuContent")
        .right-content
            | right
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
                        label: '前端开发的未来'
                    },
                    {
                        label: '我的宝宝即将到来'
                    },
                    {
                        label: 'JavaScript原型链'
                    }
                ]
            }
        }
    }
}
</script>

