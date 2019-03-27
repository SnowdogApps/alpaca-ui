import { storiesOf } from '@storybook/vue'

import AlpacaAdditionalContent from './AdditionalContent.vue'

import picture from './mocks/picture.json'

storiesOf('Modules/Additional Content', module).add('Default', () => ({
  components: { AlpacaAdditionalContent },
  data () {
    return {
      picture
    }
  },
  template: `
      <alpaca-additional-content
        :picture="picture"
        picture-alt="Sample alt text"
        first-column-text="First column"
        second-column-text="Second column"
      />
  `
}))
