<template lang="pug">
    .j-menu
        .menu-head
            | {{menuTitle}}
        .menu-list
            .menu-li(v-for="item in menuContent") {{item.label}}
</template>
<script>
export default {
    name: 'JMenu',
    data () {
        return {

        }
    },
    props: {
        menuTitle: '',
        menuContent: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>
