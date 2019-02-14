import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaCatalogFilter from '../../03-modules/filter/Filter.vue'
import AlpacaCatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaCatalogFilter,
    AlpacaCatalogGridItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    filters: {
      type: Array,
      required: true
    }
  }
}
