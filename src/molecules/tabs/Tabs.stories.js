import ATabs from './Tabs.vue'
import ATab from '@atoms/tab/Tab.vue'
import AButton from '@atoms/button/Button.vue'
import AParagraph from '@atoms/paragraph/Paragraph.vue'
import AIcon from '@atoms/icon/Icon.vue'
import AIconStarBorder from '@atoms/icon/templates/IconStarBorder.vue'

export default {
  title: 'Molecules/Tabs',
  component: ATabs,
  argTypes: {
    tabClick: {
      action: 'clicked tab'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    ATabs,
    ATab,
    AButton,
    AParagraph,
    AIcon,
    AIconStarBorder
  },
  props: Object.keys(argTypes),
  template: `
    <a-tabs @click="tabClick">
      <a-tab
        name="Services"
        selected
      >
        <a-paragraph>
          Toe in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </a-paragraph>
      </a-tab>
      <a-tab name="Pricing">
        <a-paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </a-paragraph>
      </a-tab>
      <a-tab name="Reviews">
        <a-paragraph>
          Sed do eiusmod tempor incididunt ut labo. Ut enim ad minim veniam, re et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </a-paragraph>
      </a-tab>
    </a-tabs>
  `
})

export const Default = Template.bind({})

export const WithSlots = (args, { argTypes }) => ({
  components: {
    ATabs,
    ATab,
    AButton,
    AParagraph,
    AIcon,
    AIconStarBorder
  },
  props: Object.keys(argTypes),
  template: `
    <a-tabs @click="tabClick">
      <template #button="{ tab }">
        <a-icon title="Star border icon">
          <a-icon-star-border />
        </a-icon>
        {{ tab.name }}
        <span
          v-if="tab.name === 'Reviews'"
          style='margin-left: 4px;'
        >
          (3)
        </span>
      </template>
      <a-tab name="Services">
        <a-paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </a-paragraph>
      </a-tab>
      <a-tab
        name="Pricing"
        selected
      >
        <a-button>
          Alpaca Button
        </a-button>
      </a-tab>
      <a-tab name="Reviews">
        <a-paragraph>
          Sed do eiusmod tempor incididunt ut labo. Ut enim ad minim veniam, re et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </a-paragraph>
      </a-tab>
    </a-tabs>
  `
})
