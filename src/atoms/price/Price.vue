<template src="./Price.html" />

<script>
import APrice from './Price.js'
import getClass from '@utils/helpers/get-class.js'

export default {
  name: 'AlpacaPrice',
  mixins: [APrice, getClass]
}
</script>
