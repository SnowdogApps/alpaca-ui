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
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    hiddenLabel: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: String,
      default: null
    },
    textareaDefaultClass: {
      type: Boolean,
      default: true
    },
    textareaClass: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    autocomplete: {
      type: String,
      default: 'on'
    }
  }
}
