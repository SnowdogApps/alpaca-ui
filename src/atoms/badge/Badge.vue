<template>
  <component
    :is="tag"
    :class="getClass('badge')"
  >
    <!-- @slot Slot for badge content -->
    <slot />
  </component>
</template>

<script>
import getClass from '../../../utils/helpers/get-class.js'

export default {
  name: 'AlpacaBadge',
  mixins: [getClass],
  props: {
    /**
     * To use another tag instead of `div`
     */
    tag: {
      type: String,
      default: 'div'
    },
    /**
     * Config for component classes
     */
    config: {
      type: Object,
      default: () => ({
        base: {
          badge: [
            'inline-flex', 'justify-center',
            'px-3',
            'font-bold', 'text-xs', 'leading-snug', 'uppercase'
          ]
        },
        primary: {
          badge: [
            'text-white', 'bg-dark'
          ]
        },
        secondary: {
          badge: [
            'text-primary', 'bg-white'
          ]
        }
      })
    }
  }
}
</script>
