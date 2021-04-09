import getClass from '../../../utils/helpers/get-class'

export default {
  mixins: [getClass],
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    ratioWidth: {
      type: String,
      default: null
    },
    ratioHeight: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      config: {
        base: {
          image: [
            'max-w-full',
            'object-contain'
          ]
        }
      }
    }
  }
}
