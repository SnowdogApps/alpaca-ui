import { storiesOf } from '@storybook/vue'

import AFileUpload from './FileUpload.vue'

storiesOf('Molecules/File Upload', module)
  .add(
    'Default',
    () => ({
      components: { AFileUpload },
      template: `
        <a-file-upload/>
      `
    }
  ))
