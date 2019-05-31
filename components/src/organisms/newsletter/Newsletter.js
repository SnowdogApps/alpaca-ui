import AInput from '../../atoms/input/Input.vue'
import ALabel from '../../atoms/label/Label.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
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
    /**
     * Custom heading text
     */
    heading: {
      type: String,
      required: true
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      required: true
    },
    /**
     * Button text
     */
    button: {
      type: String,
      required: true
    },
    /**
     * Array with checkboxes
     */
    checkboxes: {
      type: Array,
      default: null
    },
    /**
     * Custom heading class
     */
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
      /**
       * Triggered when form is submit
       * @type {Event}
       */
      this.$emit('submit', { email: this.value, checkboxes: this.selected })
    }
  }
}
