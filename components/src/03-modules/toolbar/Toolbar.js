import AlpacaSelect from '../../02-elements/select/Select.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaPager from '../../03-modules/pager/Pager.vue'

export default {
  components: {
    AlpacaSelect,
    AlpacaButton,
    AlpacaPager
  },
  props: {
    showMode: {
      type: Boolean,
      default: false
    },
    showSorter: {
      type: Boolean,
      default: false
    },
    showLimit: {
      type: Boolean,
      default: false
    },
    showAmount: {
      type: Boolean,
      default: false
    },
    showPager: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: Object,
      default: null
    },
    limiter: {
      type: Object,
      default: null
    },
    pager: {
      type: Object,
      default: null
    },
    amount: {
      type: Object,
      default: null
    }
  },
  computed: {
    currentPage () {
      return this.pager.page
    }
  },
  methods: {
    setCurrentPage(page) {
      this.pager.page = page
    },
    listView(event){
      this.$emit('listView', event)
    },
    gridView(event){
      this.$emit('gridView', event)
    }
  }
}
