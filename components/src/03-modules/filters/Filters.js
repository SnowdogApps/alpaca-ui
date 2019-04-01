import AHeading from '../../atoms/heading/Heading.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ADivider from '../../02-elements/divider/Divider.vue'
import ADropdownList from '../../02-elements/dropdown-list/DropdownList.vue'
import ADropdownListItem from '../../02-elements/dropdown-list-item/DropdownListItem.vue'
import AActiveFilters from '../../03-modules/active-filters/ActiveFilters.vue'
import ASwatchFilter from '../swatch-filter/SwatchFilter.vue'
import ACheckboxFilter from '../checkbox-filter/CheckboxFilter.vue'
import AColorFilter from '../color-filter/ColorFilter.vue'

export default {
  components: {
    AHeading,
    AIcon,
    ADivider,
    ADropdownList,
    ADropdownListItem,
    AActiveFilters,
    AColorFilter,
    ASwatchFilter,
    ACheckboxFilter
  },
  props: {
    activeFiltersHeading: {
      type: String,
      required: true
    },
    allFiltersHeading: {
      type: String,
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
  },
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    showFilters() {
      this.isVisible = !this.isVisible
    }
  }
}
