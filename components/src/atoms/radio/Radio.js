// @vue/component
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: { ALabel },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      // Prop to handle v-model
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
