<template src="./Breadcrumbs.html" />

<script>
import ABreadcrumbs from './Breadcrumbs.js'
import getClass from '../../../utils/helpers/get-class.js'

export default {
  name: 'AlpacaBreadcrumbs',
  mixins: [ABreadcrumbs, getClass]
}
</script>
