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
                  <span class="header-button__counter-dot"></span>
                </span>
              </button>
            </div>

            <!-- <minicart /> -->
          </div>

          <logo />

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
  import MegaMenu from '../../03-modules/mega-menu/MegaMenu.vue'

  import HeaderButton from './HeaderButton.vue'
  import HeaderSearch from './HeaderSearch.vue'

  export default {
    components: {
      Container,
      AlpacaIcon,
      Logo,
      MegaMenu,
      HeaderButton,
      HeaderSearch
    },
    data() {
      return {
        menu: [
          {
            href: '#',
            label: 'Furniture'
          }, {
            href: '#',
            label: 'Accessories'
          }, {
            href: '#',
            label: 'World of Goo'
          }
        ]
      }
    },
  }
</script>

<style>
  :root {
    --header__border-color: var(--gray-light);
    --header__wrapper-padding: 0;
    --header__wrapper-padding\@medium: 12px 0;
    --header__logo-padding: 12px 0 12px var(--spacer);
    --header__logo-padding\@medium: 0 0 0 var(--spacer);
    --header__menu-trigger-size: 48px;
    --header__buttons-width: calc(100% - 48px);
    --header__buttons-width\@medium: calc(4 * 48px + 3 * var(--spacer));
    --header__buttons-width\@extra-large: calc(4 * 48px + 3 * var(--spacer--medium));
    --header__search-wrapper-padding: 0 0 0 24px;
    --header__search-wrapper-padding\@medium: 0 24px;
  }

  .header {
    position: relative;
    border-bottom: 1px solid var(--header__border-color);
  }

  @media all and (min-width: 992px) {
    .header {
      border-bottom: none;
    }
  }

  .header__wrapper {
    position: relative;
    justify-content: space-between;
    display: flex;
    flex-flow: row wrap;
    padding: var(--header__wrapper-padding);
  }

  @media all and (min-width: 768px) {
    .header__wrapper {
      padding: var(--header__wrapper-padding\@medium);
    }
  }

  @media all and (min-width: 992px) {
    .header__wrapper {
      border-bottom: 1px solid var(--header__border-color);
    }
  }

  .header__logo {
    order: 3;
    padding: var(--header__logo-padding);
    border-top: 1px solid var(--header__border-color);
  }

  @media all and (min-width: 768px) {
    .header__logo {
      padding: var(--header__logo-padding\@medium);
      border-top: none;
    }
  }

  .header__search-wrapper {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 50%;
    order: 5;
    justify-content: center;
    padding: var(--header__search-wrapper-padding);
    border-top: 1px solid var(--header__border-color);
  }

  @media all and (min-width: 768px) {
    .header__search-wrapper {
      order: 3;
      flex-direction: column;
      justify-content: center;
      padding: var(--header__search-wrapper-padding\@medium);
      border-top: none;
    }
  }

  .header__minicart {
    position: relative;
  }

  .header__minicart-content {
    top: calc(100% - 1px);
  }

  .header__minicart-content.popup {
    position: absolute;
    right: 0;
  }

  .header__buttons {
    display: flex;
    order: 2;
    flex: 1 var(--header__buttons-width);
    max-width: var(--header__buttons-width);
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
  }

  @media all and (min-width: 768px) {
    .header__buttons {
      order: 4;
      flex: 1 var(--header__buttons-width\@medium);
      max-width: var(--header__buttons-width\@medium);
    }
  }

  @media all and (min-width: 1200px) {
    .header__buttons {
      flex: 1 var(--header__buttons-width\@extra-large);
      max-width: var(--header__buttons-width\@extra-large);
    }
  }
</style>
