<template src="./Rating.html" />

<script>
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'

import ARating from './Rating.js'

export default {
  name: 'AlpacaRating',
  components: {
    AButton,
    AIcon
  },
  mixins: [ARating]
}
</script>

<style lang="scss" src="./Rating.scss" />
