import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import menu from './mocks/menu.json'

import App from '../../01-globals/app/App.vue'
import AlpacaSideMenu from './SideMenu.vue'

storiesOf('Modules/Side Menu', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaSideMenu },
    data: () => ({
      menu
    }),
    template: `
      <app>
        <alpaca-side-menu :menuItems="menu"/>
      </app>
    `
  }))
