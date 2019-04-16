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
     * List tag
     */
    tagItem: {
      type: String,
      default: 'li'
    },
    /**
     * Array with list items. Every item should have key: id, text
     */
    items: {
      type: Array,
      default: null
    }
  }
}
