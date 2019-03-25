import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/catalog.json'
import menu from '@alpaca-storybook/components/03-modules/header/mocks/menu.json'
import toolbar from '@alpaca-storybook/components/03-modules/toolbar/mocks/toolbar.json'
import breadcrumbs from "@alpaca-storybook/components/02-elements/breadcrumbs/mocks/breadcrumbs.json"
import swatchItems from "@alpaca-storybook/components/03-modules/filter/mocks/swatchItems.json"
import colorItems from "@alpaca-storybook/components/03-modules/filter/mocks/colorItems.json"
import activeFilterItems from "@alpaca-storybook/mocks/active-filters.json"
import checkboxItems from "@alpaca-storybook/mocks/checkboxItems.json"

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaHeader from '@alpaca-storybook/components/03-modules/header/Header.vue'
import AlpacaCatalog from './Catalog.vue'

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
      breadcrumbs,
      val: [0, 1000]
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
        :swatch-items="swatchItems"
        swatch-title="Swatch"
        :color-items="colorItems"
        color-title="Color"
        :active-filter-items="activeFilterItems"
        :checkbox-items="checkboxItems"
        :toolbar="toolbar"
        :breadcrumbs="breadcrumbs"
        :min="0"
        :max="1000"
        :val="val"
      />
    </app>
  `
}))
