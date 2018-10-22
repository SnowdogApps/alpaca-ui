import { storiesOf } from '@storybook/vue'

import App from './App.vue'

storiesOf('Global/App', module)
  .add('Default', () => ({
    components: { App },
    template: `
      <app>
        Test
      </app>
    `,
  }))
