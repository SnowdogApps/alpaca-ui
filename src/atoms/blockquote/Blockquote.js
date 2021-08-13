import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  config: {
    base: {
      blockquote: [
        'my-2',
        'py-2', 'pl-4', 'pr-2',
        'border-l-4', 'border-solid',
        'leading-relaxed'
      ]
    },
    primary: {
      blockquote: [
        'border-light'
      ]
    }
  }
}
