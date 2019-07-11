<template src="./Newsletter.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AInput from '../../atoms/input/Input.vue'
import ALabel from '../../atoms/label/Label.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'
import AButton from '../../atoms/button/Button.vue'

import ANewsletter from './Newsletter.js'

export default {
  name: 'AlpacaNewsletter',
  components: {
    AHeading,
    AInput,
    ALabel,
    AInputWrapper,
    ACheckbox,
    AButton
  },
  mixins: [ANewsletter]
}
</script>

<style lang="scss" src="./Newsletter.scss" />
