import { storiesOf } from '@storybook/vue'

import App from '../components/01-globals/app/App.vue'

storiesOf('Global/App', module)
  .add('Default', () => ({
    components: { App },
    template: `
      <app>
        Test
      </app>
    `,
  }))
