// @vue/component
import AFieldset from '../../atoms/fieldset/Fieldset.vue'

export default {
  components: {
    AFieldset
  },
  props: {
    /**
     * Input id
     */
    legendText: {
      type: String,
      required: true
    },
    /**
     * Set legend visually hidden
     */
    legendHidden: {
      type: Boolean,
      default: false
    }
  }
}
