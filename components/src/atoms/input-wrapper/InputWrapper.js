// @vue/component
import ALabel from '../label/Label.vue'
import AInput from '../input/Input.vue'

export default {
  components: {
    ALabel,
    AInput
  },
  props: {
    /**
     * Input id
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: null
    }
  }
}
