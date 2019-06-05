<template src="./Login.html" />

<script>
import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'

import ALogin from './Login.js'

export default {
  name: 'AlpacaLogin',
  components: {
    AFieldset,
    AButton,
    AInput,
    AInputWrapper
  },
  mixins: [ALogin]
}
</script>

<style lang="scss" src="./Login.scss" />
