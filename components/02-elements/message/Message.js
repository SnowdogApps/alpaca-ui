import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'

export default {
  components: { AlpacaButton },
  props: {
    type: {
      type: String,
      default: null
    },
    abort: {
      type: String,
      default: null
    },
    accept: {
      type: String,
      default: null
    },
    success: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ok(event) {
      this.$emit('abort', event)
    },
    cancel(event) {
      this.$emit('accept', event)
    },
  }
}
