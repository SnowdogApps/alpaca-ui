import AlpacaImage from "@/components/02-elements/image/Image.vue"
import AlpacaPrice from "@/components/02-elements/price/Price.vue"
import AlpacaDescriptionList from "@/components/02-elements/list/DescriptionList.vue"
import AlpacaButton from "@/components/02-elements/button/Button.vue"
import AlpacaQuantityUpdate from "@/components/03-modules/quantity-update/QuantityUpdate.vue"

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
      defaultRemoveBtnAriaLabel: "Remove product"
    }
  },
  methods: {
    onRemove(val) {
      this.$emit("remove", val)
    },
    onChange(val) {
      this.$emit("change", val)
    }
  }
}
