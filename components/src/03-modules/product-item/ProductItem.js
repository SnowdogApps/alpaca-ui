import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import APrice from '../../atoms/price/Price.vue'
import ADescriptionList from '../../02-elements/description-list/DescriptionList.vue'
import AButton from '../../atoms/button/Button.vue'
import AQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'

// @vue/component
export default {
  components: {
    AImage,
    AIcon,
    APrice,
    ADescriptionList,
    AButton,
    AQuantityUpdate
  },
  model: {
    prop: 'quantity',
    event: 'change'
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    url: {
      type: [Object, String],
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    specialPrice: {
      type: String,
      required: true
    },
    oldPrice: {
      type: String,
      required: true
    },
    removeButton: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    itemTag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
      defaultRemoveBtnAriaLabel: 'Remove product'
    }
  },
  methods: {
    onRemove (val) {
      this.$emit('remove', val)
    },
    onChange (val) {
      this.$emit('change', val)
    }
  }
}
