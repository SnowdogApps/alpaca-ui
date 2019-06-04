// @vue/component
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  components: {
    AIcon,
    AButton
  },
  methods: {
    closeBar () {
      /**
       * Triggered close button
       * @type {Event}
       */
      this.$emit('close')
    }
  }
}
