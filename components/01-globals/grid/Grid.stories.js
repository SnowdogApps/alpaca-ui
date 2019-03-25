import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaGrid from './Grid.vue'

import grid from './mocks/default'
import fluid from './mocks/fluid'
import autoWidth from './mocks/autoWidth'
import reordering from './mocks/reordering'
import distribution from './mocks/distribution'
import alignmentStart from './mocks/alignmentStart'
import alignmentMiddle from './mocks/alignmentMiddle'
import reversing from './mocks/reversing'

storiesOf('Global/Grid', module)
  .add('Default', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      grid
    }),
    template: `
      <app>
        <alpaca-grid
          class="docs-only-styles"
          :grids="grid"/>
      </app>
    `
  }))
  .add('Fluid', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      fluid
    }),
    template: `
      <app>
        <alpaca-grid
          class="docs-only-styles"
          :grids="fluid"/>
      </app>
    `
  }))
  .add('Auto width', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      autoWidth
    }),
    template: `
      <app>
        <alpaca-grid
          class="docs-only-styles"
          :grids="autoWidth"/>
      </app>
    `
  }))
  .add('Reordering', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      reordering
    }),
    template: `
      <app>
        <alpaca-grid
          class="docs-only-styles"
          :grids="reordering"/>
      </app>
    `
  }))
  .add('Distribution around', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      distribution
    }),
    template: `
      <app>
        <alpaca-grid
          class="docs-only-styles"
          row-class="around-xs"
          :grids="distribution"/>
      </app>
    `
  }))
  .add('Distribution between', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      distribution
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="between-xs"
          class="docs-only-styles"
          :grids="distribution"/>
      </app>
    `
  }))
  .add('Alignment start', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      alignmentStart
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="start-xs"
          class="docs-only-styles"
          :grids="alignmentStart"/>
      </app>
    `
  }))
  .add('Alignment center', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      alignmentStart
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="center-xs"
          class="docs-only-styles"
          :grids="alignmentStart"/>
      </app>
    `
  }))
  .add('Alignment end', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      alignmentStart
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="end-xs"
          class="docs-only-styles"
          :grids="alignmentStart"/>
      </app>
    `
  }))
  .add('Alignment top', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      alignmentMiddle
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="top-xs"
          class="docs-only-styles"
          :grids="alignmentMiddle"/>
      </app>
    `
  }))
  .add('Alignment middle', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      alignmentMiddle
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="middle-xs"
          class="docs-only-styles"
          :grids="alignmentMiddle"/>
      </app>
    `
  }))
  .add('Alignment bottom', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      alignmentMiddle
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="bottom-xs"
          class="docs-only-styles"
          :grids="alignmentMiddle"/>
      </app>
    `
  }))
  .add('Reversing', () => ({
    components: { App, AlpacaGrid },
    data: () => ({
      reversing
    }),
    template: `
      <app>
        <alpaca-grid
          row-class="reverse"
          class="docs-only-styles"
          :grids="reversing"/>
      </app>
    `
  }))
