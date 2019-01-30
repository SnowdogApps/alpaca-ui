<template>
  <div class="tab">
    <button
      :id="getTabsWithId"
      :class="[
        'tab__title',
        { 'tab__title--active': activeTab === tab.tabId }
      ]"
      :data-tab="tab.tabId"
      :aria-controls="tab.tabId"
      :aria-selected="activeTab === tab.tabId"
      :aria-expanded="activeTab === tab.tabId"
      @click="setActiveTab(tab.tabId)"
    >
      {{ tab.title }}
      <alpaca-icon
        v-if="icon"
        :icon="icon"
        class="tab__icon"
      />
    </button>
    <div
      v-if="activeTab === tab.tabId"
      :id="tab.tabId"
      :data-content="tab.tabId"
      :aria-labelledby="tab.titleId"
      :aria-hidden="activeTab === tab.tabId"
      :class="[
        'tab__content',
        { 'tab__content--active': activeTab === tab.tabId }
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
  import uniqueId from 'lodash.uniqueid';
  import AlpacaIcon from '../../01-globals/icon/Icon.vue'

  export default {
    components: { AlpacaIcon },
    props: {
      tab: {
        type: Object,
        required: true
      },
      tabs: {
        type: Array,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
      icon: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        activeTab: false
      }
    },
    computed: {
      getTabsWithId() {
        return uniqueId("tab");
      }
    },
    methods: {
      setActiveTab(tab) {
        if (this.tabs[this.index].tabId === tab){
          this.activeTab = tab;
        }
      }
    }
  }
</script>

<style lang="scss">
  $tab__border-width                    : 1px !default;
  $tab__border-width--large             : 8px !default;

  // title
  $tab__title-padding                   : $spacer--medium !default;
  $tab__title-border                    : $tab__border-width solid $gray-light !default;
  $tab__title-border--large             : $tab__border-width--large solid $gray-lightest !default;
  $tab__title-border--large-active      : $tab__border-width--large solid $color-primary !default;
  $tab__title-color                     : $gray !default;
  $tab__title-color--active             : $gray-darker !default;
  $tab__title-font-weight--large        : $font-weight-normal !default;
  $tab__title-font-weight--large-active : $font-weight-bold !default;
  $tab__title-font-weight               : $font-weight-bold !default;
  $tab__title-background                : $bg-color-base !default;
  $tab__title-background--active        : $gray-lightest !default;
  $tab__title-background--large-active  : $gray-lightest !default;

  // content
  $tab__content-padding                 : $spacer--medium !default;
  $tab__content-padding--large          : $spacer--large $spacer--extra-large !default;

  // icon
  $tab__icon-color                      : $gray !default;
  $tab__icon-color--active              : $gray-darker !default;
  $tab__icon-padding                    : 16px !default;
  $tab__icon-size                       : 48px !default;

  .tab {
    @include mq($screen-l) {
      display: flex;
      flex-flow: row wrap;
    }

    &__title {
      position: relative;
      display: block;
      width: 100%;
      padding: $tab__title-padding;
      border: $tab__title-border;
      border-width: $tab__border-width 0 0 0;
      background: $tab__title-background;
      text-align: center;
      font-weight: $tab__title-font-weight;
      color: $tab__title-color;
      cursor: pointer;

      &:nth-last-child(2) {
        border-bottom: $tab__title-border;

        @include mq($screen-l) {
          border-bottom: $tab__title-border--large;
          width: auto;
        }
      }

      @include mq($screen-l) {
        flex: 1;
        order: -1;
        border-top: none;
        border-bottom : $tab__title-border--large;
      }

      .tab__icon {
        fill: $tab__icon-color;
        pointer-events: none;
      }

      &--active {
        border-top: none;
        border-bottom: none;
        background: $tab__title-background--active;
        color: $tab__title-color--active;

        &:nth-last-child(2) {
          border: none;

          @include mq($screen-l) {
            border-bottom: $tab__title-border--large-active;
          }
        }

        @include mq($screen-l) {
          border-bottom: $tab__title-border--large-active;
          background-color: $tab__title-background--large-active;
          font-weight: $tab__title-font-weight--large-active;
          z-index: 2;
        }

        .tab__icon {
          transform: rotateX(180deg);
          fill: $tab__icon-color--active;
        }
      }

      .counter {
        &:before {
          content: "(";
        }

        &:after {
          content: ")";
        }
      }
    }

    &__icon {
      position: absolute;
      right: 15px;
      top: 0;
      bottom: 0;
      margin: auto;
      width: $tab__icon-size;
      height: $tab__icon-size;
      padding: $tab__icon-padding;

      @include mq($screen-l) {
        display: none;
      }
    }

    &__content {
      position: relative;
      display: none;
      width: 100%;
      padding: $tab__content-padding;
      z-index: -1;
      opacity: 0;
      overflow: hidden;

      @include mq($screen-l) {
        padding: $tab__content-padding--large;
        flex-basis: 100%;
        z-index: 1;
      }

      &--active {
        display: block;
        opacity: 1;
        z-index: 1;

        &:nth-last-child(1) {
          border-bottom: $tab__title-border;

          @include mq($screen-l) {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
