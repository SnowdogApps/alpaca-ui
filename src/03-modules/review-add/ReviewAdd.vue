<template src="./ReviewAdd.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import ATextarea from '../../atoms/textarea/Textarea.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AFieldset from '../../atoms/fieldset/Fieldset.vue'

import AReviewAdd from './ReviewAdd.js'

export default {
  name: 'AlpacaReviewAdd',
  components: {
    AHeading,
    AParagraph,
    AButton,
    AInput,
    AInputWrapper,
    AFieldset,
    ATextarea
  },
  mixins: [AReviewAdd]
}
</script>

<style lang="scss" src="../review/Review.scss" />
