<template src="./Accordion.html" />

<script>
import AIcon from '@atoms/icon/Icon.vue'
import AIconExpandMore from '@atoms/icon/templates/IconExpandMore.vue'
import AButton from '@atoms/button/Button.vue'
// import ATransitionExpand from '@atoms/transition-expand/TransitionExpand.vue'

import AAccordion from './Accordion.js'

export default {
  name: 'AlpacaAccordion',
  components: {
    AIcon,
    // ATransitionExpand,
    AButton,
    AIconExpandMore
  },
  mixins: [AAccordion]
}
</script>
