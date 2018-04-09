<template lang="pug">
  .list-li
    .li-item {{ liData | overallFilter }}
</template>
<script>
export default {
  name: 'list-item',
  data () {
    return {

    }
  },
  props: {
    liData: {
      type: String,
      default: ''
    }
  },
  filters: {
    toupperCase (value) {
      console.log(value)
      return value.toUpperCase()
    }
  }
}
</script>

