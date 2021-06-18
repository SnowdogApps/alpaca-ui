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
          input__field: [
            'w-full', 'h-12',
            'px-4'
          ],
          input__field__filled: [
            'border-formfilled'
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
