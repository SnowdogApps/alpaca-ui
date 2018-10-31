import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import GridContainer from './grid-container/GridContainer.vue'
import GridCollumn from './grid-collumn/GridCollumn.vue'

storiesOf('Global/Grid', module).add('Default', () => ({
  components: {App, GridContainer, GridCollumn},
  template: `
      <app>
        <grid-container>
          <grid-collumn width="1-2">
            1-2
          </grid-collumn>
          <grid-collumn width="1-2">
            1-2
          </grid-collumn>
        </grid-container>

        <grid-container>
          <grid-collumn width="1-3">
            1-3
          </grid-collumn>
          <grid-collumn width="1-3">
            1-3
          </grid-collumn>
          <grid-collumn width="1-3">
            1-3
          </grid-collumn>
        </grid-container>
      </app>
    `
}))
