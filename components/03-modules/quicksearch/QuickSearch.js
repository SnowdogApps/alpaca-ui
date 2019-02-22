import AlpacaParagraph from '../../01-globals/paragraph/Paragraph.vue'
import AlpacaLink from '../../01-globals/link/Link.vue'
import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaImage from '../../02-elements/image/Image.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaList from '../../02-elements/list/List.vue'
import AlpacaListItem from '../../02-elements/list/list-item/ListItem.vue'

export default {
  components: {
    AlpacaParagraph,
    AlpacaLink,
    AlpacaHeading,
    AlpacaImage,
    AlpacaButton,
    AlpacaPrice,
    AlpacaList,
    AlpacaListItem
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
