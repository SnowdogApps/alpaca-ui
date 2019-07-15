<template src="./QuantityUpdate.html" />

<script>
import AQuantityUpdate from './QuantityUpdate.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    AIcon,
    AButton,
    ALabel
  },
  mixins: [AQuantityUpdate]
}
</script>

<style lang="scss">
@import './QuantityUpdate.scss';
</style>
