import { storiesOf } from '@storybook/vue'

import ATabs from './Tabs.vue'
import ATab from './../../atoms/tab/Tab.vue'
import AButton from './../../atoms/button/Button.vue'
import AParagraph from './../../atoms/paragraph/Paragraph.vue'

storiesOf('Molecules/Tabs', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ATabs, ATab, AButton, AParagraph },
    template: `
    <a-tabs>
      <a-tab name="Services">
        <a-button>Alpaca Button</a-button>
      </a-tab>
      <a-tab name="Pricing" :selected="true">
        <a-paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </a-paragraph>
      </a-tab>
      <a-tab name="About Us">
        <h1>Why we do it</h1>
      </a-tab>
    </a-tabs>
    `
  }))
