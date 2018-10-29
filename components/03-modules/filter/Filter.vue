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
          :invert="true"
          href="#"
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
  components: {
    Divider,
    Heading,
    AlpacaLink
  },
  props: {
    name: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
:root {
  --filter__spacer: var(--spacer--medium);
  --filter__name-margin: var(--spacer--large);
  --filter__label-padding: var(--spacer--large);
  --filter__icon-border: 2px solid var(--gray);
  --filter__icon-border-radius: 2px;
}

.filter__content {
  list-style: none;
  padding: 0;
  margin: var(--spacer) 0 0 0;
}

.filter__item {
  display: block;
  color: var(--black);
  padding: var(--spacer) 0;
}

.filter__label {
  position: relative;
  display: block;
  padding-left: var(--filter__label-padding);
  cursor: pointer;
}

.filter__label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--filter__spacer);
  height: var(--filter__spacer);
  border: var(--filter__icon-border);
  border-radius: var(--filter__icon-border-radius);
}
</style>
