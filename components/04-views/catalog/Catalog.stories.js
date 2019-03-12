import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/catalog.json'
import menu from '@/components/03-modules/header/mocks/menu.json'
import toolbar from '@/components/03-modules/toolbar/mocks/toolbar.json'
import breadcrumbs from "@/components/02-elements/breadcrumbs/mocks/breadcrumbs"
import swatchItems from "@/components/03-modules/filter/mocks/swatchItems"
import colorItems from "@/components/03-modules/filter/mocks/colorItems"
import activeFilterItems from "@/components/03-modules/active-filters/mocks/active-filters"
import checkboxItems from "@/components/03-modules/filter/mocks/checkboxItems"

import App from '@/components/01-globals/app/App.vue'
import AlpacaHeader from '@/components/03-modules/header/Header.vue'
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
