<template src="./ProductListItem.html" />

<script>
import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import APrice from '../../atoms/price/Price.vue'
import ALabel from '../../atoms/label/Label.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import AButton from '../../atoms/button/Button.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'

import AProductListItem from './ProductListItem.js'

export default {
  name: 'AlpacaProductListItem',
  components: {
    AImage,
    AIcon,
    APrice,
    ALabel,
    AList,
    AListItem,
    AButton,
    AQuantityUpdate
  },
  mixins: [AProductListItem]
}
</script>

<style lang="scss" src="./ProductListItem.scss" />
