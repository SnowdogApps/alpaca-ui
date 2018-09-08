<template>
  <app>
    <alpaca-header />

    <container>
      <div class="catalog">
        <div class="catalog__sidebar">
          <catalog-filters :filters="filters"/>
        </div>
        <div class="catalog__products">
          <ul class="catalog-grid">
            <catalog-grid-item
              v-for="product in products"
              :key="product.name"
              :name="product.name"
              :image="productImageUrl(product.image)"
              :price="product.price.regularPrice.amount.value"
              :special-price="product.special_price"
            />
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
    props: ['products', 'storeConfig', 'filters'],
    components: {
      App,
      Container,
      AlpacaHeader,
      CatalogFilters,
      CatalogGridItem
    },
    methods: {
      productImageUrl(image) {
        return this.storeConfig.base_media_url + 'catalog/product' + image
      }
    }
  }
</script>

<style>
  :root {
    --catalog-grid__gap: var(--spacer--medium);
    --catalog-gird__margin: 0;
    --catalog-grid__padding: var(--spacer--medium) 0 var(--spacer--large) 0;
    --catalog-grid__border: 1px solid var(--gray-light);
  }

  .catalog-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--catalog-grid__gap);
    margin: var(--catalog-gird__margin);
    padding: var(--catalog-grid__padding);
    border-bottom: var(--catalog-grid__border);
    list-style: none;
  }
  @media all and (min-width: 768px) {
    .catalog-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
