import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import APrice from '../../atoms/price/Price.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: {
    AImage,
    AIcon,
    APrice,
    AList,
    AListItem,
    AButton
  },
  model: {
    prop: 'qty',
    event: 'change'
  },
  props: {
    /**
     * Product id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Product name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Product url (string value or URL)
     */
    url: {
      type: [URL, String],
      required: true
    },
    /**
     * Product image url
     */
    imageUrl: {
      type: String,
      required: true
    },
    /**
     * Product standard price
     */
    price: {
      type: String,
      required: true
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: String,
      required: true
    },
    /**
     * Product old price
     */
    oldPrice: {
      type: String,
      required: true
    },
    /**
     * Product options/attributes array (size, color etc)
     */
    options: {
      type: Array,
      default: null
    }
  },
  methods: {
    /**
     * Triggered when value is removed by id
     * @type {Event}
     */
    onRemove () {
      this.$emit('remove', this.id)
    },
    /**
     * Triggered when value is changed
     * @type {Event}
     */
    onChange (val) {
      this.$emit('change', val)
    }
  }
}
