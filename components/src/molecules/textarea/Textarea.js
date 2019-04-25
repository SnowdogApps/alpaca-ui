import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: {
    ALabel
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    /**
     * Textarea id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Label text for default slot
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Use default input class 'input__field'
     */
    textareaDefaultClass: {
      type: Boolean,
      default: true
    },
    /**
     * Textarea custom class
     */
    textareaClass: {
      type: String,
      default: null
    },
    /**
     * Textarea value (used with v-model)
     */
    value: {
      type: [String, Number],
      default: null
    },
    /**
     * Textarea name
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Textarea placeholder
     */
    placeholder: {
      type: String,
      required: true
    },
    /**
     * Textarea autocomplete attribute
     */
    autocomplete: {
      type: String,
      default: 'on'
    }
  }
}
