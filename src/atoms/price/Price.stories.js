import { storiesOf } from '@storybook/vue'

import APrice from './Price.vue'

storiesOf('Atoms/Price', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { APrice },
    template: `<a-price regular-price="$36,00" />`
  }))
  .add('Special Price', () => ({
    components: { APrice },
    template: `
      <a-price
        regular-price="$36,00"
        special-price="$19,99"
        aria-label-special-price="Special price:"
        aria-label-old-price="Old price:"
      />
    `
  }))
  .add('With slot', () => ({
    components: { APrice },
    template: `
      <a-price>
        <template #regularPrice>
          Price: <span style="color: #2b15e0;">$123</span>
        </template>
      </a-price>
    `
  }))
