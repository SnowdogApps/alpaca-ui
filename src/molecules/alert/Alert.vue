<template src="./Alert.html" />

<script>
import AAlert from './Alert.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  name: 'AlpacaAlert',
  components: {
    AIcon,
    AButton
  },
  mixins: [AAlert]
}
</script>

<style lang="scss" src="./Alert.scss" />
