<template src="./HeaderSearch.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'
import ALabel from '../../atoms/label/Label.vue'

import AHeaderSearch from './HeaderSearch.js'

export default {
  name: 'AlpacaHeaderSearch',
  components: {
    AIcon,
    AButton,
    AInput,
    ALabel
  },
  mixins: [AHeaderSearch]
}
</script>

<style lang="scss" src="./HeaderSearch.scss" />
