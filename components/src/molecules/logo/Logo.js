import AImage from '../../atoms/image/Image.vue'

export default {
  components: { AImage },
  props: {
    src: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
