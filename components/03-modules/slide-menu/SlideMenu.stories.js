import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import menu from '@alpaca-storybook/mocks/slide-menu'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaSlideMenu from './SlideMenu.vue'

storiesOf('Modules/Slide Menu', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaSlideMenu },
    data: () => ({
      menu
    }),
    template: `
      <app>
        <alpaca-slide-menu :menu-items="menu"/>
      </app>
    `
  }))
