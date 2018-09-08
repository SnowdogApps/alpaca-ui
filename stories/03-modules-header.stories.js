import { storiesOf } from '@storybook/vue'

import App from '../components/01-globals/app/App.vue'
import AlpacaHeader from '../components/03-modules/header/Header.vue'

storiesOf('Modules|Header', module)
  .add('Default', () => ({
    components: { App, AlpacaHeader },
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
    template: `
      <app>
        <alpaca-header :menu="menu" />
      </app>
    `,
  }))
