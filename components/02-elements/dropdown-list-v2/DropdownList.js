import AlpacaIcon from '../../01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaIcon
  },
  provide: {
    nested: true
  },
  inject: {
    nested: {
      default: false
    }
  },
  props: {
    depth: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    nodes: {
      type: Array,
      default: null
    },
    secondary: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    inner: {
      type: Boolean,
      default: false
    },
    // inner: {
    //   type: Boolean,
    //   default() { return this.nested }
    // },
    screenM: {
      type: Boolean,
      default: false
    },
    collapse: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      collapseLocal: this.collapse
    }
  },
  beforeCreate: function () {
    this.$options.components.DropdownList = require('./DropdownList.vue').default
  },
  computed: {
    iconClasses() {
      return {
        'fa-plus-square-o': !this.collapseLocal,
        'fa-minus-square-o': this.collapseLocal
      }
    },
    labelClasses() {
      return { 'has-children': this.nodes }
    },
    indent() {
      return {}
    }
  },
  methods: {
    toggleChildren() {
      this.collapseLocal = !this.collapseLocal
    }
  },
  watch: {
    collapse(val) {
      this.collapseLocal = val
    }
  }
}
