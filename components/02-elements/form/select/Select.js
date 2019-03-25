import AlpacaLabel from '../../../01-globals/label/Label.vue'

export default {
  components: {
    AlpacaLabel
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
