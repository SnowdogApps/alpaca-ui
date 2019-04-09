import { storiesOf } from '@storybook/vue'

import AFileUpload from './FileUpload.vue'

storiesOf('Molecules/File Upload', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: { AFileUpload },
      template: `
        <a-file-upload
          title="Your file"
          buttonText="Upload a file"
          emptyText="File not choosen"
        />
      `
    }
  ))
  .add(
    'With slots',
    () => ({
      components: { AFileUpload },
      template: `
        <a-file-upload accepted-formats=".pdf,.doc">
          <template #file="{ fileName }">
            {{ fileName }}
          </template>
          <template #title>
            <span class="file-upload__label">
              Your file (pdf, doc)
            </span>
          </template>
          <template #button>
            Upload new file
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
            <span class="file-upload__label">
              Your file (pdf, doc, max 1 MB)
            </span>
          </template>
          <template #button>
            Upload new file
          </template>
          <template #empty>
            File not choosen
          </template>
          <template #error>
            <span class="file-upload__error">
              File is too big! Please upload < 1 MB file
            </span>
          </template>
        </a-file-upload>
      `
    }
  ))
