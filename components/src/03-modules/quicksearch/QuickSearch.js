import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import ALink from '../../atoms/link/Link.vue'
import AHeading from '../../atoms/heading/Heading.vue'
import AImage from '../../atoms/image/Image.vue'
import AButton from '../../02-elements/button/Button.vue'
import APrice from '../../02-elements/price/Price.vue'
import AList from '../../02-elements/list/List.vue'
import AListItem from '../../02-elements/list-item/ListItem.vue'

export default {
  components: {
    AParagraph,
    ALink,
    AHeading,
    AImage,
    AButton,
    APrice,
    AList,
    AListItem
  },
  props: {
    resultText: {
      type: String,
      required: true
    },
    resultTyped: {
      type: String,
      required: true
    },
    noResultText: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    manufacturers: {
      type: Array,
      required: true
    },
    isNoResult: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    seeAll() {
      this.$emit('seeAll')
    },
    showItems(items) {
      return items + ' item(s)'
    }
  }
}
