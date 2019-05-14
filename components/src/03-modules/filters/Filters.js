import AHeading from '../../atoms/heading/Heading.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ADivider from '../../../../cookbook/src/atoms/divider/Divider.vue'
import AActiveFilters from '../../03-modules/active-filters/ActiveFilters.vue'
import ASwatchFilter from '../swatch-filter/SwatchFilter.vue'
import ACheckboxFilter from '../checkbox-filter/CheckboxFilter.vue'
import AColorFilter from '../color-filter/ColorFilter.vue'

// @vue/component
export default {
  components: {
    AHeading,
    AIcon,
    ADivider,
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
  data () {
    return {
      isVisible: true
    }
  },
  methods: {
    showFilters () {
      this.isVisible = !this.isVisible
    }
  }
}
