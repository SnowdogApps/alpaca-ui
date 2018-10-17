<template>
  <container>
    <div class="catalog">
      <div class="catalog__sidebar">
        <catalog-filter
          v-for="filter in filters"
          :key="filter.request_var"
          :name="filter.name"
          :items="filter.filter_items"
        />
      </div>
      <div class="catalog__products">
        <ul class="catalog-grid">
          <catalog-grid-item
            v-for="product in products"
            :key="product.sku"
            :name="product.name"
            :image="productImageUrl(product.image)"
            :price="product.price.regularPrice.amount.value"
            :special-price="product.special_price"
          />
        </ul>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '../../01-globals/container/Container.vue'
import CatalogFilter from '../../03-modules/filter/Filter.vue'
import CatalogGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'

export default {
  props: ['products', 'storeConfig', 'filters'],
  components: {
    Container,
    CatalogFilter,
    CatalogGridItem
  },
  methods: {
    productImageUrl(image) {
      return this.storeConfig.base_media_url + 'catalog/product' + image
    }
  }
}
</script>

<style lang="scss">
:root {
  --catalog__margin : var(--spacer--medium) 0 0 0;
  --catalog__border: 1px solid var(--gray-light);
  --catalog__sidebar-width--mq-medium: calc(290px + var(--spacer--medium));
  --catalog__sidebar-margin--mq-medium: 0 var(--spacer--medium) 0 0;
  --catalog__sidebar-border: 1px solid var(--gray-lighter);

  --catalog-grid__gap: var(--spacer--medium);
  --catalog-gird__margin: 0;
  --catalog-grid__padding: var(--spacer--medium) 0 var(--spacer--large) 0;
  --catalog-grid__border: 1px solid var(--gray-light);
}

.catalog {
  margin: var(--spacer--medium) 0 0 0;
  display: flex;
  flex-direction: column;
}

@media all and (min-width: 992px) {
  .catalog {
    flex-direction: row;
  }
}

.catalog__sidebar {
  border-bottom: var(--catalog__sidebar-border);
}

@media all and (min-width: 992px) {
  .catalog__sidebar {
    flex: 1 var(--catalog__sidebar-width--mq-medium);
    justify-content: space-between;
    margin: var(--catalog__sidebar-margin--mq-medium);
    border-bottom: none;
  }
}

.catalog__products {
  padding: var(--catalog__products-padding);
}

@media all and (min-width: 992px) {
  .catalog__products {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: calc(100% - var(--catalog__sidebar-width--mq-medium));
  }
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
