import { storiesOf } from '@storybook/vue'

import AlpacaFileUpload from './FileUpload.vue'

storiesOf('Elements/Form/File Upload', module)
  .add('Default', () => ({
    components: { AlpacaFileUpload },
    template: `
        <alpaca-file-upload/>
    `
  }))
