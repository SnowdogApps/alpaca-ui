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
     * Input value
     */
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    /**
     * Input id
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Custom input class
     */
    inputClass: {
      type: String,
      default: null
    }
  },
  computed: {
    inputId () {
      return this.id || this.value.toLowerCase().replace(/[^a-z0-9]/g, '-')
    }
  }
}
