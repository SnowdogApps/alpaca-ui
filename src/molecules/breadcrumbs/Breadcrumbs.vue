<template src="./Breadcrumbs.html" />

<script>
import ALink from '../../atoms/link/Link.vue'
import ABreadcrumbs from './Breadcrumbs.js'
import getClass from '../../../utils/helpers/get-class.js'

export default {
  name: 'AlpacaBreadcrumbs',
  components: { ALink },
  mixins: [ABreadcrumbs, getClass]
}
</script>
