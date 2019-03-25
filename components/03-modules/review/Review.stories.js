import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaReview from './review/Review.vue'
import AlpacaReviewSummary from './review-summary/ReviewSummary.vue'
import AlpacaReviewAdd from './review-add/ReviewAdd.vue'

import reviews from './mocks/reviews.json'

storiesOf('Modules/Review', module)
  .add('Default', () => ({
    components: { AlpacaReview },
    data: () => ({
      reviews
    }),
    template: `
      <alpaca-review
        v-for="review in reviews"
        :key="review.id"
        :author="review.author"
        :title="review.title"
        :content="review.content"
        :date="review.date"
      />
  `
  }))
  .add('Summary', () => ({
    components: { AlpacaReviewSummary },
    template: `
      <alpaca-review-summary
        amountLink="#"
        addReviewLink="#"
        :reviewsQty="32"
      />
  `
  }))
  .add('Add', () => ({
    components: { AlpacaReviewAdd },
    template: `
      <alpaca-review-add
        product-title="Product name"
        heading-text="YOU'RE REVIEWING"
        legend-text=""
        @addReview="addReview"
      />
  `,
    methods: {
      addReview: action('Added')
    }
  }))
