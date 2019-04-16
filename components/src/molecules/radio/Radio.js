import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: { ALabel },
  props: {
    /**
     * Array with radio options. Every object should have keys: id, value and label.
     */
    options: {
      type: Array,
      required: true
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
    /**
     * Default option to handle v-model
     */
    value: {
      type: [String, Object, Number, Boolean],
      default: null
    }
  }
}
