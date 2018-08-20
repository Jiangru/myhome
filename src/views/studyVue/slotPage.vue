<template lang="pug">
  .slot-page
    slot-father
      slot-child
    tab(:activeName="activename" @changeItem="clikTab")
      tab-item(label="tab1" value="1")
        .tab-text tab1
      tab-item(label="tab2" value="2")
        .tab-text tab2
      tab-item(label="tab3" value="3")
        .tab-text tab3
</template>
<script>
  import slotFather from './slotFather'
  import slotChild from './slotChild'
  import tab from '@/components/tab/tab'
  import tabItem from '@/components/tab/tabItem'
  export default {
    name: 'slot-page',
    components: {
      slotFather,
      slotChild,
      tab,
      tabItem
    },
    data () {
      return {
        activename: 'tab1'
      }
    },
    methods: {
      clikTab (item) {
        console.log(item)
        this.activename = item.label
      }
    }
  }
</script>

