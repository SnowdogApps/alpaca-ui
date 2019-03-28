import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaIcon from '../../atoms/icon/Icon.vue'
import AlpacaDivider from '../../02-elements/divider/Divider.vue'
import AlpacaDropdownList from '../../02-elements/dropdown-list/DropdownList.vue'
import AlpacaDropdownListItem from '../../02-elements/dropdown-list-item/DropdownListItem.vue'
import AlpacaActiveFilters from '../../03-modules/active-filters/ActiveFilters.vue'
import AlpacaSwatchFilter from '../swatch-filter/SwatchFilter.vue'
import AlpacaCheckboxFilter from '../checkbox-filter/CheckboxFilter.vue'
import AlpacaColorFilter from '../color-filter/ColorFilter.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaIcon,
    AlpacaDivider,
    AlpacaDropdownList,
    AlpacaDropdownListItem,
    AlpacaActiveFilters,
    AlpacaColorFilter,
    AlpacaSwatchFilter,
    AlpacaCheckboxFilter
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
