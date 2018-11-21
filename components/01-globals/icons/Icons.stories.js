import {storiesOf} from '@storybook/vue'
import { withDocs } from 'storybook-readme';

import IconsReadme from './README.md';

import App from '../app/App.vue'
import AlpacaIcons from '../icons/Icons.vue'

storiesOf('Global/Icons', module)
  .add('Readme', withDocs(IconsReadme, () => ({
    components: { App, AlpacaIcons },
    template: ` 
      <app>
         <alpaca-icons/>
     </app>`
  })))
