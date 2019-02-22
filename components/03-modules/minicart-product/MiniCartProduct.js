import AlpacaImage from "../../02-elements/image/Image.vue"
import AlpacaLink from "../../01-globals/link/Link.vue"
import AlpacaInput from "../../02-elements/form/input/Input.vue"
import AlpacaPrice from "../../02-elements/price/Price.vue"
import AlpacaButton from "../../02-elements/button/Button.vue"

export default {
  components: {
    AlpacaImage,
    AlpacaLink,
    AlpacaInput,
    AlpacaPrice,
    AlpacaButton
  },
  props: {
    productName: {
      type: String,
      required: true
    },
    productLink: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    updateButton: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    editIcon: {
      type: String,
      default: 'edit'
    },
    removeIcon: {
      type: String,
      default: 'remove'
    },
    price: {
      type: String,
      default: null
    },
    oldPrice: {
      type: String,
      default: null
    },
    specialPrice: {
      type: String,
      default: null
    }
  },
  methods: {
    remove(){
      this.$emit('remove')
    },
    edit(){
      this.$emit('edit')
    },
    update(){
      this.$emit('update')
    }
  }
}
