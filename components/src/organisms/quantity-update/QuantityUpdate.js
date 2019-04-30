import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: {
    AInputWrapper,
    AIcon,
    AButton,
    ALabel
  },
  props: {
    /**
     * Quantity
     */
    value: {
      type: [Number, String],
      required: true
    },
    /**
     * Label text (Default label)
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Input id (Default input)
     */
    inputId: {
      type: String,
      default: null
    },
    /**
     * Min qty (Default input)
     */
    minQty: {
      type: Number,
      default: 0
    },
    /**
     * Max qty (Default input)
     */
    maxQty: {
      type: Number,
      default: null
    },
    inputPlaceholder: {
      type: String,
      default: '0'
    },
    decrementButtonClass: {
      type: String,
      default: ''
    },
    decrementAriaLabel: {
      type: String,
      default: 'Decrease the quantity'
    },
    decrementIconTitle: {
      type: String,
      default: 'Minus mark'
    },
    incrementButtonClass: {
      type: String,
      default: ''
    },
    incrementAriaLabel: {
      type: String,
      default: 'Increase the quantity'
    },
    incrementIconTitle: {
      type: String,
      default: 'Plus mark'
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    updateQty (value) {
      const newValue = this.currentValue + value
      if (this.minQty <= newValue && (this.maxQty ? (newValue <= this.maxQty) : true)) {
        this.currentValue = newValue
        this.$emit('update', this.currentValue)
      }
    },
    inputEvent (event) {
      const newValue = parseInt(event.target.value, 10)
      if (this.minQty <= newValue && (this.maxQty ? (newValue <= this.maxQty) : true)) {
        this.currentValue = newValue
      } else if (newValue > this.maxQty) {
        this.currentValue = this.maxQty
        event.target.value = this.maxQty
      } else {
        this.currentValue = this.minQty
        event.target.value = this.minQty
      }
      this.$emit('update', this.currentValue)
    }
  }
}
