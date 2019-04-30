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
    value: {
      type: [Number, String],
      required: true
    },
    label: {
      type: String,
      default: 'Quantity'
    },
    labelClass: {
      type: String,
      default: ''
    },
    inputId: {
      type: String,
      default: 'qty'
    },
    inputName: {
      type: String,
      default: 'qty'
    },
    inputMin: {
      type: Number,
      default: 0
    },
    inputMax: {
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
      currentValue: null
    }
  },
  created () {
    this.currentValue = this.value
  },
  methods: {
    changeValue () {
      this.$emit('update', parseInt(this.currentValue, 10))
    },
    inputEvent (event) {
      if (event.target.value >= 0) {
        this.currentValue = parseInt(event.target.value, 10)
        this.$emit('update', this.currentValue)
      } else {
        this.currentValue = 0
      }
    }
  }
}
