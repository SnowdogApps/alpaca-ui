import AlpacaIcon from '../../01-globals/icon/Icon.vue'

export default {
  components: { AlpacaIcon },
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    customClass: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    secondary: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
