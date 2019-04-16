import { storiesOf } from '@storybook/vue'

import AFieldset from './Fieldset.vue'

storiesOf('Atoms/Fieldset', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { AFieldset },
    template: `
      <a-fieldset legend-text="Legend text">
        <span>Fieldset content</span>
      </a-fieldset>
    `
  }))
