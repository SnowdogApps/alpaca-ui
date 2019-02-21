import AlpacaContainer from '../../01-globals/container/Container.vue'
import AlpacaBreadcrumbs from '../../02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaToolbar from '../../03-modules/toolbar/Toolbar.vue'
import AlpacaCatalogFilter from '../../03-modules/filter/Filter.vue'
import AlpacaCatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaBreadcrumbs,
    AlpacaToolbar,
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
    },
    toolbar: {
      type: Object,
      required: true
    },
    breadcrumbs: {
      type: Array,
      required: true
    }
  },
  methods: {
    listView(){
      this.$emit('listView')
    },
    gridView(){
      this.$emit('gridView')
    }
  }
}
