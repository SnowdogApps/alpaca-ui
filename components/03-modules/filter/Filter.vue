<template>
  <div class="filter">
    <heading level="2">
      {{ name }}
    </heading>

    <divider />

    <ul class="filter__content">
      <li
        v-for="item in items"
        :key="item.label"
      >
        <alpaca-link
          href="#"
          :invert="true"
          custom-class="filter__item"
        >
          <span
            class="filter__label"
            v-html="`${item.label} (${item.items_count})`"
          />
        </alpaca-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Heading from '../../01-globals/typography/Heading.vue'
  import Divider from '../../02-elements/divider/Divider.vue'
  import AlpacaLink from '../../01-globals/typography/Link.vue'

  export default {
    props: ['name', 'items'],
    components: {
      Divider,
      Heading,
      AlpacaLink
    }
  }
</script>

<style lang="scss">
  $filter__spacer: $spacer--medium !default;
  $filter__name-margin: $spacer--large !default;
  $filter__label-padding: $spacer--large !default;
  $filter__icon-border: 2px solid $gray !default;
  $filter__icon-border-radius: 2px !default;

  .filter {
    &__content {
      list-style: none;
      padding: 0;
      margin: $spacer 0 0 0;
    }

    &__item {
      display: block;
      color: var(--black);
      padding: $spacer 0;
    }

    &__label {
      position: relative;
      display: block;
      padding-left: $filter__label-padding;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: $filter__spacer;
        height: $filter__spacer;
        border: $filter__icon-border;
        border-radius: $filter__icon-border-radius;
      }
    }
  }
</style>
