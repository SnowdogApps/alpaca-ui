import AlpacaImage from '../../02-elements/image/Image'

export default {
  components: {
    AlpacaImage
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
