import AlpacaSelect from '@alpaca-storybook/components/02-elements/form/select/Select.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'
import AlpacaPager from '@alpaca-storybook/components/03-modules/pager/Pager.vue'

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
    sortBy: {
      type: Array,
      default: null
    },
    sortByLabel: {
      type: String,
      default: null
    },
    sortByName: {
      type: String,
      default: null
    },
    sortById: {
      type: String,
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
    },
    change(event) {
      this.$emit('change', event)
    }
  }
}
