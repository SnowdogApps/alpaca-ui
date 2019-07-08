<template src="./Footer.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import ACookieMessage from '../../molecules/cookie-message/CookieMessage.vue'
import ACollapse from '../../molecules/collapse/Collapse.vue'
import ANewsletter from '../../03-modules/newsletter/Newsletter.vue'

import AFooter from './Footer.js'

export default {
  name: 'AlpacaFooter',
  components: {
    AButton,
    ALink,
    AIcon,
    AList,
    AListItem,
    ACookieMessage,
    ACollapse,
    ANewsletter
  },
  mixins: [AFooter]
}
</script>

<style lang="scss" src="./Footer.scss" />
