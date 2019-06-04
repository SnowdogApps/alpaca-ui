<template src="./HeaderSearch.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import ALabel from '../../atoms/label/Label.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'

import AHeaderSearch from './HeaderSearch.js'

export default {
  name: 'AlpacaHeaderSearch',
  components: {
    AIcon,
    AButton,
    AInput,
    ALabel,
    AInputWrapper
  },
  mixins: [AHeaderSearch]
}
</script>

<style lang="scss" src="./HeaderSearch.scss" />
