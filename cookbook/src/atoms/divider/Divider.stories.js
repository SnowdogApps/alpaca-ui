import { storiesOf } from '@storybook/vue'

import ADivider from './Divider.vue'

storiesOf('Atoms/Divider', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ADivider },
    template: `
      <a-divider/>
    `
  }))
