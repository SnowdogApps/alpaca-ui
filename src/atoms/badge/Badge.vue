<template src="./Badge.html" />

<script>
import ABadge from './Badge.js'
import getClass from '../../../utils/helpers/get-class.js'

export default {
  name: 'AlpacaBadge',
  mixins: [ABadge, getClass]
}
</script>
