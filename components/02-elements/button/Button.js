import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'

export default {
  components: { AlpacaIcon },
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    },
    defaultClass: {
      type: Boolean,
      default: true
    },
    defaultButtonIconClass: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    iconTitle: {
      type: String,
      default: null
    },
    defaultIconClass: {
      type: Boolean,
      default: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    blank: {
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
