<template src="./QuantityUpdate.html" />

<script>
import AQuantityUpdate from './QuantityUpdate.js'

import AIcon from '../../atoms/icon1/Icon.vue'
import AIconAdd from '../../atoms/icon1/templates/IconAdd.vue'
import AIconRemove from '../../atoms/icon1/templates/IconRemove.vue'
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    AIcon,
    AIconAdd,
    AIconRemove,
    AButton,
    ALabel
  },
  mixins: [AQuantityUpdate]
}
</script>

<style lang="scss" src="./QuantityUpdate.scss" />
