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
      required: true
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
        focus: () => this.isFocused(true),
        blur: () => this.isFocused(false)
      }
    }
  },
  data () {
    return {
      hasFocus: false,
      config: {
        base: {
          input: [
            'relative'
          ],
          input__label: [
            'transition-all', 'ease-linear', 'transition-300'
          ],
          input__field: [
            'w-full', 'h-12',
            'px-4'
          ]
        },
        primary: {
          input__field: [
            'border', 'border-solid', 'border-form',
            'placeholder-primary',
            'focus:border-gray-500', 'focus:outline-focus'
          ],
          input__label: [
            'inline-flex', 'transform translate-x-6 translate-y-9 scale-125',
            'text-xs'
          ]
        },
        inline: {
          input: [
            'flex', 'items-center'
          ],
          input__label: [
            'flex-shrink-0',
            'mr-4'
          ],
          input__field: [
            'border', 'border-solid', 'border-form', 'placeholder-primary'
          ]
        }
      }
    }
  },
  methods: {
    isFocused (value) {
      this.hasFocus = value
    }
  }
}
