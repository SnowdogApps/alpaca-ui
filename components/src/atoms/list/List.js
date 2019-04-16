import AListItem from '../list-item/ListItem.vue'

export default {
  components: { AListItem },
  props: {
    /**
     *  Tag
     */
    tag: {
      type: String,
      default: 'ul'
    },
    /**
     * Array with list items
     */
    items: {
      type: Array,
      default: null
    }
  }
}
