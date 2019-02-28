import breadcrumbs from '../../02-elements/breadcrumbs/mocks/breadcrumbs.json'
import gallery from '../../03-modules/gallery/mocks/gallery.json';
import product from './mocks/product.json';

import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaBreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaGallery from '../../03-modules/gallery/Gallery.vue'
import AlpacaReviewSummary from '../../03-modules/review/review-summary/ReviewSummary.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaHeading,
    AlpacaBreadcrumbs,
    AlpacaPrice,
    AlpacaGallery,
    AlpacaReviewSummary
  },
  data() {
    return {
      breadcrumbs,
      gallery,
      product
    }
  }
}
