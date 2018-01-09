<template lang="pug">
    .blog
        .left-content
            | left
        .right-content
            | right
</template>
<script>
import iRow from 'iview/src/components/layout/row.vue'
import iCol from 'iview/src/components/layout/col.vue'
export default {
    name: 'blog',
    components: {
        iRow, iCol
    }
}
</script>

