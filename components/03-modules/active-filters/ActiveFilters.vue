<template>
  <div>
    <ul class="active-filters list">
      <li
        v-for="item in items"
        :key="item.value"
        class="active-filters__item list__item"
      >
        <alpaca-link
          :href="item.href"
          custom-class="active-filters__remove"
          :aria-label="item.ariaLabel"
          :title="item.icon.iconTitle"
        >
          <alpaca-icon
            v-if="item.icon"
            custom-class="active-filters__remove-icon"
            :icon="item.icon.iconId"
          />
        </alpaca-link>

        <span class="active-filters__label">
          {{ item.label }} :&nbsp;
        </span>
        <span class="active-filters__value">
          {{ item.value }}
        </span>
      </li>
    </ul>

    <component
      :is="tag"
      class="active-filters__clear-all"
      :href="tag === 'a' && clearAction.href"
      :title="clearAction.title"
      @click="onClick"
    >
      {{ clearAction.text }}
    </component>
  </div>
</template>

<script>
  import AlpacaLink from '../../01-globals/link/Link';
  import AlpacaIcon from '../../01-globals/icon/Icon';

  export default {
    components: {
      AlpacaLink,
      AlpacaIcon
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      clearAction: {
        type: Object,
        required: true
      },
      tag: {
        type: String,
        default: 'button'
      }
    },
    methods: {
      onClick() {
        this.$emit('clear');
      }
    }
  }
</script>

<style lang="scss">
  $active-filters__remove-size         : 48px !default;
  $active-filters__remove-padding      : 0 !default;
  $active-filters__remove-border       : none !default;
  $active-filters__remove-background   : none !default;
  $active-filters__remove-icon-margin  : 0 auto !default;
  $active-filters__remove-icon-padding : 0 !default;
  $active-filters__icon-fill           : $red !default;
  $active-filters__icon-size           : $font-size-base !default;
  $active-filters__label-font-weight   : $font-weight-bold !default;
  $active-filters__clear-border-size   : 2px !default;
  $active-filters__clear-border        : $active-filters__clear-border-size solid $red !default;
  $active-filters__clear-border-radius : 24px !default;
  $active-filters__clear-margin        : 0 0 0 $spacer--extra-large !default;
  $active-filters__clear-height        : 48px !default;
  $active-filters__clear-line-height   : ($active-filters__clear-height - (2 * $active-filters__clear-border-size));
  $active-filters__clear-font-size     : $font-size-base !default;
  $active-filters__clear-color         : $red !default;
  $active-filters__clear-font-weight   : $font-weight-bold !default;
  $active-filters__clear-color\@medium : $color-secondary !default;

  .active-filters {
    &__item {
      display: flex;
      align-items: center;
    }

    &__remove {
      display: flex;
      align-items: center;
      min-width: $active-filters__remove-size;
      min-height: $active-filters__remove-size;
      padding: $active-filters__remove-padding;
      border: $active-filters__remove-border;
      outline: none;
      background: $active-filters__remove-background;
      cursor: pointer;
      word-break: break-all;

      &-icon {
        display: block;
        padding: $active-filters__remove-icon-padding;
        margin: $active-filters__remove-icon-margin;
        width: $active-filters__icon-size;
        height: $active-filters__icon-size;
        fill: $active-filters__icon-fill;
      }
    }

    &__label {
      max-width: calc(100% - #{$active-filters__remove-size});
      word-break: break-all;
      font-weight: $active-filters__label-font-weight;
    }

    &__value {
      max-width: calc(100% - #{$active-filters__remove-size});
      word-break: break-all;
    }

    &__clear-all {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      min-width: 100%;
      min-height: $active-filters__clear-height;
      color: $active-filters__clear-color;
      border: $active-filters__clear-border;
      border-radius: $active-filters__clear-border-radius;
      font-size: $active-filters__clear-font-size;
      font-weight: $active-filters__clear-font-weight;
      line-height: $active-filters__clear-line-height;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: none;
        color: $active-filters__clear-color;
      }

      @include mq($screen-m) {
        display: inline-flex;
        margin: $active-filters__clear-margin;
        justify-content: flex-start;
        min-width: 0;
        border: none;
        text-decoration: none;

        &:hover,
        &:focus {
          color: $active-filters__clear-color\@medium;
          text-decoration: underline;
        }
      }
    }
  }
</style>
