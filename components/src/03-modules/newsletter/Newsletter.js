import AlpacaInput from '../../02-elements/form/input/Input.vue'
import AlpacaCheckbox from '../../02-elements/form/checkbox/Checkbox.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AlpacaInput,
    AlpacaCheckbox,
    AlpacaButton
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      required: true
    },
    button: {
      type: String,
      required: true
    },
    checkboxes: {
      type: Array,
      default: null
    },
    headingClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selected: {},
      value: null
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', { email: this.value, checkboxes: this.selected })
    }
  }
}
