import {storiesOf} from '@storybook/vue'

import iconsInfo from './iconsInfo.json'

import App from '../app/App.vue'
import Icon from '../icon/Icon.vue'

console.log(iconsInfo);

storiesOf('Global/Icons', module).add('Default', () => ({
  components: {App, Icon},
  template: `
      <app>
        <icon icon="arrow-down" title="test"/>
      </app>
    `
}))
