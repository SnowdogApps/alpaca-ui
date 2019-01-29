<template>
  <div>
    <header class="header">
      <container>
        <div class="header__wrapper">
          <div class="header__buttons">
            <header-button icon="heart">
              Wishlist
            </header-button>

            <header-button icon="phone">
              Contact
            </header-button>

            <header-button icon="account">
              Account
            </header-button>

            <div class="header__minicart">
              <button
                type="button"
                class="header-button popup-trigger"
                data-popuptrigger="popup-minicart"
              >
                <alpaca-icon icon="shopping-cart" />

                <span class="header-button__text">
                  Cart
                </span>

                <span class="header-button__counter">
                  <span class="header-button__counter-dot" />
                </span>
              </button>
            </div>

            <!-- <minicart /> -->
          </div>

          <logo
            :src="src"
            :to="link"
          />

          <div class="header__search-wrapper">
            <header-search />
          </div>
        </div>
      </container>
    </header>

    <mega-menu :menu="menu" />
  </div>
</template>

<script>
import Container from '../../01-globals/container/Container.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'
import Logo from '../../02-elements/logo/Logo.vue'
import MegaMenu from '../mega-menu/MegaMenu.vue'

import HeaderButton from '../header-button/HeaderButton.vue'
import HeaderSearch from '../header-search/HeaderSearch.vue'

export default {
  components: {
    Container,
    AlpacaIcon,
    Logo,
    MegaMenu,
    HeaderButton,
    HeaderSearch
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
$header__border-color: $gray-light !default;
$header__wrapper-padding--mq-medium: 12px 0 !default;
$header__logo-padding: 12px 0 12px $spacer !default;
$header__logo-padding--mq-medium: 0 0 0 $spacer !default;
$header__menu-trigger-size: 48px !default;
$header__buttons-width: calc(100% - 48px) !default;
$header__buttons-width--mq-medium: calc(4 * 48px + 3 * #{$spacer}) !default;
$header__buttons-width--mq-extra-large: calc(
  4 * 48px + 3 * #{$spacer--medium}
) !default;
$header__search-wrapper-padding: 0 0 0 24px !default;
$header__search-wrapper-padding--mq-medium: 0 24px !default;

.header {
  position: relative;
  border-bottom: 1px solid $header__border-color;
  @include mq($screen-l) {
    border-bottom: none;
  }

  &__wrapper {
    position: relative;
    justify-content: space-between;
    display: flex;
    flex-flow: row wrap;
    padding: $reset;
    @include mq($screen-m) {
      padding: $header__wrapper-padding--mq-medium;
    }

    @include mq($screen-l) {
      border-bottom: 1px solid $header__border-color;
    }
  }

  &__logo {
    order: 3;
    padding: $header__logo-padding;
    border-top: 1px solid $header__border-color;
    @include mq($screen-m) {
      padding: $header__logo-padding--mq-medium;
      border-top: none;
    }
  }

  &__search-wrapper {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 50%;
    order: 5;
    justify-content: center;
    padding: $header__search-wrapper-padding;
    border-top: 1px solid $header__border-color;
    @include mq($screen-m) {
      order: 3;
      flex-direction: column;
      justify-content: center;
      padding: $header__search-wrapper-padding--mq-medium;
      border-top: none;
    }
  }

  &__minicart {
    position: relative;
  }

  &__minicart-content {
    top: calc(100% - 1px);
    &.popup {
      position: absolute;
      right: 0;
    }
  }

  &__buttons {
    display: flex;
    order: 2;
    flex: 1 $header__buttons-width;
    max-width: $header__buttons-width;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    @include mq($screen-m) {
      order: 4;
      flex: 1 $header__buttons-width--mq-medium;
      max-width: $header__buttons-width--mq-medium;
    }

    @include mq($screen-xl) {
      flex: 1 $header__buttons-width--mq-extra-large;
      max-width: $header__buttons-width--mq-extra-large;
    }
  }
}
</style>
