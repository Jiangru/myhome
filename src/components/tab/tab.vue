<template lang="pug">
  .tab
    ul
      li(v-for="item in list" :value="item.value" @click="changeTab(item)" :class="activeName === item.label ? 'tab-active' : ''")
        | {{item.label}}
    .tab-content
      slot
</template>
<script>
  export default {
    name: 'tab',
    data () {
      return {
        list: []
      }
    },
    props: {
      activeName: ''
    },
    methods: {
      updateItem (name) {
        this.list.forEach($child => {
          $child.update(name)
        })
      },
      changeTab (item) {
        this.$emit('changeItem', item)
      },
      addItem (item) {
        let list = this.list
        let listKey = list.map(obj => {
          return obj.label
        })
        if (listKey.indexOf(item.label) < 0) {
          list.push(item)
        }
      }
    },
    watch: {
      activeName: {
        immediate: true,
        handler (val) {
          this.$nextTick(function () {
            console.log(this.list)
            this.updateItem(val)
          })
          // this.updateItem(val)
        }
      }
    }
  }
</script>

