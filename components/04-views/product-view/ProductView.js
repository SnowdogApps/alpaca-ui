import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaBreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaSwatch from '../../02-elements/swatch/Swatch.vue';
import AlpacaGallery from '../../03-modules/gallery/Gallery.vue'
import AlpacaReviewSummary from '../../03-modules/review/review-summary/ReviewSummary.vue'
import AlpacaQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaHeading,
    AlpacaBreadcrumbs,
    AlpacaPrice,
    AlpacaSwatch,
    AlpacaGallery,
    AlpacaReviewSummary,
    AlpacaQuantityUpdate
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    },
    gallery: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  }
}
