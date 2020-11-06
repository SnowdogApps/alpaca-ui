// @vue/component
export default {
  props: {
    variant: {
      type: [String, Array],
      default: ''
    },
    styles: {
      type: Object,
      default: () => ({
        base: {
          button: [
            'px-4',
            'h-12',
            'font-medium', 'uppercase',
            'transition-colors', 'duration-200', 'ease-in'
          ]
        },
        primary: {
          button: [
            'text-white',
            'bg-dark',
            'hover:text-primary',
            'hover:bg-secondary'
          ]
        },
        secondary: {
          button: [
            'text-primary',
            'bg-white',
            'border-2', 'border-dark',
            'hover:text-white',
            'hover:bg-dark'
          ]
        },
        fluid: {
          button: ['w-full']
        }
      })
    }
  },
  methods: {
    getClass (el) {
      let classes = []
      const baseStyles = this.styles.base
      const variantStyles = this.styles[this.variant]

      if (baseStyles) {
        classes = [...baseStyles[el]]
      }

      if (variantStyles) {
        if (typeof variantStyles[el] === 'string') {
          classes = variantStyles[el]
        } else {
          classes.push(variantStyles[el])
        }
      }
      return classes
    }
  }
}
