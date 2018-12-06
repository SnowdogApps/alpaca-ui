import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaBriefInfo from './BriefInfo.vue'

import briefInfo from './mocks/brief-info.json'

storiesOf('Modules/Brief Info', module).add('Default', () => ({
  components: { App, AlpacaBriefInfo },
  data: () => ({
    briefInfo
  }),
  template: `
    <app>
      <alpaca-brief-info 
        :items="briefInfo.items"
        :level="3"
        :heading="briefInfo.heading.text"/>
    </app>
  `
}))
