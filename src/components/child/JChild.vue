<template lang="pug">
  .child
    h3 这里是子组件
      slot(:data="nameArr")
</template>
<script>
export default {
  name: 'j-child',
  data () {
    return {
      nameArr: ['乔丹', '科比', '麦迪', '詹姆斯', '邓肯', '加内特']
    }
  }
}
</script>

