import AInput from '../../02-elements/input/Input.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  components: {
    AInput,
    AIcon,
    AButton
  },
  props: {
    value: {
      type: Number,
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
      default: 1
    },
    inputMax: {
      type: Number,
      default: null
    },
    inputPlaceholder: {
      type: String,
      default: '0'
    },
    inputAriaLabel: {
      type: String,
      default: 'Change the quantity'
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
  data() {
    return {
      currentValue: null
    }
  },
  methods: {
    changeValue () {
      this.$emit('update', parseInt(this.currentValue, 10))
    }
  },
  created () {
    this.currentValue = this.value
  }
}
