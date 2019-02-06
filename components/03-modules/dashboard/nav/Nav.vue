<template>
  <div class="dashboard-nav">
    <div
      :class="['dashboard-nav__mobile', isActive && 'dashboard-nav__mobile--active']"
      @click="isActive = !isActive"
    >
      {{ actualPage }}
    </div>

    <div :class="['dashboard-nav__content', isActive && 'dashboard-nav__content--visible']">
      <alpaca-heading
        :level="5"
        class="dashboard-nav__title"
      >
        {{ title }}
      </alpaca-heading>
      <alpaca-list class="dashboard-nav__list">
        <alpaca-list-item
          v-for="element in list"
          :key="element.id"
          :element="element"
          class="dashboard-nav__item"
        >
          <alpaca-link
            :href="element.href"
            inverted
            class="dashboard-nav__link"
          >
            {{ element.text }}
          </alpaca-link>
        </alpaca-list-item>
      </alpaca-list>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../../01-globals/heading/Heading'
  import AlpacaLink from '../../../01-globals/link/Link'
  import AlpacaList from '../../../02-elements/list/List'
  import AlpacaListItem from '../../../02-elements/list/ListItem'

  export default {
    components: {
      AlpacaHeading,
      AlpacaLink,
      AlpacaList,
      AlpacaListItem
    },
    props: {
      actualPage: {
        type: String,
        default: null
      },
      title: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isActive: false
      }
    }
  }
</script>

<style lang="scss">
  $dashboard-nav-padding: 15px !default;
  $dashboard-nav-margin : 15px !default;

  .dashboard-nav {
    margin-bottom: $dashboard-nav-margin;

    &__mobile {
      display: block;
      position: relative;
      border-width: 1px 0;
      border-color: $gray-dark;
      border-style: solid;
      padding: $dashboard-nav-padding 0;
      cursor: pointer;

      @include mq($screen-m) {
        display: none;
      }

      &:after {
        content: '\25bc';
        position: absolute;
        width: 15px;
        height: 15px;
        right: 15px;
        top: 0;
        bottom: 0;
        margin: auto;
      }

      &--active {
        &:after {
          content: '\25b2';
        }
      }
    }

    &__content {
      display: none;
      background-color: $gray-lighter;
      padding: $dashboard-nav-padding;
      margin-bottom: $dashboard-nav-margin;

      &--visible {
        display: block;
      }

      @include mq($screen-m) {
        display: block;
      }
    }

    &__list {
      margin: 0;
    }

    &__item {
      padding: 0;
      transition: $transition-base;

      &:hover {
        background-color: $white;
      }
    }

    &__title {
      margin-bottom: $dashboard-nav-margin;
      padding-bottom: 10px;
      border-bottom: 1px solid $gray;
    }

    &__item > a,
    &__link {
      display: block;
      padding: 15px;
    }

    // This class is changing by Magento
    .current {
      position: relative;
      padding: $dashboard-nav-padding $dashboard-nav-padding $dashboard-nav-padding ($dashboard-nav-padding * 2);
      margin-left: -$dashboard-nav-margin;
      border-left: 2px solid $red;
      color: $red;

      &:hover {
        background-color: initial;
      }

      & > a {
        padding: 0;
      }
    }
  }
</style>
