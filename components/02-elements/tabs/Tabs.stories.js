import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaTab from './Tab.vue'
import AlpacaTabsContainer from './TabsContainer.vue'
import AlpacaTabContent from './TabContent.vue'

import tabs from './mocks/tabs.json'

storiesOf('Elements/Tabs', module).add('Default', () => ({
  components: { App, AlpacaTab, AlpacaTabsContainer, AlpacaTabContent },
  data: () => ({
    tabs,
    activeTab: tabs[0].tabId
  }),
  template: `
    <app>
      <alpaca-tabs-container>
        <template v-for="tab in tabs">
          <alpaca-tab
            :key="tab.tabId"
            :tab-id="tab.tabId"
            :title="tab.title"
            :active-tab="activeTab"
            @click="setActiveTab(tab.tabId)"
          />
          <alpaca-tab-content
            :tab-id="tab.tabId"
            :title-id="tab.titleId"
            :active-tab="activeTab"
          >
            {{ tab.content }}
          </alpaca-tab-content>
        </template>
      </alpaca-tabs-container>
    </app>
  `,
  methods: {
    setActiveTab(tab) {
      this.activeTab = this.tabs
        .filter(el => el.tabId === tab)
        .map(el => el.tabId)[0]
    }
  }
}))
.add('With icon', () => ({
  components: { App, AlpacaTab, AlpacaTabsContainer, AlpacaTabContent },
  data: () => ({
    tabs,
    activeTab: tabs[0].tabId
  }),
  template: `
    <app>
      <alpaca-tabs-container>
        <template v-for="tab in tabs">
          <alpaca-tab
            :key="tab.tabId"
            :tab-id="tab.tabId"
            :title="tab.title"
            :active-tab="activeTab"
            icon="angle-down"
            @click="setActiveTab(tab.tabId)"
          />
          <alpaca-tab-content
            :tab-id="tab.tabId"
            :title-id="tab.titleId"
            :active-tab="activeTab"
          >
            {{ tab.content }}
          </alpaca-tab-content>
        </template>
      </alpaca-tabs-container>
    </app>
  `,
  methods: {
    setActiveTab(tab) {
      this.activeTab = this.tabs
        .filter(el => el.tabId === tab)
        .map(el => el.tabId)[0]
    }
  }
}))
