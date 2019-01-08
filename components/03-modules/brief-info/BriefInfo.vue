<template>
  <div class="brief-info">
    <alpaca-heading
      v-if="level"
      :level="level"
      class="brief-info__heading"
    >
      {{ heading }}
    </alpaca-heading>

    <ul class="list brief-info__items-container">
      <li
        v-for="{ key, item } in getItemsWithKey"
        :key="key"
        class="brief-info__item"
      >
        <span
          :class="['brief-info__icon-wrapper', iconWrapperClass]"
          :aria-label="item.iconLabel"
        >
          <icon
            :icon="item.icon.iconId"
            :custom-class="['brief-info__icon', iconClass]"
          />
        </span>
        <div class="brief-info__content">
          <component
            :is="titleTag"
            class="brief-info__title"
          >
            {{ item.title.text }}
          </component>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import uniqueId from 'lodash.uniqueid';
  import AlpacaHeading from '../../01-globals/heading/Heading.vue'
  import Icon from '../../01-globals/icon/Icon.vue'

  export default {
    components: {
      AlpacaHeading,
      Icon
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      level: {
        type: Number,
        default: null
      },
      heading: {
        type: String,
        default: null
      },
      titleTag: {
        type: String,
        default: 'h3'
      },
      iconClass: {
        type: String,
        default: null
      },
      iconWrapperClass: {
        type: String,
        default: null
      }
    },
    computed: {
      getItemsWithKey() {
        return this.items.map(item => ({ key: uniqueId("item"), item }));
      }
    },
  }
</script>

<style lang="scss">
  $brief-info__padding\@medium                 : $spacer--large 0 $spacer--large !default;
  $brief-info__border                          : 1px $gray-light solid !default;
  $brief-info__content-text-align              : center !default;
  $brief-info__content-text-align\@medium      : left !default;
  $brief-info__heading-margin                  : 0 0 $spacer--medium !default;
  $brief-info__icon-bg-color                   : $gray-lightest !default;
  $brief-info__icon-border-radius              : 32px !default;
  $brief-info__icon-size                       : 48px !default;
  $brief-info__icon-padding                    : 0 $spacer--medium !default;
  $brief-info__icon-padding\@medium            : 0 !default;
  $brief-info__icon-margin-bottom              : $spacer !default;
  $brief-info__icon-margin-bottom\@large       : 0 !default;
  $brief-info__link-font-size                  : $font-size-small !default;
  $brief-info__link-font-weight                : $font-weight-bold !default;
  $brief-info__link-text-decoration            : none !default;
  $brief-info__title-font-size                 : $font-size-small !default;
  $brief-info__title-font-size\@large          : $font-size-base !default;
  $brief-info__title-font-weight               : $font-weight-normal !default;
  $brief-info__title-line-height               : 1em !default;
  $brief-info__title-text-transform            : uppercase !default;
  $brief-info__title-margin-bottom             : 0 !default;

  .brief-info {
    @include mq($screen-m) {
      border-top: $brief-info__border;
      padding: $brief-info__padding\@medium;
      border-bottom: $brief-info__border;
    }

    &__heading {
      width: 100%;
      margin: $brief-info__heading-margin;
      text-align: center;

      @include mq($screen-m) {
        text-align: left;
      }
    }

    &__items-container {
      display: flex;
      justify-content: space-between;
    }

    &__item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      padding: $brief-info__icon-padding;
      flex: 1 0 0;
      @include mq($screen-m) {
        align-items: flex-start;
      }
      @include mq($screen-l) {
        align-items: center;
        flex-flow: row nowrap;
      }
      &:first-child,
      &:last-child {
        @include mq($screen-m) {
          padding: $brief-info__icon-padding\@medium;
        }
      }
    }

    &__icon-wrapper {
      margin-bottom: $brief-info__icon-margin-bottom;
      background-color: $brief-info__icon-bg-color;
      border-radius: $brief-info__icon-border-radius;
      width: $brief-info__icon-size;
      height: $brief-info__icon-size;
      flex-shrink: 0;
      @include mq($screen-l) {
        margin-bottom: $brief-info__icon-margin-bottom\@large;
      }
    }

    &__icon {
      width: 100%;
      height: 100%;
      padding: 14px;
    }

    &__title {
      margin-bottom: $brief-info__title-margin-bottom;
      font-size: $brief-info__title-font-size;
      text-transform: $brief-info__title-text-transform;
      line-height: $brief-info__title-line-height;
      font-weight: $brief-info__title-font-weight;
      @include mq($screen-l) {
        font-size: $brief-info__title-font-size\@large;
        margin: 0 0 0 10px;
      }
    }

    &__link {
      font-size: $brief-info__link-font-size;
      font-weight: $brief-info__link-font-weight;
      text-decoration: $brief-info__link-text-decoration;
    }
    &__content {
      text-align: $brief-info__content-text-align;
      @include mq($screen-m) {
        text-align: $brief-info__content-text-align\@medium;
      }
    }
  }
</style>
