import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
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
        pictureAlt="Sample alt text"
        firstColumnText="First column"
        secondColumnText="Second column"
      />
    </app>
  `
}))
