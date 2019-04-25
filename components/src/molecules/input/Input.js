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
     * Input id
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
    inputDefaultClass: {
      type: Boolean,
      default: true
    },
    /**
     * Input custom class
     */
    inputClass: {
      type: String,
      default: null
    },
    /**
     * Input value (used with v-model)
     */
    value: {
      type: [String, Number],
      default: null
    },
    /**
     * Input type
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * Input name
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Input placeholder
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * Input min attribute (Number)
     */
    min: {
      type: Number,
      default: null
    },
    /**
     * Input max attribute (Number)
     */
    max: {
      type: Number,
      default: null
    },
    /**
     * Input autocomplete attribute
     */
    autocomplete: {
      type: String,
      default: 'on'
    }
  }
}
