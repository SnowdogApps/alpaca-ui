import { storiesOf } from '@storybook/vue'

import App from '../components/01-globals/app/App.vue'
import GridContainer from '../components/01-globals/grid/GridContainer.vue'
import GridCollumn from '../components/01-globals/grid/GridCollumn.vue'

storiesOf('Global/Grid', module)
  .add('Default', () => ({
    components: { App, GridContainer, GridCollumn },
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
    `,
  }))
