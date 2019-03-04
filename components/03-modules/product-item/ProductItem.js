import AlpacaImage from "../../02-elements/image/Image.vue"
import AlpacaPrice from "../../02-elements/price/Price.vue"
import AlpacaDescriptionList from "../../02-elements/list/DescriptionList.vue"
import AlpacaButton from "../../02-elements/button/Button.vue"
import AlpacaQuantityUpdate from "../../03-modules/quantity-update/QuantityUpdate.vue"

export default {
  components: {
    AlpacaImage,
    AlpacaPrice,
    AlpacaDescriptionList,
    AlpacaButton,
    AlpacaQuantityUpdate
  },
  model: {
    prop: "quantity",
    event: "change"
  },
  props: {
    itemTag: {
      type: String,
      default: 'div'
    },
    productImage: {
      type: Object,
      required: true
    },
    quantity: {
      type: Object,
      default: null
    },
    removeBtn: {
      type: Object,
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
      type: Object,
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
      default: null
    }
  },
  data () {
    return {
      defaultRemoveBtnAriaLabel: "Remove product"
    }
  },
  methods: {
    onRemove() {
      this.$emit("remove")
    },
    onChange(val) {
      this.$emit("change", val)
    }
  }
}
