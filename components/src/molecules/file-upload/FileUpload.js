import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    AButton,
    ALabel
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
     * Top title
     */
    title: {
      type: String,
      default: 'Your file'
    },
    /**
     * Button text
     */
    buttonText: {
      type: String,
      default: 'Upload a file'
    },
    /**
     * Error text
     */
    errorText: {
      type: String,
      default: 'File is too big!'
    },
    /**
     * File name placeholder text
     */
    emptyText: {
      type: String,
      default: 'File not choosen'
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
      default: null
    },
    /**
     * Max file size in bytes
     */
    maxSize: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      fileName: '',
      error: false
    }
  },
  methods: {
    chooseFile() {
      this.$refs.fileInput.click()
    },
    updateFile() {
      const file = this.$refs.fileInput.files[0]
      if (file && this.maxSize && file.size > this.maxSize) {
        this.error = true
        return false
      }
      this.error = false
      this.fileName = file ? file.name : null
      if (this.fileName) {
        this.$refs.fileName.focus()
      }
    }
  }
}
