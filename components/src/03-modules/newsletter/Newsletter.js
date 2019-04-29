import AInput from '../../atoms/input/Input.vue'
import ALabel from '../../atoms/label/Label.vue'
import AInputWrapper from '../../atoms/input-wrapper/InputWrapper.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'
import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: {
    AInput,
    ALabel,
    AInputWrapper,
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
  data () {
    return {
      selected: {},
      value: null
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', { email: this.value, checkboxes: this.selected })
    }
  }
}
