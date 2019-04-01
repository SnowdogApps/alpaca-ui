import APicture from '../../03-modules/picture/Picture.vue'

export default {
  components: {
    APicture
  },
  props: {
    picture: {
      type: Array,
      default: () => []
    },
    pictureAlt: {
      type: String,
      default: ''
    },
    firstColumnText: {
      type: String,
      default: ''
    },
    secondColumnText: {
      type: String,
      default: ''
    }
  }
}
