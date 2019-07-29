<template src="./Collapse.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ATransitionExpand from '../../atoms/transition-expand/TransitionExpand.vue'

import ACollapse from './Collapse.js'

export default {
  name: 'AlpacaCollapse',
  components: {
    AIcon,
    AButton,
    ATransitionExpand
  },
  mixins: [ACollapse]
}
</script>

<style lang="scss" src="./Collapse.scss" />
