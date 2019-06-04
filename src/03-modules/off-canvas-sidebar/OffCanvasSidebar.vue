<template src="./OffCanvasSidebar.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AIcon from '../../atoms/icon/Icon.vue'

import AOffCanvasSidebar from './OffCanvasSidebar.js'

export default {
  name: 'AlpacaOffCanvasSidebar',
  components: {
    AIcon,
    ADivider,
    AHeading
  },
  mixins: [AOffCanvasSidebar]
}
</script>

<style lang="scss" src="./OffCanvasSidebar.scss" />
