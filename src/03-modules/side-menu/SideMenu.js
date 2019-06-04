// @vue/component
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    showSideMenu () {
      this.$refs.sideMenu.show('side-menu')
    }
  }
}
