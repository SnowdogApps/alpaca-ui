import AButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AButton
  },
  props: {
    /**
     * List of accepted file types separated by a comma
     */
    acceptedFormats: {
      type: String,
      default: '.pdf,.doc,.png'
    },
    /**
     * Custom input class
     */
    inputClass: {
      type: String,
      default: null
    },
    /**
     * Custom label class
     */
    labelClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      fileName: ''
    }
  },
  methods: {
    chooseFile() {
      this.$refs.fileInput.click()
    },
    updateFileName() {
      this.fileName = this.$refs.fileInput.value.split('\\').pop()

      if (this.fileName) {
        this.$refs.fileName.focus()
      }
    }
  }
}
