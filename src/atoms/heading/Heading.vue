<template src="./Heading.html" />

<script>
import AHeading from './Heading.js'
import getClass from '@utils/helpers/get-class.js'

export default {
  name: 'AlpacaHeading',
  mixins: [AHeading, getClass]
}
</script>
