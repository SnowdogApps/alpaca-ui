import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: {
    AIcon,
    AButton
  },
  props: {
    text: {
      type: String,
      required: true
    },
    dataType: {
      type: String,
      required: true
    },
    closeIcon: {
      type: String,
      default: null
    },
    closeButton: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: 'Cookie policy message'
    },
    closeAriaLabel: {
      type: String,
      default: 'Close cookie message'
    }
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  mounted () {
    if (localStorage.getItem(this.dataType) !== 'closed') {
      this.isOpen = true
    }
  },
  methods: {
    closeBar () {
      const focusable = document.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]')

      this.isOpen = false
      localStorage.setItem(this.dataType, 'closed')
      // after closing message box move focus on first focusable element on the page
      if (focusable.length) {
        let firstFocusable = [...focusable].find(el => el.offsetParent !== null)
        firstFocusable.focus()
      }
    }
  }
}
