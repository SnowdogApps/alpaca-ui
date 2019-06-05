<template src="./Information.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

import AInformation from './Information.js'

export default {
  name: 'AlpacaInformation',
  components: {
    AHeading,
    AParagraph
  },
  mixins: [AInformation]
}
</script>

<style lang="scss" src="./Information.scss" />
