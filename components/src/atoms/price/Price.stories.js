import { storiesOf } from '@storybook/vue'

import APrice from './Price.vue'

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
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      ...defaultData,
      template: `
        <a-price>
          <span>{{ price }}</span>
        </a-price>
      `
    })
  )
  .add(
    'Special Price',
    () => ({
      ...defaultData,
      template: `
        <a-price 
          :special-price="special"
          aria-label-special="Special price:"
        />
      `
    })
  )
  .add(
    'Old price',
    () => ({
      ...defaultData,
      template: `
        <a-price 
          :old-price="old"
          aria-label-old="Old price:"
        />
      `
    })
  )
  .add(
    'With special price',
    () => ({
      ...defaultData,
      template: `
        <a-price
          :old-price="old"
          :special-price="special"
          aria-label-special="Special price:"
          aria-label-old="Old price:"
        />
      `
    })
  )
  .add(
    'With slots',
    () => ({
      ...defaultData,
      template: `
        <a-price>
          <template #oldPrice>
            <span :style="{color: '#73739c'}"> 
              {{old}} 
            </span>&nbsp;
          </template> 
          <template #specialPrice>
            <span :style="{color: '#e32926'}"> 
              {{special}}
            </span>
          </template>
        </a-price>
      `
    })
  )
