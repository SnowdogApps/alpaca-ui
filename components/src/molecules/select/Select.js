import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    ALabel
  },
  props: {
    /**
     * Id attribute for select and label
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Name attribute
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Array of options
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Value of selected option
     */
    selected: {
      type: String,
      required: false,
      default: null
    },
    /**
     * Select custom class
     */
    selectClass: {
      type: String,
      required: false,
      default: null
    },
    /**
     * Label custom class
     */
    labelClass: {
      type: String,
      required: false,
      default: null
    }
  }
}
