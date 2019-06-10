import { storiesOf } from '@storybook/vue'

import AIcon from './Icon.vue'

import readme from './README.md'
import icons from './mocks/icons.json'

storiesOf('Atoms/Icon', module)
  .addParameters(
    {
      info: true,
      notes: readme
    }
  )
  .add('Default', () => ({
    components: { AIcon },
    data: () => ({ icons }),
    template: `
      <div style="display: flex; flex-wrap: wrap; padding: 10px;">
        <div
          v-for="icon in icons"
          :key="icon.iconId"
          style="margin: 20px; width: 100px;"
        >
          <a-icon
            :icon="icon.iconId"
            style="margin: 0 auto;"
            :title="icon.iconTitle"
          />
          <span style="display: block; margin-top: 20px; text-align: center;">
            {{ icon.iconId }}
          </span>
        </div>
      </div>
    `
  }))
