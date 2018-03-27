<template lang="pug">
  .list-li
    .li-item {{ liData }}
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
  }
}
</script>

