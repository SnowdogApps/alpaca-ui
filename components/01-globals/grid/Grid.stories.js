import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import GridContainer from './grid-container/GridContainer.vue'
import GridColumn from './grid-column/GridColumn.vue'

storiesOf('Global/Grid', module).add('Default', () => ({
  components: {App, GridContainer, GridColumn},
  template: `
      <app>
        <grid-container>
          <grid-column width="1-2">
            1-2
          </grid-column>
          <grid-column width="1-2">
            1-2
          </grid-column>
        </grid-container>

        <grid-container>
          <grid-column width="1-3">
            1-3
          </grid-column>
          <grid-column width="1-3">
            1-3
          </grid-column>
          <grid-column width="1-3">
            1-3
          </grid-column>
        </grid-container>
      </app>
    `
}))
