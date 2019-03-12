import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import breadcrumbs from '@/components/02-elements/breadcrumbs/mocks/breadcrumbs.json'
import tabs from '@/components/02-elements/tabs/mocks/tabs.json'
import menu from '@/components/03-modules/header/mocks/menu.json'
import banner from '@/components/03-modules/additional-content/mocks/picture.json'
import briefInfo from '@/components/03-modules/brief-info/mocks/brief-info.json'
import gallery from '@/components/03-modules/gallery/mocks/gallery.json'
import product from './mocks/product.json'

import App from '@/components/01-globals/app/App.vue'
import AlpacaProductView from './ProductView.vue'
import AlpacaHeader from '@/components/03-modules/header/Header.vue'

storiesOf('Views/Product View', module)
  .addDecorator(StoryRouter())
  .add('Configurable', () => ({
    components: { App, AlpacaHeader, AlpacaProductView },
    data() {
      return {
        breadcrumbs,
        tabs,
        menu,
        banner,
        briefInfo,
        gallery,
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
        <alpaca-product-view
          :breadcrumbs="breadcrumbs"
          :tabs="tabs"
          :brief-info="briefInfo"
          :gallery="gallery"
          :product="product"
          :banner="banner"
          first-column-text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          second-column-text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </app>
    `
  }))
