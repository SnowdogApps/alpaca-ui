import { storiesOf } from '@storybook/vue'

import APreformatted from './Preformatted.vue'

storiesOf('Atoms/Preformatted', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { APreformatted },
    template: `
      <a-preformatted>
        Aliqua minim incididunt velit enim est et. Sint incididunt eiusmod exercitation culpa in enim ut minim cillum quis sint velit tempor consectetur. Excepteur nostrud ea labore aliqua qui fugiat et dolor reprehenderit reprehenderit laboris. Nisi fugiat do Lorem est mollit commodo aliquip. Consequat incididunt irure laboris enim eiusmod tempor ea esse eu fugiat tempor sint. Ex sunt ullamco laboris adipisicing deserunt quis sunt sint amet.
      </a-preformatted>
    `
  }))
