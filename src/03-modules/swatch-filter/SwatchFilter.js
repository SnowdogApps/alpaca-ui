import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: {
    AButton
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    click (val) {
      this.$emit('click', val)
    }
  }
}
