import { storiesOf } from '@storybook/vue'

import AFileUpload from './FileUpload.vue'

storiesOf('Molecules/File Upload', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: { AFileUpload },
      template: `
        <a-file-upload>
          <template #title>
            Your file (pdf, doc, max 1 MB)
          </template>
          <template #button>
            Upload a file
          </template>
          <template #empty>
            File not choosen
          </template>
        </a-file-upload>
      `
    }
  ))
