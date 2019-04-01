import ADropdownListItem from '../../02-elements/dropdown-list-item/DropdownListItem.vue'
import AButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    ADropdownListItem,
    AButton
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    click(val) {
      this.$emit('click', val)
    }
  }
}
