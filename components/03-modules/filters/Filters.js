import AlpacaHeading from '@alpaca-storybook/components/01-globals/heading/Heading.vue'
import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'
import AlpacaDivider from '@alpaca-storybook/components/02-elements/divider/Divider.vue'
import AlpacaDropdownList from '@alpaca-storybook/components/02-elements/dropdown-list/DropdownList.vue'
import AlpacaDropdownListItem from '@alpaca-storybook/components/02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaActiveFilters from '@alpaca-storybook/components/03-modules/active-filters/ActiveFilters.vue'
import AlpacaSwatchFilter from '@alpaca-storybook/components/03-modules/filter/swatch-filter/SwatchFilter.vue'
import AlpacaCheckboxFilter from '@alpaca-storybook/components/03-modules/filter/checkbox-filter/CheckboxFilter.vue'
import AlpacaColorFilter from '@alpaca-storybook/components/03-modules/filter/color-filter/ColorFilter.vue'

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
