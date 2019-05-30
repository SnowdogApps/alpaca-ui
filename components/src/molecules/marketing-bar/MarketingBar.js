// @vue/component
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  components: {
    AIcon,
    AButton
  },
  props: {
    /**
     * Storage name
     */
    dataType: {
      type: String,
      default: 'marketing-bar'
    },
    isBarVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isBarVisibleLocal: this.isBarVisible
    }
  },
  mounted () {
    // Display message if it wasn't closed before
    if (localStorage.getItem(this.dataType) !== 'closed') {
      this.isBarVisibleLocal = true
    }
  },
  methods: {
    onButtonClose () {
      localStorage.setItem(this.dataType, 'closed')
      this.isBarVisibleLocal = false
    }
  }
}
