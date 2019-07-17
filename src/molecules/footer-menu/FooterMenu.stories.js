import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AFooterMenu from './FooterMenu.vue'

import menu from './mocks/menu.json'

storiesOf('Molecules/Footer menu', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AFooterMenu },
    data: () => ({ menu }),
    methods: {
      submit: action('Submitted')
    },
    template: `<a-footer-menu :menu="menu"/>`
  }))
