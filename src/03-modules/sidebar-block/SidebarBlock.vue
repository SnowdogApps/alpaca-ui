<template src="./SidebarBlock.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

import ASidebarBlock from './SidebarBlock.js'

export default {
  name: 'AlpacaSidebarBlock',
  components: {
    AHeading,
    AIcon,
    AButton,
    ADivider,
    AList,
    AListItem
  },
  mixins: [ASidebarBlock]
}
</script>

<style lang="scss" src="./SidebarBlock.scss" />
