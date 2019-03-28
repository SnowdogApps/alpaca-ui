import uniqueId from 'lodash.uniqueid'

export default {
  props: {
    link: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  computed: {
    getImageWithKey() {
      return this.image.sources.map(source => ({ key: uniqueId("image"), source }))
    }
  }
}
