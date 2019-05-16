import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: {
    AButton,
    AIcon
  },
  props: {
    items: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: 'star'
    },
    iconBorder: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#fab216'
    },
    unselectColor: {
      type: String,
      default: '#c9c9c9'
    }
  },
  data () {
    return {
      isActiveLocal: this.isActive,
      localItems: Array.from(Array(this.items), (x, index) => index + 1)
        .map(el => ({ val: el, isActive: false }))
    }
  },
  methods: {
    setActive (item, isActive) {
      this.localItems.map(el => {
        if (item.val >= el.val) {
          el.isActive = true
        } else {
          el.isActive = false
        }
      })
      console.log(this.localItems)
    },
    select (value, item) {
      this.isActiveLocal = value
    },
    showIcon (item) {
      if ((item.isActive && !this.iconBorder) || (item.isActive && this.iconBorder) || (!item.isActive && !this.iconBorder)) {
        return this.icon
      }
      if (!item.isActive && this.iconBorder) {
        return this.iconBorder
      }
    }
  }
}
