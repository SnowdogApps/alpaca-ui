import AHeading from '../../atoms/heading/Heading.vue'
import ABanner from '../../atoms/banner/Banner.vue'
import AList from '../../02-elements/list/List.vue'
import AListImageItem from '../../02-elements/list-image-item/ListImageItem.vue'

// @vue/component
export default {
  components: {
    AHeading,
    ABanner,
    AList,
    AListImageItem
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
