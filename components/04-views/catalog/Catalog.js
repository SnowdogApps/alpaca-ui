import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaFilters from '../../03-modules/filter/filters/Filters.vue'
import AlpacaGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaFilters,
    AlpacaGridItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    activeFilterItems: {
      type: Array,
      required: true
    },
    swatchItems: {
      type: Array,
      required: true
    },
    colorItems: {
      type: Array,
      required: true
    },
    checkboxItems: {
      type: Array,
      required: true
    }
  }
}
