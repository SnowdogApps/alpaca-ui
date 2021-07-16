export default {
  computed: {
    alpacaConfig () {
      const config = this.$options.config

      return config
    }
  },
  props: {
    variant: {
      type: [String, Array],
      default: ''
    }
  },
  methods: {
    getClass (el) {
      const styles = this.alpacaConfig
      const baseStyles = styles.base
      const primaryStyles = styles.primary
      let variantStyles
      let classes = []
      let tagElement = el

      if (this.tag) {
        tagElement = `${el}[${this.tag}]`
      }

      if (baseStyles) {
        classes = [...baseStyles[el]]
        if (baseStyles[tagElement]) {
          classes.push(baseStyles[tagElement])
        }
      }

      if (this.variant.length === 0) {
        primaryStyles &&
          classes.push(primaryStyles[el], primaryStyles[tagElement])
      } else if (typeof this.variant === 'string' && this.variant !== 'none') {
        variantStyles = styles[this.variant]
        variantStyles &&
          classes.push(variantStyles[el], variantStyles[tagElement])
      } else if (typeof this.variant === 'object') {
        this.variant.forEach((item) => {
          variantStyles = styles[item]
          variantStyles &&
            classes.push(variantStyles[el], variantStyles[tagElement])
        })
      }

      return classes
    }
  }
}
