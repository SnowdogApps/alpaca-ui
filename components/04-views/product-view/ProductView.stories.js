import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import breadcrumbs from '@alpaca-storybook/components/02-elements/breadcrumbs/mocks/breadcrumbs.json'
import tabs from '@alpaca-storybook/components/02-elements/tabs/mocks/tabs.json'
import menu from '@alpaca-storybook/components/03-modules/header/mocks/menu.json'
import banner from '@alpaca-storybook/components/03-modules/additional-content/mocks/picture.json'
import briefInfo from '@alpaca-storybook/components/03-modules/brief-info/mocks/brief-info.json'
import gallery from '@alpaca-storybook/components/03-modules/gallery/mocks/gallery.json'
import product from '@alpaca-storybook/mocks/simple-product.json'
import oldProduct from './mocks/product.json'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaHeader from '@alpaca-storybook/components/03-modules/header/Header.vue'
import AlpacaSimpleProductView from './simple/SimpleProductView.vue'
import AlpacaConfigurableProductView from './configurable/ConfigurableProductView.vue'

storiesOf('Views/Product View', module)
  .addDecorator(StoryRouter())
  .add('Simple', () => ({
    components: {
      App,
      AlpacaHeader,
      AlpacaSimpleProductView
    },
    data() {
      return {
        breadcrumbs,
        tabs,
        menu,
        banner,
        briefInfo,
        gallery,
        oldProduct,
        product
      }
    },
    template: `
      <app>
        <alpaca-header
          :menu="menu"
          src="./../images/logo/alpaca.svg"
          link="#"
        />
        <alpaca-simple-product-view
          :breadcrumbs="breadcrumbs"
          :tabs="tabs"
          :brief-info="briefInfo"
          :gallery="gallery"
          :product="product"
          :old-product="oldProduct"
          :banner="banner"
          first-column-text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          second-column-text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </app>
    `
  }))
  .add('Configurable', () => ({
    components: {
      App,
      AlpacaHeader,
      AlpacaConfigurableProductView
    },
    data() {
      return {
        breadcrumbs,
        tabs,
        menu,
        banner,
        briefInfo,
        gallery,
        oldProduct
      }
    },
    template: `
      <app>
        <alpaca-header
          :menu="menu"
          src="./../images/logo/alpaca.svg"
          link="#"
        />
        <alpaca-configurable-product-view
          :breadcrumbs="breadcrumbs"
          :tabs="tabs"
          :brief-info="briefInfo"
          :gallery="gallery"
          :product="oldProduct"
          :banner="banner"
          first-column-text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          second-column-text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </app>
    `
  }))
