<template src="./Pager.html" />

<script>
import AButton from '../../atoms/button/Button.vue'

import APager from './Pager.js'

export default {
  name: 'AlpacaPager',
  components: {
    AButton
  },
  mixins: [APager]
}
</script>

<style lang="scss" src="./Pager.scss" />
