import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import AHeader from '../../03-modules/header/Header.vue'
import ACatalog from './Catalog.vue'

import data from './mocks/catalog.json'
import menu from '../../03-modules/header/mocks/menu.json'
import toolbar from '../../03-modules/toolbar/mocks/toolbar.json'
import breadcrumbs from "../../atoms/breadcrumbs/mocks/breadcrumbs"
import swatchItems from "../../03-modules/filter/mocks/swatchItems"
import colorItems from "../../03-modules/filter/mocks/colorItems"
import activeFilterItems from "../../03-modules/active-filters/mocks/active-filters"
import checkboxItems from "../../03-modules/filter/mocks/checkboxItems"

storiesOf('Views/Catalog', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
  components: { AHeader, ACatalog },
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
    <div>
      <a-header
        :menu="menu"
        src="./../images/logo/alpaca.svg"
        link="#"
      />
      <a-catalog
        :products="products.items"
        :swatchItems="swatchItems"
        :colorItems="colorItems"
        :activeFilterItems="activeFilterItems"
        :checkboxItems="checkboxItems"
        :toolbar="toolbar"
        :breadcrumbs="breadcrumbs"
      />
    </div>
  `
}))
