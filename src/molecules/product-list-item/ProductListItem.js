// @vue/component
export default {
  model: {
    prop: 'qty',
    event: 'change'
  },
  props: {
    /**
     * Product id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Product name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Product url
     */
    url: {
      type: String,
      required: true
    },
    /**
     * Product image url
     */
    imageUrl: {
      type: String,
      required: true
    },
    /**
     * Product standard price
     */
    price: {
      type: String,
      required: true
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: String,
      required: true
    },
    /**
     * Product old price
     */
    oldPrice: {
      type: String,
      required: true
    },
    /**
     * Product options/attributes array (size, color etc)
     */
    options: {
      type: Array,
      default: null
    },
    /**
     * Product quantity
     */
    qty: {
      type: Number,
      default: 1
    },
    /**
     * Specify if qty component is not needed (default: false)
     */
    hideQty: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onRemove () {
      /**
       * Triggered when value is removed by id
       * @type {Event}
       */
      this.$emit('remove', this.id)
    },
    onChange (val) {
      /**
       * Triggered when value is changed
       * @type {Event}
       */
      this.$emit('change', val)
    }
  }
}
