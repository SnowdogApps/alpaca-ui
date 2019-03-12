import AlpacaLink from '@alpaca-storybook/components/01-globals/link/Link.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'

export default {
  components: {
    AlpacaLink,
    AlpacaButton
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
