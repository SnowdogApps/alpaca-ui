// @vue/component
export default {
  props: {
    /**
     * Current page
     */
    currentPage: {
      type: Number,
      required: true
    },
    /**
     * All pagers
     */
    numberOfPages: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showFirst: false,
      showLast: false,
      visibleNumbers: 3
    }
  },
  computed: {
    listOfPageNumbers () {
      return Array.from(Array(this.numberOfPages), (_, i) => i + 1)
    },
    limitedPageNumbers () {
      return this.setLimitedPageNumber()
    }
  },
  methods: {
    setLimitedPageNumber () {
      if (this.numberOfPages <= this.visibleNumbers) {
        this.showFirst = false
        this.showLast = false

        return this.listOfPageNumbers
      }

      if (
        this.currentPage <
        this.visibleNumbers - Math.floor(this.visibleNumbers / 2) + 1
      ) {
        this.showFirst = false
        this.showLast = true

        return this.listOfPageNumbers.slice(0, this.visibleNumbers)
      }

      if (
        this.numberOfPages - this.currentPage <
        this.visibleNumbers - Math.floor(this.visibleNumbers / 2) + 1
      ) {
        this.showFirst = true
        this.showLast = false

        return this.listOfPageNumbers.slice(
          this.numberOfPages - this.visibleNumbers
        )
      }

      this.showFirst = true
      this.showLast = true

      return this.listOfPageNumbers.slice(
        this.currentPage - Math.floor(this.visibleNumbers / 2) - 1,
        this.currentPage + Math.floor(this.visibleNumbers / 2)
      )
    },
    setCurrentPage (value) {
      this.currentPage = value
      /**
       * Triggered when page is changed
       * @type {Event}
       */
      this.$emit('update', value)
    }
  }
}
