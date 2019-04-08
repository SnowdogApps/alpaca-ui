import { storiesOf } from '@storybook/vue'

import AFileUpload from './FileUpload.vue'

storiesOf('Molecules/File Upload', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: { AFileUpload },
      template: `
        <a-file-upload accepted-formats=".pdf,.doc">
          <template #title>
            Your file (pdf, doc)
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
  .add(
    'File size limit',
    () => ({
      components: { AFileUpload },
      template: `
        <a-file-upload
          accepted-formats=".pdf,.doc"
          :max-size="1000000"
        >
          <template #title>
            Your file (pdf, doc, max 1 MB)
          </template>
          <template #button>
            Upload a file
          </template>
          <template #error>
            File is too big! Please upload < 1 MB file
          </template>
          <template #empty>
            File not choosen
          </template>
        </a-file-upload>
      `
    }
  ))
