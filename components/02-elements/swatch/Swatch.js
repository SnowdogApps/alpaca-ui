import AlpacaLabel from '../../01-globals/label/Label.vue'

export default {
  components: {
    AlpacaLabel
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    image: {
      type: Boolean,
      default: false
    },
    color: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: null
    },
  },
  methods: {
    setActiveValue(value){
      this.$emit('change', value)
    }
  }
}
