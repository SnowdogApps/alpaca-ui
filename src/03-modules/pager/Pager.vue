<template src="./Pager.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

import APager from './Pager.js'

export default {
  name: 'AlpacaPager',
  components: {
    AIcon,
    AButton
  },
  mixins: [APager]
}
</script>

<style lang="scss" src="./Pager.scss" />
