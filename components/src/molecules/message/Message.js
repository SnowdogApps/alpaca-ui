import AButton from '../../02-elements/button/Button.vue'

export default {
  components: { AButton },
  props: {
    /**
     * Cancel button text
     */
    action1: {
      type: String,
      default: null
    },
    /**
     * Accept button text
     */
    action2: {
      type: String,
      default: null
    }
  },
  methods: {
    action1Event(event) {
      /**
       * Event for action1
       * @type {Event}
       */
      this.$emit('action1', event)
    },
    action2Event(event) {
      /**
       * Event for action2
       * @type {Event}
       */
      this.$emit('action2', event)
    },
  }
}
