import AlpacaContainer from '@/components/01-globals/container/Container.vue'
import AlpacaFilters from '@/components/03-modules/filters/Filters.vue'
import AlpacaGridItem from '@/components/03-modules/catalog-grid-item/CatalogGridItem.vue'
import AlpacaBreadcrumbs from '@/components/02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaToolbar from '@/components/03-modules/toolbar/Toolbar.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaFilters,
    AlpacaGridItem,
    AlpacaBreadcrumbs,
    AlpacaToolbar
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
