import AInput from '../../02-elements/input/Input.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'
import AButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AInput,
    ACheckbox,
    AButton
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
