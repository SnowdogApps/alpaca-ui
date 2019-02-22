import AlpacaLink from '../../01-globals/link/Link.vue'
import AlpacaImage from '../../02-elements/image/Image.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaInput from '../../02-elements/form/input/Input.vue'
import AlpacaDescriptionList from '../../02-elements/list/description-list/DescriptionList.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AlpacaLink,
    AlpacaImage,
    AlpacaPrice,
    AlpacaInput,
    AlpacaDescriptionList,
    AlpacaButton
  },
  model: {
    prop: 'quantity',
    event: 'change'
  },
  props: {
    productImage: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      default: null
    },
    href: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    productPrice: {
      type: String,
      required: true
    },
    productId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    productOptions: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: 'Qty'
    },
    placeholder: {
      type: String,
      default: 'Qty'
    },
    hiddenLabel: {
      type: Boolean,
      default: false
    },
    maxInputValue: {
      type: Number,
      default: null
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit')
    },
    onRemove() {
      this.$emit('remove')
    },
    onChange(val){
      this.$emit('change', val)
    }
  }
}
