<template src="./Rating.html" />

<script>
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon1/Icon.vue'
import AIconStar from '../../atoms/icon1/templates/IconStar.vue'
import AIconStarBorder from '../../atoms/icon1/templates/IconStarBorder.vue'

import ARating from './Rating.js'

export default {
  name: 'AlpacaRating',
  components: {
    AButton,
    AIcon,
    AIconStar,
    AIconStarBorder
  },
  mixins: [ARating]
}
</script>

<style lang="scss" src="./Rating.scss" />
