import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from '../../03-modules/header/Header.vue'
import AlpacaCatalog from './Catalog.vue'

import data from './mocks/catalog.json'
import menu from '../../03-modules/header/mocks/menu.json'
import toolbar from '../../03-modules/toolbar/mocks/toolbar.json'
import breadcrumbs from "../../02-elements/breadcrumbs/mocks/breadcrumbs"
import swatchItems from "../../03-modules/filter/mocks/swatchItems"
import colorItems from "../../03-modules/filter/mocks/colorItems"
import activeFilterItems from "../../03-modules/active-filters/mocks/active-filters"
import checkboxItems from "../../03-modules/filter/mocks/checkboxItems"

storiesOf('Views/Catalog', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
  components: { App, AlpacaHeader, AlpacaCatalog },
  data() {
    return {
      ...data,
      menu,
      swatchItems,
      colorItems,
      activeFilterItems,
      checkboxItems,
      toolbar,
      breadcrumbs
    }
  },
  template: `
    <app>
      <alpaca-header
        :menu="menu"
        src="./../images/logo/alpaca.svg"
        link="#"
      />
      <alpaca-catalog
        :products="products.items"
        :swatchItems="swatchItems"
        :colorItems="colorItems"
        :activeFilterItems="activeFilterItems"
        :checkboxItems="checkboxItems"
        :toolbar="toolbar"
        :breadcrumbs="breadcrumbs"
      />
    </app>
  `
}))
