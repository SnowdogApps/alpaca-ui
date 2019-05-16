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
    },
    average: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      isActiveLocal: this.isActive,
      localItems: Array.from(Array(this.items), (x, index) => index + 1)
        .map(el => ({ val: el, isActive: false }))
    }
  },
  computed: {
    showAverage () {
      const average = this.average / this.items * 100
      return `polygon(0 0, ${average} 0, ${average} 100%, 0% 100%)`
    }
  },
  methods: {
    setActive (item) {
      this.localItems.map(el => {
        el.isActive = item.val >= el.val
      })
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
