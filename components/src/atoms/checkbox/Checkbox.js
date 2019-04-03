import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: { AIcon },
  model: {
    prop: 'selectedValue',
    event: 'change'
  },
  props: {
    selectedValue: {
      type: [String, Boolean, Number, Object],
      default: null
    },
    value: {
      type: [String, Boolean, Number, Object],
      default: null
    },
    uncheckedValue: {
      type: [String, Boolean, Number, Object],
      default: null
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    labelClass: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: null
    }
  },
  methods: {
    change(checked) {
      this.$emit('change', checked ? this.value : this.uncheckedValue)
    }
  }
}
