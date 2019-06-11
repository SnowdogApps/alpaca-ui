// @vue/component
export default {
  props: {
    copyrightText: {
      type: String,
      required: true
    },
    socialListSubtitle: {
      type: String,
      required: true
    },
    socialMenu: {
      type: Array,
      required: true
    },
    menu: {
      type: Array,
      required: true
    },
    cookieText: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      required: true
    },
    checkboxes: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    submitNewsletter (payload) {
      this.$emit('submitNewsletter', payload)
    }
  }
}
