import AlpacaContainer from '../../atoms/container/Container.vue'
import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaBreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaSwatch from '../../02-elements/swatch/Swatch.vue'
import AlpacaTab from '../../02-elements/tabs/Tabs.vue'
import AlpacaTabsContainer from '../../02-elements/tabs-container/TabsContainer.vue'
import AlpacaTabContent from '../../02-elements/tab-content/TabContent.vue'
import AlpacaAdditionalContent from '../../03-modules/additional-content/AdditionalContent.vue'
import AlpacaCatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'
import AlpacaGallery from '../../03-modules/gallery/Gallery.vue'
import AlpacaBriefInfo from '../../03-modules/brief-info/BriefInfo.vue'
import AlpacaReviewSummary from '../../03-modules/review-summary/ReviewSummary.vue'
import AlpacaQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'
import AlpacaSlider from '../../03-modules/slider/Slider.vue'
import { Slide } from 'vue-carousel'

export default {
  components: {
    AlpacaContainer,
    AlpacaHeading,
    AlpacaBreadcrumbs,
    AlpacaButton,
    AlpacaPrice,
    AlpacaSwatch,
    AlpacaTab,
    AlpacaTabsContainer,
    AlpacaTabContent,
    AlpacaAdditionalContent,
    AlpacaCatalogGridItem,
    AlpacaGallery,
    AlpacaBriefInfo,
    AlpacaReviewSummary,
    AlpacaQuantityUpdate,
    AlpacaSlider,
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
