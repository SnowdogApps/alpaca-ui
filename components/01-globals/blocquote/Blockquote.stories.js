import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaBlockquote from './Blockquote.vue'

storiesOf('Global/Blockquote', module)
  .add('Default', () => ({
    components: { App, AlpacaBlockquote },
    template: `
      <app>
        <alpaca-blockquote>
          Qui quis labore ad laborum laborum ipsum veniam sunt. Laboris tempor id ut commodo aute incididunt consequat esse aute irure. Et irure elit veniam proident non do commodo labore cillum irure laborum ullamco nostrud.
        </alpaca-blockquote>
      </app>
    `
  }))
  .add('Custom tag', () => ({
    components: { App, AlpacaBlockquote },
    template: `
      <app>
        <alpaca-blockquote tag="span">
          Ipsum consequat do eiusmod irure dolor labore mollit commodo. Culpa eu Lorem fugiat incididunt velit incididunt reprehenderit quis do anim culpa. Proident aute incididunt non anim. Est aute laborum aliquip duis. Deserunt velit velit veniam reprehenderit laboris cupidatat cupidatat elit. Ad duis est tempor consequat incididunt.
        </alpaca-blockquote>
      </app>
    `
  }))
