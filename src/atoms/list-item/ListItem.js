import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  props: {
    /**
     * To use another tag instead of `li`
     */
    tag: {
      type: String,
      default: 'li'
    }
  },
  data () {
    return {
      config: {
        primary: {
          'list-item': [
            'p-2'
          ]
        }
      }
    }
  }
}
