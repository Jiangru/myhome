<template lang="pug">
  .on-emit
    | 非父子组件之间传递
    father
    child
</template>
<script>
import father from './father'
import child from './child'
export default {
  name: 'on-emit',
  components: {
    father,
    child
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

