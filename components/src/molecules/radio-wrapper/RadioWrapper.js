// @vue/component
import AFieldset from '../../atoms/fieldset/Fieldset.vue'

export default {
  components: {
    AFieldset
  },
  props: {
    /**
     * Legend text in fieldset
     */
    legendText: {
      type: String,
      required: true
    }
  }
}
