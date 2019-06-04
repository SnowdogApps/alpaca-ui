<template src="./ForgotPassword.html" />

<script>
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

import AForgotPassword from './ForgotPassword.js'

export default {
  name: 'AlpacaForgotPassword',
  components: {
    AButton,
    AInput,
    AInputWrapper,
    AParagraph
  },
  mixins: [AForgotPassword]
}
</script>

<style lang="scss" src="./ForgotPassword.scss" />
