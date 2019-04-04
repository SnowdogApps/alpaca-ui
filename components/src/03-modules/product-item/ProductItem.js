import AImage from "../../atoms/image/Image.vue"
import APrice from "../../02-elements/price/Price.vue"
import ADescriptionList from "../../atoms/description-list/DescriptionList.vue"
import AButton from "../../02-elements/button/Button.vue"
import AQuantityUpdate from "../../03-modules/quantity-update/QuantityUpdate.vue"

export default {
  components: {
    AImage,
    APrice,
    ADescriptionList,
    AButton,
    AQuantityUpdate
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
