import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaInput from '../../02-elements/input/Input.vue'
import AlpacaSelect from '../../molecules/select/Select.vue'
import AlpacaCheckbox from '../../molecules/checkbox/Checkbox.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaInput,
    AlpacaSelect,
    AlpacaCheckbox
  },
  props: {
    title: {
      type: String,
      required: true
    },
    inputs: {
      type: Array,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    checkboxes: {
      type: Array,
      default: null
    },
    hiddenInputs: {
      type: Array,
      default: null
    },
    hiddenTitles: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      selected: {},
      visibleInputs: [],
      visibleTitle: {}
    }
  },
  methods: {
    checkedValues() {
      const selectedItemsNumber = Object.values(this.selected).filter(el => el).length

      this.visibleInputs =
        selectedItemsNumber ? this.hiddenInputs.filter(el => this.selected[el.type] || el.type === true)
          : []

      this.visibleTitle =
        selectedItemsNumber === 1 ? this.hiddenTitles.find(el => this.selected[el.type])
          : selectedItemsNumber > 1 ? this.hiddenTitles.find(el => el.type === true)
          : []
    }
  }
}
