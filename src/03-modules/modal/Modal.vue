<template src="./Modal.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AIcon from '../../atoms/icon/Icon.vue'

import AModal from './Modal.js'

export default {
  name: 'AlpacaModal',
  components: {
    AIcon,
    ADivider,
    AHeading
  },
  mixins: [AModal]
}
</script>

<style lang="scss" src="./Modal.scss" />
