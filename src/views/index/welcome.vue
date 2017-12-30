<template lang="pug">
    .welcome
        .menu 
            ul
                li(v-for="n in 10") {{n + 1}}
</template>

<script>
export default {
    name: 'welcome'
}
</script>

