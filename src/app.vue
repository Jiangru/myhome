<template lang="pug">
  #app
    keep-alive(include="welcomeHtml")
      router-view
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>
