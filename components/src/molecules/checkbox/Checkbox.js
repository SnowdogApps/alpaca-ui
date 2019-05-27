import AIcon from '../../atoms/icon/Icon.vue'

// @vue/component
export default {
  components: { AIcon },
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    /**
     * Prop to handle v-model
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * Input value
     */
    value: {
      type: [String, Boolean],
      default: null
    },
    /**
     * Input id
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Input name
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Class for input
     */
    inputClass: {
      type: String,
      default: null
    }
  }
}
