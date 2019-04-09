import AButton from '../../02-elements/button/Button.vue'

export default {
  components: { AButton },
  props: {
    /**
     * Cancel button text
     */
    action1Title: {
      type: String,
      default: null
    },
    /**
     * Accept button text
     */
    action2Title: {
      type: String,
      default: null
    }
  },
  methods: {
    action1(event) {
      /**
       * Event for action1
       * @type {Event}
       */
      this.$emit('action1', event)
    },
    action2(event) {
      /**
       * Event for action2
       * @type {Event}
       */
      this.$emit('action2', event)
    },
  }
}
