import AButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AButton
  },
  props: {
    /**
     * File input id
     */
    inputId: {
      type: String,
      default: 'file'
    },
    /**
     * File input name
     */
    inputName: {
      type: String,
      default: 'file'
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
    },
    /**
     * List of accepted file types separated by a comma
     */
    acceptedFormats: {
      type: String,
      default: '.pdf,.doc,.png'
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
