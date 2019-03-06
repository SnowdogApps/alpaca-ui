import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaBreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaSwatch from '../../02-elements/swatch/Swatch.vue'
import AlpacaTab from '../../02-elements/tabs/Tab.vue'
import AlpacaTabsContainer from '../../02-elements/tabs/TabsContainer.vue'
import AlpacaTabContent from '../../02-elements/tabs/TabContent.vue'
import AlpacaGallery from '../../03-modules/gallery/Gallery.vue'
import AlpacaBriefInfo from '../../03-modules/brief-info/BriefInfo.vue'
import AlpacaReviewSummary from '../../03-modules/review/review-summary/ReviewSummary.vue'
import AlpacaQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'

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
    AlpacaGallery,
    AlpacaBriefInfo,
    AlpacaReviewSummary,
    AlpacaQuantityUpdate
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
