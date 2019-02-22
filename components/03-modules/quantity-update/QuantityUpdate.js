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
    minusButton: {
      type: Object,
      required: true
    },
    plusButton: {
      type: Object,
      required: true
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
