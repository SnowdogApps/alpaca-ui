import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'

import iconsReadme from './README.md'
import icons from './mocks/icons.json'

import App from '../app/App.vue'
import Icon from './Icon.vue'

storiesOf('Global/Icon', module)
  .addDecorator(withReadme(iconsReadme))
  .add('Default', () => ({
    components: { App, Icon },
    data: () => ({ icons }),
    template: `
      <app>
        <div style="display: flex; flex-wrap: wrap; padding: 10px;">
          <div
            v-for="icon in icons"
            :key="icon.iconId"
            style="margin: 20px; width: 100px;"
          >
            <icon
              :icon="icon.iconId"
              :title="icon.iconTitle"
              style="margin: 0 auto;"
            />
            <span style="display: block; margin-top: 20px; text-align: center;">
              {{ icon.iconId }}
            </span>
          </div>
        </div>
      </app>
    `
  }))
