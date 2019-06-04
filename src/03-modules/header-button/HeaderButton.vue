<template src="./HeaderButton.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'

import AHeaderButton from './HeaderButton.js'

export default {
  name: 'AlpacaHeaderButton',
  components: { AIcon },
  mixins: [AHeaderButton]
}
</script>

<style lang="scss" src="./HeaderButton.scss" />
