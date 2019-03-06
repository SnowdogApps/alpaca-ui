import AlpacaInput from '../../02-elements/form/input/Input.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AlpacaInput,
    AlpacaButton
  },
  props: {
    input: {
      type: Object,
      required: true
    },
    decrementButton: {
      type: Object,
      required: true
    },
    incrementButton: {
      type: Object,
      required: true
    },
    decrementButtonClass: {
      type: String,
      default: ''
    },
    incrementButtonClass: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: 1
    }
  },
  methods: {
    increment() {
      this.$emit('update', ++this.currentValue)
    },
    decrement() {
      this.$emit('update', --this.currentValue)
    }
  }
}
