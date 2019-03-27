export default {
  props: {
    label: {
      type: String,
      default: 'Password Strength'
    },
    indicators: {
      type: Object,
      default() {
        return {
          0: 'No Password',
          1: 'Weak',
          2: 'Medium',
          3: 'Strong',
          4: 'Very strong'
        }
      },

    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicatorClass() {
      let indicatorClass
      switch(this.value) {
        case 0:
        default:
          indicatorClass = 'password-none'
          break
        case 1:
          indicatorClass = 'password-weak'
          break
        case 2:
          indicatorClass = 'password-medium'
          break
        case 3:
          indicatorClass = 'password-strong'
          break
        case 4:
          indicatorClass = 'password-very-strong'
          break
      }
      return indicatorClass
    }
  }
}
