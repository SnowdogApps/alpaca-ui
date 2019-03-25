import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaFileUpload from './FileUpload.vue'

storiesOf('Elements/Form/File Upload', module)
  .add('Default', () => ({
    components: { App, AlpacaFileUpload },
    template: `
      <app>
        <alpaca-file-upload/>
      </app>
    `
  }))
