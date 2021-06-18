import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  data () {
    return {
      config: {
        base: {
          label: [
            'leading-relaxed'
          ]
        },
        primary: {
          label: [
            'text-gray-800'
          ]
        },
        hidden: {
          label: [
            'sr-only'
          ]
        }
      }
    }
  }
}
