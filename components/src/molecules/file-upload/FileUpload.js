import AButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AButton
  },
  props: {
    labelText: {
      type: String,
      default: 'Your file (pdf, doc, max 1 MB)'
    },
    /**
     * List of accepted file types separated by a comma
     */
    acceptedFormats: {
      type: String,
      default: '.pdf,.doc,.png'
    },
    uploadButtonText: {
      type: String,
      default: 'Upload a file'
    },
    emptyFileNameText: {
      type: String,
      default: 'File not choosen'
    },
    fileUploadLabelClass: {
      type: String,
      default: null
    },
    fileUploadInputClass: {
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
