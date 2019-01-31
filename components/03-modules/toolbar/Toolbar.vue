<template>
  <div class="toolbar">
    <div
      v-if="showMode"
      class="toolbar__mode"
    >
      <a
        :href="gridHref"
        class="toolbar__mode-button"
        aria-label="Change to grid view"
      >
        <alpaca-icon
          icon="grid"
          title="Grid"
          custom-class="toolbar__mode-icon toolbar__mode-icon--active"
        />
      </a>
      <a
        :href="listHref"
        class="toolbar__mode-button"
        aria-label="Change to list view"
      >
        <alpaca-icon
          icon="list"
          title="List"
          custom-class="toolbar__mode-icon"
        />
      </a>
    </div>

    <div
      v-if="showSorter"
      class="toolbar__sorter"
    >
      <alpaca-select
        :id="sortBy.id"
        :options="sortBy.options"
        :label="sortBy.text"
        :name="sortBy.name"
        label-class="label toolbar__sorter-label"
        select-class="toolbar__sorter-select select__field-item"
        class="toolbar__sorter-wrapper"
        :selected="sortBy.options[0].text"
      />
    </div>


    <div
      v-if="showAmount"
      class="toolbar__amount"
    >
      <span class="toolbar__amount-content">
        {{ amount.prefix }}
        {{ amount.currentRange }}
        {{ amount.preposition }}
        {{ amount.total }}
      </span>
    </div>

    <div
      v-if="showLimit"
      class="toolbar__limiter"
    >
      <alpaca-select
        :id="limiter.id"
        :options="limiter.options"
        :label="limiter.text"
        :name="limiter.name"
        label-class="toolbar__limiter-label"
        select-class="toolbar__limiter-select select__field-item"
        class="toolbar__limiter-wrapper"
        inline-label
        :selected="limiter.options[0].text"
      />
      <span class="toolbar__limiter-suffix">
        {{ limiter.suffix }}
      </span>
    </div>

    <div
      v-if="showPager"
      class="toolbar__pager"
    >
      <alpaca-pager
        :page="currentPage"
        :lmit="pager.limit"
        :total-size="pager.totalSize"
        @update:page="(page) => {setCurrentPage(page)}"
      />
    </div>
  </div>
</template>

<script>
  import AlpacaIcon from '../../01-globals/icon/Icon'
  import AlpacaSelect from '../../02-elements/form/select/Select'
  import AlpacaPager from '../../03-modules/pager/Pager'

  export default {
    components: {
      AlpacaIcon,
      AlpacaSelect,
      AlpacaPager
    },
    props: {
      showMode: {
        type: Boolean,
        default: false
      },
      showSorter: {
        type: Boolean,
        default: false
      },
      showLimit: {
        type: Boolean,
        default: false
      },
      showAmount: {
        type: Boolean,
        default: false
      },
      showPager: {
        type: Boolean,
        default: false
      },
      sortBy: {
        type: Object,
        default: null
      },
      limiter: {
        type: Object,
        default: null
      },
      pager: {
        type: Object,
        default: null
      },
      amount: {
        type: Object,
        default: null
      },
      gridHref: {
        type: String,
        default: null
      },
      listHref: {
        type: String,
        default: null
      },
    },
    computed: {
      currentPage () {
        return this.pager.page
      }
    },
    methods: {
      setCurrentPage(page) {
        this.pager.page = page
      }
    }
  }
</script>

<style lang="scss">
  $toolbar__border                       : 1px solid $gray-light !default;
  $toolbar__dropdown-icon-area-border    : none !default;
  $toolbar__dropdown-icon-area-size      : 32px !default;
  $toolbar__dropdown-icon-color          : $gray !default;
  $toolbar__dropdown-icon-size           : 12px !default;
  $toolbar__dropdown-icon-area-right     : 0 !default;
  $toolbar__dropdown-icon-area-top       : 0 !default;
  $toolbar__offset                       : $spacer !default;
  $toolbar__secondary-text-color         : $gray !default;
  $toolbar__icon-color                   : $gray-light !default;
  $toolbar__icon-color--active           : $black !default;
  $toolbar__icon-color--hover            : $color-primary !default;
  $toolbar__mode-icon-transition         : $transition-base !default;
  $toolbar__mode-icon-area-size          : 48px !default;
  $toolbar__mode-icon-margin             : 0 auto !default;
  $toolbar__mode-icon-border             : none !default;
  $toolbar__mode-icon-background         : none !default;
  $toolbar__mode-icon-cursor             : pointer !default;
  $toolbar__mode-icon-size               : 18px !default;
  $toolbar__mode-margin-right            : $spacer !default;
  $toolbar__select-border                : 1px solid $gray-light !default;
  $toolbar__select-border-radius         : $form-elements-radius !default;
  $toolbar__select-padding-right         : $spacer--medium !default;
  $toolbar__select-field-item-color      : $gray-darker !default;
  $toolbar__select-field-list-height     : 32px !default;
  $toolbar__select-field-list-z-index    : 4 !default;
  $toolbar__select-field-item-height     : 30px !default;
  $toolbar__sorter-border-top            : 1px solid $gray-light !default;
  $toolbar__sorter-padding               : 8px 0 !default;
  $toolbar__sorter-width                 : 200px !default;
  $toolbar__sorter-icon-wrapper-cursor   : pointer !default;
  $toolbar__sorter-icon-size             : 18px !default;
  $toolbar__sorter-icon-margin           : $spacer !default;
  $toolbar__sorter-icon-fill             : $gray !default;
  $toolbar__limiter-width                : 72px !default;
  $toolbar__limiter-margin\@medium       : $spacer 0 !default;
  $toolbar__select-height                : 32px !default;
  $toolbar__select-font-family           : $font-family-base !default;
  $toolbar__select-single-border-radius  : $spacer--medium $spacer--medium 0 0 !default;
  $toolbar__select-dropdown-border-radius: 0 0 $spacer--medium $spacer--medium !default;

  .toolbar {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: $toolbar__border;

    @include mq($screen-m) {
      align-items: center;
      justify-content: flex-start;
    }

    &__mode,
    &__limiter,
    &__amount,
    &__sorter {
      flex: 0 0 auto;
      align-items: center;
    }

    &__pager {
      width: 100%;
    }

    &__amount {
      display: none;
      @include mq($screen-m) {
        flex: 1;
        justify-content: center;
        display: flex;
      }

      &--visible {
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: flex-start;
        padding: $spacer 0;

        @include mq($screen-m) {
          flex: 1 0 0;
        }
      }
    }

    &__amount-content {
      color: $toolbar__secondary-text-color;
    }

    &__sorter {
      border-top: $toolbar__sorter-border-top;
      padding: $toolbar__sorter-padding;
      width: 100%;
      @include mq($screen-m) {
        width: auto;
        border-top: none;
        padding: 0;
      }
    }

    &__mode {
      display: flex;
      flex: 0 0 auto;
      margin-right: $toolbar__mode-margin-right;
    }

    &__mode-icon {
      display: block;
      width: $toolbar__mode-icon-size;
      height: $toolbar__mode-icon-size;
      padding: $reset;
      margin: $toolbar__mode-icon-margin;
      fill: $toolbar__icon-color;
      transition: $toolbar__mode-icon-transition;
      &--active {
        fill: $toolbar__icon-color--active;
      }
    }

    &__mode-button {
      height: $toolbar__mode-icon-area-size;
      width: $toolbar__mode-icon-area-size;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $toolbar__mode-icon-background;
      border: $toolbar__mode-icon-border;
      cursor: $toolbar__mode-icon-cursor;

      &:hover,
      &:focus {
        .toolbar__mode-icon {
          fill: $toolbar__icon-color--hover;
        }
      }
    }

    &__sorter-wrapper,
    &__limiter-wrapper {
      margin: $reset;
      display: flex;
      align-items: center;
      .choices {
        flex-grow: 1;
        @include mq($screen-m) {
          width: $toolbar__sorter-width;
        }
      }
      .select__field-list {
        z-index: $toolbar__select-field-list-z-index;
        &--single {
          height: $toolbar__select-field-list-height;
          border: $toolbar__select-border;
          border-radius: $toolbar__select-border-radius;
          padding-right: $toolbar__select-padding-right;
        }
      }
    }

    &__limiter-wrapper {
      .choices {
        @include mq($screen-m) {
          display: block;

          width: $toolbar__limiter-width;
        }
      }
    }

    .select__field-item {
      display: flex;
      color: $toolbar__select-field-item-color;
      height: $toolbar__select-field-item-height;
      line-height: $toolbar__select-field-item-height;
    }

    &__sorter-select,
    &__limiter-select {
      height: $toolbar__select-height;
      font-family: $toolbar__select-font-family;
      @include mq($screen_m) {
        width: $toolbar__sorter-width;
      }
    }

    &__limiter-select {
      @include mq($screen_m) {
        width: $toolbar__limiter-width;
      }
    }

    &__sorter-label,
    &__limiter-label {
      color: $toolbar__secondary-text-color;
      margin-bottom: 0;
      margin-right:  $toolbar__offset;
    }

    &__sorter-label {
      display: flex;
      align-items: center;
    }

    &__sorter-icon-wrapper {
      display: flex;
      align-items: center;
      cursor: $toolbar__sorter-icon-wrapper-cursor;
    }

    &__sorter-icon {
      width: $toolbar__sorter-icon-size;
      height: $toolbar__sorter-icon-size;
      margin: $toolbar__sorter-icon-margin;
      fill: $toolbar__sorter-icon-fill;
    }

    &__limiter {
      position: absolute;
      right: 0;
      top: 8px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 20%;
      @include mq($screen-m) {
        position: relative;
        top: auto;
        right: auto;
        width: auto;
        margin: $toolbar__limiter-margin\@medium;
      }

      &--relative {
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: flex-end;
        padding: $spacer 0;
      }
    }

    &__limiter-suffix {
      display: none;
      @include mq($screen-m) {
        color: $toolbar__secondary-text-color;
        display: block;
      }
    }
    .choices {
      &.is-open {
        .select__field-list--single {
          border-radius: $toolbar__select-single-border-radius;
        }
        .choices__list--dropdown {
          border-radius: $toolbar__select-dropdown-border-radius;
        }
      }
      &.is-open:after,
      &:after {
        top: $toolbar__dropdown-icon-area-top;
        right: $toolbar__dropdown-icon-area-right;
        width: $toolbar__dropdown-icon-area-size;
        height: $toolbar__dropdown-icon-area-size;
        margin: $reset;
        border: $toolbar__dropdown-icon-area-border;
        background-image: svg-uri('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M12 2L10.59.59 6 5.17 1.41.59 0 2l6 6z" fill="#{$toolbar__dropdown-icon-color}" /></svg>');
        background-size: $toolbar__dropdown-icon-size;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }

    ~ .toolbar {
      border-bottom: 0;
      .pager {
        display: block;
      }
      .toolbar {
        &__mode,
        &__sorter,
        &__amount,
        &__limiter {
          display: none;
        }
      }
    }
  }
</style>
