import AContainer from '../../atoms/container/Container.vue'
import AHeading from '../../atoms/heading/Heading.vue'
import ABreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AButton from '../../02-elements/button/Button.vue'
import APrice from '../../atoms/price/Price.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'
import ATab from '../../02-elements/tabs/Tabs.vue'
import ATabsContainer from '../../02-elements/tabs-container/TabsContainer.vue'
import ATabContent from '../../02-elements/tab-content/TabContent.vue'
import AAdditionalContent from '../../03-modules/additional-content/AdditionalContent.vue'
import ACatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'
import AGallery from '../../03-modules/gallery/Gallery.vue'
import ABriefInfo from '../../03-modules/brief-info/BriefInfo.vue'
import AReviewSummary from '../../03-modules/review-summary/ReviewSummary.vue'
import AQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'
import ASlider from '../../03-modules/slider/Slider.vue'
import { Slide } from 'vue-carousel'

export default {
  components: {
    AContainer,
    AHeading,
    ABreadcrumbs,
    AButton,
    APrice,
    ASwatch,
    ATab,
    ATabsContainer,
    ATabContent,
    AAdditionalContent,
    ACatalogGridItem,
    AGallery,
    ABriefInfo,
    AReviewSummary,
    AQuantityUpdate,
    ASlider,
    Slide
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    briefInfo: {
      type: Object,
      required: true
    },
    gallery: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    stockAlertMaxQty: {
      type: Number,
      default: 5
    },
    inStockAlertText: {
      type: String,
      default: 'In stock - only'
    },
    inStockAlertTextSuffix: {
      type: String,
      default: 'left'
    },
    inStockText: {
      type: String,
      default: 'In stock'
    },
    outOfStockText: {
      type: String,
      default: 'Out of stock'
    },
    addToCartText: {
      type: String,
      default: 'Add to cart'
    },
    relatedProductsLabel: {
      type: String,
      default: 'Related products'
    },
    featuredProductsLabel: {
      type: String,
      default: 'You may also like'
    },
    banner: {
      type: Array,
      default: () => []
    },
    bannerAlt: {
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
  },
  data () {
    return {
      activeTab: this.tabs[0].tabId
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = this.tabs
        .filter(el => el.tabId === tab)
        .map(el => el.tabId)[0]
    }
  }
}
