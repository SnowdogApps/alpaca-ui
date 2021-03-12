<template src="./Link.html" />

<script>
import ALink from './Link.js'
import getClass from '../../../utils/helpers/get-class.js'

export default {
  name: 'AlpacaLink',
  mixins: [ALink, getClass]
}
</script>
