<template src="./QuantityUpdate.html" />

<script>
import QuantityUpdate from './QuantityUpdate.js'

import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    AInputWrapper,
    AIcon,
    AButton,
    ALabel
  },
  mixins: [QuantityUpdate]
}
</script>

<style lang="scss">
@import './QuantityUpdate.scss';
</style>
