import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * Array with breadcrumbs
     */
    breadcrumbs: {
      type: Array,
      required: true
    },
    /**
     * Describes the type of navigation provided in the nav element
     */
    breadcrumbsNavAriaLabel: {
      type: String,
      default: 'Breadcrumb'
    }
  },
  config: {
    base: {
      breadcrumbs: [
        'hidden', 'lg:block',
        'min-h-24'
      ],
      breadcrumbs__list: [
        'flex', 'flex-wrap'
      ],
      'breadcrumbs__list-item': [
        'flex', 'items-stretch',
        'text-sm', 'leading-6'
      ],
      breadcrumbs__link: [
        'flex', 'items-center',
        'text-gray-400', 'hover:text-gray-500'
      ],
      'breadcrumbs__link--current': [
        'flex', 'items-center',
        'text-gray-500'
      ],
      breadcrumbs__separator: [
        'mx-2'
      ]
    }
  }
}
