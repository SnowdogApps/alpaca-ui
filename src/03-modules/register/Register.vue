<template src="./Register.html" />

<script>
import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'

import ARegister from './Register.js'

export default {
  name: 'AlpacaRegister',
  components: {
    AFieldset,
    AButton,
    AInput,
    AInputWrapper
  },
  mixins: [ARegister]
}
</script>

<style lang="scss" src="./Register.scss" />
