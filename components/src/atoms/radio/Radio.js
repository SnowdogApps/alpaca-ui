export default {
  model: {
    prop: 'checkedValue',
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    wrapperTag: {
      type: String,
      default: 'div'
    },
    optionTag: {
      type: String,
      default: 'label'
    },
    allowDeselect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      radioOptions: this.options
    }
  },
  methods: {
    select (index) {
      const isAlreadySelected = this.radioOptions[index].isSelected

      if (isAlreadySelected && !this.allowDeselect) return

      this.radioOptions = this.radioOptions.map((elem, idx) => {
        if (this.allowDeselect) {
          elem.isSelected = index === idx && !isAlreadySelected
        } else {
          elem.isSelected = index === idx
        }
        return elem
      })
    }
  }
}
