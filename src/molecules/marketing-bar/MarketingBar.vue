<template src="./MarketingBar.html" />

<script>
import AMarketingBar from './MarketingBar.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  name: 'AlpacaMarketingBar',
  components: {
    AIcon,
    AButton
  },
  mixins: [AMarketingBar]
}
</script>

<style lang="scss" src="./MarketingBar.scss" />
