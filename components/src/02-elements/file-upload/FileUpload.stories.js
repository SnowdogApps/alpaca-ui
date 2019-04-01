import { storiesOf } from '@storybook/vue'

import AFileUpload from './FileUpload.vue'

storiesOf('Elements/Form/File Upload', module)
  .add('Default', () => ({
    components: { AFileUpload },
    template: `
        <a-file-upload/>
    `
  }))
