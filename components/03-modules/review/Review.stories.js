import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaReview from './review/Review.vue'
import AlpacaReviewSummary from './review-summary/ReviewSummary.vue'
import AlpacaReviewAdd from './review-add/ReviewAdd.vue'

import reviews from './mocks/reviews.json'

storiesOf('Modules/Review', module)
  .add('Default', () => ({
    components: { App, AlpacaReview },
    data: () => ({
      reviews
    }),
    template: `
    <app>
      <alpaca-review
        v-for="review in reviews"
        :key="review.id"
        :author="review.author"
        :title="review.title"
        :content="review.content"
        :date="review.date"
      />
    </app>
  `
  }))
  .add('Summary', () => ({
    components: { App, AlpacaReviewSummary },
    template: `
    <app>
      <alpaca-review-summary
        amountLink="#"
        addReviewLink="#"
        :reviewsQty="32"
      />
    </app>
  `
  }))
  .add('Add', () => ({
    components: { App, AlpacaReviewAdd },
    template: `
    <app>
      <alpaca-review-add
        product-title="Product name"
        heading-text="YOU'RE REVIEWING"
        legend-text=""
        @addReview="addReview"
      />
    </app>
  `,
    methods: {
      addReview: action('Added')
    }
  }))
