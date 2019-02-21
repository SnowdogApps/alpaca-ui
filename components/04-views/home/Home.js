import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaBanner from '../../02-elements/banner/Banner.vue'
import AlpacaList from '../../02-elements/list/List.vue'
import AlpacaListImageItem from '../../02-elements/list/list-image-item/ListImageItem.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaBanner,
    AlpacaList,
    AlpacaListImageItem
  },
  props: {
    mainBanner: {
      type: Object,
      required: true
    },
    smallBanners: {
      type: Array,
      required: true
    },
    mediumBanners: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    headingLevel: {
      type: Number,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    imageListElements: {
      type: Array,
      required: true
    }
  }
}
