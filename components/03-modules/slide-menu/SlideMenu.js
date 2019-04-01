import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'

export default {
  components: {
    AlpacaIcon,
    AlpacaButton
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    startLevel: {
      type: String,
      default: ''
    },
    prevIcon: {
      type: String,
      default: 'angle-left'
    },
    nextIcon: {
      type: String,
      default: 'angle-right'
    }
  },
  data () {
    return {
      items: [],
      currentLevel: this.startLevel,
      direction: 'ltr'
    }
  },
  mounted() {
    this.items = this.prepareData(this.menuItems)
  },
  computed: {
    currentItem() {
      const item = this.getDataByLevelPath(this.currentLevel)
      return {
        label: item.label,
        nodes: item.nodes
      }
    },
    prevLevel() {
      return this.currentLevel.slice(0, -1)
    },
    isRootPosition() {
      return this.currentLevel === this.prevLevel
    },
    transitionName() {
      return `slide-${this.direction}`
    }
  },
  watch: {
    currentLevel(newVal, oldVal) {
      this.direction = newVal.length > oldVal.length ? 'ltr' : 'rtl'
    }
  },
  methods: {
    prepareData(items, parentLevel) {
      return items.map((item, idx) => {
        const level = parentLevel ? `${parentLevel}${idx}` : `${idx}`

        item['level'] = level

        if (item.nodes) {
          item.nodes = this.prepareData(item.nodes, level)
        }

        return item
      })
    },
    getDataByLevelPath(levelPath) {
      let data

      String(levelPath).split('').forEach(level => {
        data = data && data.nodes ? data.nodes[level] : this.items[level]
      })

      return data || { nodes: this.items }
    },
    load(levelPath) {
      this.currentLevel = levelPath
    }
  }
}
