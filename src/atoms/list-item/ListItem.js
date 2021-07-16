import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * To use another tag instead of `li`
     */
    tag: {
      type: String,
      default: 'li'
    }
  },
  config: {
    base: {
      'list-item': [
        'p-2'
      ],
      'list-item[dt]': [
        'float-left', 'clear-left',
        'table-cell',
        'pt-0', 'pb-2', 'pl-0'
      ],
      'list-item[dd]': [
        'table-cell',
        'pt-0', 'pr-2', 'pb-2', 'pl-0'
      ]
    },
    primary: {
      'list-item[dt]': [
        'text-red-100'
      ]
    }
    // label: {
    //   'list-item': [
    //     'float-left', 'clear-left',
    //     'table-cell',
    //     'pt-0', 'pb-2', 'pl-0'
    //   ]
    // },
    // value: {
    //   'list-item': [
    //     'table-cell',
    //     'pt-0', 'pr-2', 'pb-2', 'pl-0'
    //   ]
    // }
  }
}
