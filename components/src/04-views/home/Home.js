import AHeading from '../../atoms/heading/Heading.vue'
import AImage from '../../atoms/image/Image.vue'
import ABanner from '../../atoms/banner/Banner.vue'
import AList from '../../02-elements/list/List.vue'
import AListItem from '../../02-elements/list-item/ListItem.vue'

export default {
  components: {
    AImage,
    AHeading,
    ABanner,
    AList,
    AListItem
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
