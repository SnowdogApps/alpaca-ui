import AIcon from '../../atoms/icon/Icon.vue'

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
      type: String,
      default: 0
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
     * Class for icon
     */
    iconClass: {
      type: String,
      default: null
    },
    /**
     * Class for label
     */
    labelClass: {
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
