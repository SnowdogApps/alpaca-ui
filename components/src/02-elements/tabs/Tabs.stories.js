import { storiesOf } from '@storybook/vue'

import ATab from './Tabs.vue'
import ATabsContainer from '../tabs-container/TabsContainer.vue'
import ATabContent from '../tab-content/TabContent.vue'

import tabs from './mocks/tabs.json'

storiesOf('Elements/Tabs', module).add('Default', () => ({
  components: { ATab, ATabsContainer, ATabContent },
  data: () => ({
    tabs,
    activeTab: tabs[0].tabId
  }),
  template: `
      <a-tabs-container>
        <template v-for="tab in tabs">
          <a-tab
            :key="tab.tabId"
            :tab-id="tab.tabId"
            :title="tab.title"
            :active-tab="activeTab"
            @click="setActiveTab(tab.tabId)"
          />
          <a-tab-content
            :tab-id="tab.tabId"
            :title-id="tab.titleId"
            :active-tab="activeTab"
          >
            {{ tab.content }}
           </a-tab-content>
        </template>
       </a-tabs-container>
  `,
  methods: {
    setActiveTab (tab) {
      this.activeTab = this.tabs
        .filter(el => el.tabId === tab)
        .map(el => el.tabId)[0]
    }
  }
}))
  .add('With icon', () => ({
    components: { ATab, ATabsContainer, ATabContent },
    data: () => ({
      tabs,
      activeTab: tabs[0].tabId
    }),
    template: `
      <a-tabs-container>
        <template v-for="tab in tabs">
          <a-tab
            :key="tab.tabId"
            :tab-id="tab.tabId"
            :title="tab.title"
            :active-tab="activeTab"
            icon="angle-down"
            @click="setActiveTab(tab.tabId)"
          />
          <a-tab-content
            :tab-id="tab.tabId"
            :title-id="tab.titleId"
            :active-tab="activeTab"
          >
            {{ tab.content }}
           </a-tab-content>
        </template>
       </a-tabs-container>
  `,
    methods: {
      setActiveTab (tab) {
        this.activeTab = this.tabs
          .filter(el => el.tabId === tab)
          .map(el => el.tabId)[0]
      }
    }
  }))
