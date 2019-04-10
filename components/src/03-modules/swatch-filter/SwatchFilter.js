import ADropdownListItem from '../../molecules/dropdown-list-item/DropdownListItem.vue'
import AButton from '../../atoms/button/Button.vue'

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
