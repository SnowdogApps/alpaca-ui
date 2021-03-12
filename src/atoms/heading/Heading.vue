<template>
  <component
    :is="tag"
    :class="getClass('heading')"
  >
    <!-- @slot Slot for heading content -->
    <slot />
  </component>
</template>

<script>
import getClass from '../../../utils/helpers/get-class.js'

export default {
  name: 'AlpacaHeading',
  mixins: [getClass],
  props: {
    tag: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      default: () => ({
        base: {
          heading: [
            'leading-relaxed'
          ]
        },
        'first-level': {
          heading: [
            'text-3xl'
          ]
        },
        'second-level': {
          heading: [
            'text-2xl'
          ]
        },
        'third-level': {
          heading: [
            'text-xl'
          ]
        },
        'font-secondary': {
          heading: [
            'font-serif'
          ]
        }
      })
    }
  }
}
</script>
