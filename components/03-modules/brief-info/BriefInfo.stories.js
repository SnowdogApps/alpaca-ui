import { storiesOf } from '@storybook/vue'

import AlpacaBriefInfo from './BriefInfo.vue'

import briefInfo from './mocks/brief-info.json'

storiesOf('Modules/Brief Info', module).add('Default', () => ({
  components: { AlpacaBriefInfo },
  data: () => ({
    briefInfo
  }),
  template: `
      <alpaca-brief-info
        :items="briefInfo.items"
        :level="3"
        :heading="briefInfo.heading.text"
      />
  `
}))
