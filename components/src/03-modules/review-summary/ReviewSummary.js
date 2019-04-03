import ALink from '../../atoms/link/Link.vue'
import AButton from '../../molecules/button/Button.vue'

export default {
  components: {
    ALink,
    AButton
  },
  props: {
    reviewsQty: {
      type: Number,
      required: true
    },
    addReviewLink: {
      type: String,
      required: true
    },
    amountLink: {
      type: String,
      default: null
    }
  }
}
