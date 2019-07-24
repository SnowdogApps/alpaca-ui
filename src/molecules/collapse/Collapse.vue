<template src="./Collapse.html" />

<script>
import AIcon from '../../atoms/icon1/Icon.vue'
import AIconExpandMore from '../../atoms/icon1/templates/IconExpandMore.vue'
import AButton from '../../atoms/button/Button.vue'

import ACollapse from './Collapse.js'

export default {
  name: 'AlpacaCollapse',
  components: {
    AIcon,
    AIconExpandMore,
    AButton
  },
  mixins: [ACollapse]
}
</script>

<style lang="scss" src="./Collapse.scss" />
