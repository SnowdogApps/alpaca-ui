import get from 'lodash.get'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaIcon
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    rootPositionSign: {
      type: String,
      default: '*'
    }
  },
  data () {
    return {
      items: [],
      currentItem: {
        label: '',
        path: ''
      }
    }
  },
  mounted() {
    this.items = this.prepareData(this.menuItems)
    this.currentItem = {
      path: this.rootPositionSign,
      nodes: this.menuItems
    }
  },
  computed: {
    prevLevel() {
      let path = ''

      if ((this.currentItem.path.match(/.nodes\[\d\]/g) || []).length) {
        // prepare path to previous element based on current item path
        path = this.currentItem.path.split('.').slice(0, -1).join('.')
      } else if ((this.currentItem.path.match(/\[\d\]/g) || []).length) {
        // if depth is only one digit, then go back to the root position
        path = this.rootPositionSign
      }

      return path
    }
  },
  methods: {
    prepareData(items, parentLevel) {
      return items.map((item, idx) => {
        const level = this.setLevel(parentLevel, idx)

        item['level'] = level

        if (item.nodes) item.nodes = this.prepareData(item.nodes, level)

        return item
      })
    },
    setLevel(currentLevel, nextLevel) {
      // create level path recognized by lodash.get function
      return currentLevel ? `${currentLevel}.nodes[${nextLevel}]` : `[${nextLevel}]`
    },
    load(levelPath) {
      const data = levelPath == this.rootPositionSign ? this.items : get(this.items, `${levelPath}`)
      this.currentItem = {
        label: data.label,
        path: levelPath,
        nodes: [...data.nodes || this.items]
      }
    }
  }
}
