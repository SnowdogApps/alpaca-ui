<template src="./CookieMessage.html" />

<script>
import ACookieMessage from './CookieMessage.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  name: 'AlpacaCookieMessage',
  components: {
    AIcon,
    AButton
  },
  mixins: [ACookieMessage]
}
</script>

<style lang="scss" src="./CookieMessage.scss" />
