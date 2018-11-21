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
  components: {
    Container,
    CatalogFilter,
    CatalogGridItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    filters: {
      type: Array,
      required: true
    },
    storeConfig: {
      type: Object,
      default: null
    }
  },
  methods: {
    productImageUrl(image) {
      return this.storeConfig.base_media_url + 'catalog/product' + image
    }
  }
}
</script>

<style lang="scss">
$catalog__margin: $spacer--medium 0 0 0 !default;
$catalog__sidebar-width--mq-medium: 306px !default;
$catalog__sidebar-margin--mq-medium: 0 $spacer--medium 0 0 !default;
$catalog__sidebar-border: 1px solid $gray-lighter !default;
$catalog__products-padding: 0 0 $spacer--large 0 !default;
$catalog-grid__gap: $spacer--medium !default;
$catalog-gird__margin: 0 !default;
$catalog-grid__padding: $spacer--medium 0 $spacer--large 0 !default;
$catalog-grid__border: 1px solid $gray-light !default;

.catalog {
  display: flex;
  flex-direction: column;
  margin: $catalog__margin;
  @include mq($screen-l) {
    flex-direction: row;
  }

  &__sidebar {
    border-bottom: $catalog__sidebar-border;
    @include mq($screen-l) {
      flex: 1 $catalog__sidebar-width--mq-medium;
      justify-content: space-between;
      margin: $catalog__sidebar-margin--mq-medium;
      border-bottom: none;
    }
  }

  &__products {
    padding: $catalog__products-padding;
    @include mq($screen-l) {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc(100% - #{$catalog__sidebar-width--mq-medium});
    }

    .catalog-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: $catalog-grid__gap;
      margin: $catalog-gird__margin;
      padding: $catalog-grid__padding;
      border-bottom: $catalog-grid__border;
      list-style: none;

      @include mq($screen-m) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
}
</style>
