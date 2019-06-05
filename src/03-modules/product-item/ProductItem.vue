<template src="./ProductItem.html" />

<script>
import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import APrice from '../../atoms/price/Price.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import AButton from '../../atoms/button/Button.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'

import AProductItem from './ProductItem.js'

export default {
  name: 'AlpacaProductItem',
  components: {
    AImage,
    AIcon,
    APrice,
    AList,
    AListItem,
    AButton,
    AQuantityUpdate
  },
  mixins: [AProductItem]
}
</script>

<style lang="scss" src="./ProductItem.scss" />
