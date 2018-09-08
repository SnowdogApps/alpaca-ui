<template>
  <app>
    <alpaca-header />

    <container>
      <div class="catalog">
        <div class="catalog__sidebar">
          <catalog-filters />
        </div>
        <div class="catalog__products">
          <ul class="catalog-grid">
            <catalog-grid-item />
          </ul>
        </div>
      </div>
    </container>
  </app>
</template>

<script>
  import App from '../../01-globals/app/App.vue'
  import Container from '../../01-globals/container/Container.vue'
  import AlpacaHeader from '../../03-modules/header/Header.vue'
  import CatalogFilters from '../../03-modules/catalog-filters/CatalogFilters.vue'
  import CatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'

  export default {
    components: {
      App,
      Container,
      AlpacaHeader,
      CatalogFilters,
      CatalogGridItem
    }
  }
</script>

<style>

</style>
