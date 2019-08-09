<template src="./Pagination.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

import APagination from './Pagination.js'

export default {
  name: 'AlpacaPagination',
  components: {
    AIcon,
    AButton
  },
  mixins: [APagination]
}
</script>

<style lang="scss" src="./Pagination.scss" />
