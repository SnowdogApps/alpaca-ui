import Container from '../../01-globals/container/Container.vue'
import CatalogFilter from '../../03-modules/filter/Filter.vue'
import CatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'

export default {
  components: {
    Container,
    CatalogFilter,
    CatalogGridItem
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
