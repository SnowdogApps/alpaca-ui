import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaTabs from './Tabs.vue'

import tabs from './mocks/tabs.json'

storiesOf('Elements/Tabs', module).add('Default', () => ({
  components: { App, AlpacaTabs },
  data: () => ({
    tabs
  }),
  template: `
    <app>
    
      <alpaca-tabs 
        v-for="(tab, i) in tabs.items"
        :index="i"
        :key="tab.tabId"
        :tab="tab"
        :tabs="tabs.items"
      >
        {{ tab.content }}
      </alpaca-tabs>
    </app>
  `
}))
.add('With icon', () => ({
  components: { App, AlpacaTabs },
  data: () => ({
    tabs
  }),
  template: `
    <app>
      <alpaca-tabs 
        :tabs="tabs.items"
        :icon="tabs.icon.iconId"
      />
    </app>
  `
}))
