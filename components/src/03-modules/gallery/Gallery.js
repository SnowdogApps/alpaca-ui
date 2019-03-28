import uniqueId from 'lodash.uniqueid'

import AlpacaBadge from '../../atoms/badge/Badge.vue'
import AlpacaImage from '../../02-elements/image/Image.vue'
import AlpacaIcon from '../../atoms/icon/Icon.vue'

export default {
  components: {
    AlpacaBadge,
    AlpacaImage,
    AlpacaIcon
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    horizontal: {
      type: Boolean,
      default: null
    },
    productLabel: {
      type: Object,
      default: null
    },
    mainImage: {
      type: Number,
      default: 1
    }
  },
  data(){
    return {
      currentImage: this.mainImage === 0
        ? this.mainImage
        : this.mainImage >= this.images.length
          ? this.images.length - 1
          : this.mainImage -1
    }
  },
  computed: {
    getThumbsWithKey() {
      return this.images.map(image => ({ key: uniqueId("image"), image }))
    },
    selectedImage() {
      return this.images[this.currentImage]
    }
  },
  methods: {
    setCurrentImage (val) {
      if(this.images[val]){
        this.currentImage = val
      }
    }
  }
}
