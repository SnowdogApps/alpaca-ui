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
      default: null
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      default: null
    },
    /**
     * Button text
     */
    buttonText: {
      type: String,
      default: null
    },
    /**
     * Array with checkboxes
     */
    checkboxes: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      selected: {},
      currentValue: null
    }
  },
  methods: {
    onSubmit () {
      /**
       * Triggered when form is submit
       * @type {Event}
       */
      this.$emit('submit', { email: this.currentValue, checkboxes: this.selected })
    }
  }
}
