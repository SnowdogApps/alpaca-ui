<template src="./InputWrapper.html" />

<script>
import ALabel from '../../atoms/label/Label.vue'
import AInput from '../../atoms/input/Input.vue'

import AInputWrapper from './InputWrapper.js'

export default {
  name: 'AlpacaInputWrapper',
  components: {
    ALabel,
    AInput
  },
  mixins: [AInputWrapper]
}
</script>

<style lang="scss" src="./InputWrapper.scss" />
