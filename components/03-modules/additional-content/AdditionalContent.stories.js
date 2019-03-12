import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaAdditionalContent from './AdditionalContent.vue'

import picture from './mocks/picture.json'

storiesOf('Modules/Additional Content', module).add('Default', () => ({
  components: { App, AlpacaAdditionalContent },
  data () {
    return {
      picture
    }
  },
  template: `
    <app>
      <alpaca-additional-content
        :picture="picture"
        picture-alt="Sample alt text"
        first-column-text="First column"
        second-column-text="Second column"
      />
    </app>
  `
}))
