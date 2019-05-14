import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: { ALabel },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      // v-model
      type: [String, Object, Number, Boolean],
      default: null
    },
    /**
     * Input name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Legend text
     */
    legend: {
      type: String,
      default: null
    },
    /**
     * Class for input
     */
    inputClass: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    /**
     * Default option to handle v-model
     */
    value: {
      type: [String, Object, Number, Boolean],
      default: null
    }
  }
}
