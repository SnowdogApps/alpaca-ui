<template src="./Gallery.html" />

<script>
import ABadge from '../../atoms/badge/Badge.vue'
import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'

import AGallery from './Gallery.js'

export default {
  name: 'AlpacaGallery',
  components: {
    ABadge,
    AImage,
    AIcon
  },
  mixins: [AGallery]
}
</script>

<style lang="scss" src="./Gallery.scss" />
