// @vue/component
import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  inheritAttrs: false,
  props: {
    /**
     * Prop to handle v-model
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Input id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  },
  data () {
    return {
      config: {
        base: {
          input: [
            'relative'
          ],
          input__field: [
            'w-full', 'h-12',
            'px-4'
          ]
        },
        primary: {
          input__field: [
            'border', 'border-solid', 'border-form',
            'placeholder-primary'
          ]
        },
        inline: {
          input: [
            'flex', 'items-center'
          ],
          input__label: [
            'flex-shrink-0',
            'm-4', 'mb-4'
          ]
        }
      }
    }
  }
}
