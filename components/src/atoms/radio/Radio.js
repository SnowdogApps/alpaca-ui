// @vue/component
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: { ALabel },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    /**
     * To handle v-model
     */
    checked: {
      type: [String, Number, Boolean],
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
     * Input name
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Input value
     */
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    /**
     * Custom input class
     */
    inputClass: {
      type: String,
      default: null
    }
  }
}
