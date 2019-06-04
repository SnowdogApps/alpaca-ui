<template src="./Wishlist.html" />

<script>
import AList from '../../atoms/list/List.vue'
import AProductItem from '../../03-modules/product-item/ProductItem.vue'

import AWishlist from './Wishlist.js'

export default {
  name: 'AlpacaWishlist',
  components: {
    AList,
    AProductItem
  },
  mixins: [AWishlist]
}
</script>

<style lang="scss" src="./Wishlist.scss" />
