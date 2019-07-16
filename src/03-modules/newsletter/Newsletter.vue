<template src="./Newsletter.html" />

<script>
import ALabel from '../../atoms/label/Label.vue'
import AInput from '../../molecules/input/Input.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'
import AButton from '../../atoms/button/Button.vue'

import ANewsletter from './Newsletter.js'

export default {
  name: 'AlpacaNewsletter',
  components: {
    AInput,
    ALabel,
    ACheckbox,
    AButton
  },
  mixins: [ANewsletter]
}
</script>

<style lang="scss" src="./Newsletter.scss" />
