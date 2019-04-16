import AListItem from '../list-item/ListItem.vue'

export default {
  components: { AListItem },
  props: {
    /**
     * List tag
     */
    tagList: {
      type: String,
      default: 'ul'
    },
    /**
     * List item tag
     */
    tagItem: {
      type: String,
      default: 'li'
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
