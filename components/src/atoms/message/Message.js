import AButton from '../../02-elements/button/Button.vue'

export default {
  components: { AButton },
  props: {
    /**
     * Cancel button text
     */
    cancelButton: {
      type: String,
      default: null
    },
    /**
     * Accept button text
     */
    acceptButton: {
      type: String,
      default: null
    }
  },
  methods: {
    acceptAction(event) {
      /**
       * Event for accept action
       * @type {Event}
       */
      this.$emit('accept', event)
    },
    cancelAction(event) {
      /**
       * Event for cancel action
       * @type {Event}
       */
      this.$emit('cancel', event)
    },
  }
}
