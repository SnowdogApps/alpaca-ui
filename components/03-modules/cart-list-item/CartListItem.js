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
    product: {
      type: Object,
      required: true
    },
    removeAriaLabel: {
      type: String,
      default: 'Remove this product from your shopping cart'
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
