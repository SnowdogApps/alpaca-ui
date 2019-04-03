import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    ALabel
  },
  model: {
    prop: 'checkedValue',
    event: 'change'
  },
  props: {
    /**
     * Array with radio options. Every object should have keys: id, value and label.
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Input name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Legend text
     */
    legend: {
      type: String,
      default: null
    },
    /**
     * Class for input
     */
    inputClass: {
      type: String,
      default: null
    },
    checkedValue: {
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  methods: {
    change(ev) {
      /**
       * Event for change input
       * @type {Event}
       */
      this.$emit('change', ev.target.value)
    }
  }
}
