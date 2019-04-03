import AButton from '../../molecules/button/Button.vue'

export default {
  components: {
    AButton
  },
  props: {
    dataType: {
      type: String,
      default: 'marketing-bar'
    }
  },
  data() {
    return {
      isBarVisible: true
    }
  },
  mounted() {
    // Display message if it wasn't closed before
    if (localStorage.getItem(this.dataType) !== 'closed') {
      this.isBarVisible = true
    }
  },
  methods: {
    onButtonClose() {
      localStorage.setItem(this.dataType, 'closed')
      this.isBarVisible = false
    }
  }
}
