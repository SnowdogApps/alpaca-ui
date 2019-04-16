import AContainer from '../../atoms/container/Container.vue'
import AFilters from '../../03-modules/filters/Filters.vue'
import AGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'
import ABreadcrumbs from '../../atoms/breadcrumbs/Breadcrumbs.vue'
import AToolbar from '../../03-modules/toolbar/Toolbar.vue'

export default {
  components: {
    AContainer,
    AFilters,
    AGridItem,
    ABreadcrumbs,
    AToolbar
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
