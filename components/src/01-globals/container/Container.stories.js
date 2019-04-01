import { storiesOf } from '@storybook/vue'

import Container from './Container.vue'

storiesOf('Global/Container', module).add('Default', () => ({
  components: { Container },
  template: `
      <container>
        Container
      </container>
  `
}))
