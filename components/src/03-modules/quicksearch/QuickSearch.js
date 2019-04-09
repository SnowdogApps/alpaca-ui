import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import ALink from '../../atoms/link/Link.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AHeading from '../../atoms/heading/Heading.vue'
import AImage from '../../atoms/image/Image.vue'
import AButton from '../../atoms/button/Button.vue'
import APrice from '../../atoms/price/Price.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

export default {
  components: {
    AParagraph,
    ALink,
    AIcon,
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
