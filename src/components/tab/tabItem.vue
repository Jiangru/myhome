<template lang="pug">
  .tab-item
    .tab-item-child(v-show="active")
      slot
</template>
<script>
  export default {
    name: 'tab-item',
    data () {
      return {
        active: false
      }
    },
    props: {
      label: '',
      value: ''
    },
    computed: {
      owner () {
        let parent = this.$parent
        while (parent && parent.$options.name !== 'tab') {
          parent = parent.$parent
        }
        return parent
      }
    },
    methods: {
      update (name) {
        console.log(name)
        this.active = name === this.label
      }
    },
    mounted () {
      this.owner.addItem(this)
    }
  }
</script>

