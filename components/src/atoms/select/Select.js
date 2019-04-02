import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    ALabel
  },
  props: {
    id: {
      type: String,
      required: true,
      default: null
    },
    name: {
      type: String,
      required: true,
      default: null
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    label: {
      type: String,
      required: true,
      default: null
    },
    selected: {
      type: String,
      required: false,
      default: null
    },
    validations: {
      type: Array,
      required: false,
      default: () => []
    },
    selectClass: {
      type: String,
      required: false,
      default: null
    },
    hiddenLabel: {
      type: Boolean,
      required: false,
      default: false
    },
    inlineLabel: {
      type: Boolean,
      required: false,
      default: false
    },
    labelClass: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    currentValidations() {
      return this.validations.filter(validation => validation.condition)
    }
  }
}
