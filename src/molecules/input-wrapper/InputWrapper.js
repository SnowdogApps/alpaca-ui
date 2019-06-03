// @vue/component
import ALabel from '../../atoms/label/Label.vue'
import AInput from '../../atoms/input/Input.vue'

export default {
  components: {
    ALabel,
    AInput
  },
  props: {
    /**
     * Input id
     */
    inputId: {
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
