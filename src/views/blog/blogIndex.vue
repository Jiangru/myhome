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
      i-row
        i-col(span="6")
          j-input(
            size="large"
            placeholder="large size"
          )
        i-col(span="6")
          j-input(
            placeholder="normal size"
          )
        i-col(span="6")
          j-input(
            size="small"
            placeholder="small size"
          )
      i-row
        i-col(span="6")
          j-child
            template(slot-scope="nameArr")
              ul
                li(v-for="item in nameArr") {{ item }}

</template>
<script>
import iRow from 'iview/src/components/layout/row.vue'
import iCol from 'iview/src/components/layout/col.vue'
import JMenu from '@/components/JMenu'
import JInput from '@/components/input'
import JChild from '@/components/child'
export default {
    name: 'blog',
    components: {
        iRow, iCol, JMenu, JInput, JChild
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

