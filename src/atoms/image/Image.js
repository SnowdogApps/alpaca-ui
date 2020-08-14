// @vue/component
export default {
  inheritAttrs: false,
  props: {
    /**
     * To use another tag instead of `img`, e.g. `picture`
     */
    tag: {
      type: String,
      default: 'img',
      validator: tag => tag === 'img' || tag === 'picture'
    }
  },
  computed: {
    usePicture () {
      return this.tag === 'picture'
    }
  }
}
