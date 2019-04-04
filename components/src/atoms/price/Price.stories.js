import { storiesOf } from '@storybook/vue'

import APrice from './Price.vue'

const info = `
  ---
  #### Use these modifiers with \`.price\` class.
  - \`.price--large\` - Selector for use large size of price
  ---
`

const defaultData = {
  components: { APrice },
  data: () => {
    return {
      price: '$1 400.00',
      special: '$1 299 00',
      old: '$1 999.99'
    }
  }
}

storiesOf('Atoms/Price', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
    template: `
      <a-price>
        <span>{{ price }}</span>
      </a-price>
    `
  }))
  .add('Default -- Large', () => ({
    ...defaultData,
    template: `
      <a-price class="price--large">
        <span>{{ price }}</span>
      </a-price>
    `
  }))
  .add('Special Price', () => ({
    ...defaultData,
    template: `
      <a-price :specialPrice="special"/>
    `
  }))
  .add('Old price', () => ({
    ...defaultData,
    template: `
      <a-price :oldPrice="old"/>
    `
  }))
  .add('With special price', () => ({
    ...defaultData,
    template: `
      <a-price
        :oldPrice="old"
        :specialPrice="special"
      />
    `
  }))
  .add('With slots', () => ({
    ...defaultData,
    template: `
      <a-price>
        <template #oldPrice>
          <span :style="{color: 'orange'}"> {{old}} </span>&nbsp;
        </template> 
        <template #specialPrice>
          <span :style="{color: 'green'}"> {{special}} </span>
        </template>
      </a-price>
    `
  }))
