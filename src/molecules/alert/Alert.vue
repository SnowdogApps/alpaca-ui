<template src="./Alert.html" />

<script>
import AAlert from './Alert.js'

import AIcon from '../../atoms/icon1/Icon.vue'
import AIconClose from '../../atoms/icon1/templates/IconClose.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  name: 'AlpacaAlert',
  components: {
    AIcon,
    AIconClose,
    AButton
  },
  mixins: [AAlert]
}
</script>

<style lang="scss" src="./Alert.scss" />
