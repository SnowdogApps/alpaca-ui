<template src="./Select.html" />

<script>
import ASelect from './Select.js'

import ALabel from '../../atoms/label/Label.vue'
import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: {
    ALabel,
    AIcon
  },
  mixins: [ASelect]
}
</script>

<style lang="scss" src="./Select.scss" />
