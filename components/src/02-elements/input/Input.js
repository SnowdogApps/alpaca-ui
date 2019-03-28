import AlpacaLabel from '../../01-globals/label/Label.vue'
export default {
  components: {
    AlpacaLabel
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
    type: {
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
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    labelClass: {
      type: String,
      default: null
    },
    inputDefaultClass: {
      type: Boolean,
      default: true
    },
    inputClass: {
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
