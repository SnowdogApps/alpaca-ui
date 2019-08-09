<template src="./Pagination.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

import APager from './Pagination.js'

export default {
  name: 'AlpacaPager',
  components: {
    AIcon,
    AButton
  },
  mixins: [APager]
}
</script>

<style lang="scss" src="./Pagination.scss" />
