<template src="./Checkbox.html" />

<script>
import ACheckbox from './Checkbox.js'

import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: { AIcon },
  mixins: [ACheckbox]
}
</script>

<style lang="scss" src="./Checkbox.scss" />
