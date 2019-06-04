<template src="./Collapse.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

import ACollapse from './Collapse.js'

export default {
  name: 'AlpacaCollapse',
  components: {
    AIcon,
    AButton
  },
  mixins: [ACollapse]
}
</script>

<style lang="scss" src="./Collapse.scss" />
