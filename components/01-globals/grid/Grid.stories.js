import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaGrid from './Grid.vue'

// Preview styles
import './preview/styles.css'

storiesOf('Global/Grid', module)
  .add('Default', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          :grids="[
            [
              'col-xs-12 col-sm-3 col-md-2 col-lg-1',
              'col-xs-6 col-sm-6 col-md-8 col-lg-10',
              'col-xs-6 col-sm-3 col-md-2 col-lg-1'
            ],
            [
              'col-xs-12 col-sm-3 col-md-2 col-lg-1',
              'col-xs-12 col-sm-9 col-md-10 col-lg-11'
            ],
            [
              'col-xs-10 col-sm-6 col-md-8 col-lg-10',
              'col-xs-2 col-sm-6 col-md-4 col-lg-2'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Fluid', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          :grids="[
            [
              'col-xs-12'
            ],
            [
              'col-xs-1',
              'col-xs-11'
            ],
            [
              'col-xs-2',
              'col-xs-10'
            ],
            [
              'col-xs-3',
              'col-xs-9'
            ],
            [
              'col-xs-4',
              'col-xs-8'
            ],
            [
              'col-xs-5',
              'col-xs-7'
            ],
            [
              'col-xs-6',
              'col-xs-6'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Auto width', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          :grids="[
            [
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs'
            ],
            [
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Reordering', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          :grids="[
            [
              'col-xs-2',
              'col-xs-2',
              'col-xs-2',
              'col-xs-2',
              'col-xs-2',
              'col-xs-2 first-xs'
            ],
            [
              'col-xs-2',
              'col-xs-2',
              'col-xs-2 last-xs',
              'col-xs-2',
              'col-xs-2',
              'col-xs-2'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Distribution around', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="around-xs"
          :grids="[
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]"
        />
      </app>
    `
  }))
  .add('Distribution between', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="between-xs"
          :grids="[
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]"
        />
      </app>
    `
  }))
  .add('Alignment start', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="start-xs"
          :grids="[
            ['col-xs-6']
          ]"
        />
      </app>
    `
  }))
  .add('Alignment center', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="center-xs"
          :grids="[
            ['col-xs-6']
          ]"
        />
      </app>
    `
  }))
  .add('Alignment end', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="end-xs"
          :grids="[
            ['col-xs-6']
          ]"
        />
      </app>
    `
  }))
  .add('Alignment top', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="top-xs"
          :grids="[
            [
              'col-xs col-large',
              'col-xs'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Alignment middle', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="middle-xs"
          :grids="[
            [
              'col-xs col-large',
              'col-xs'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Alignment bottom', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="bottom-xs"
          :grids="[
            [
              'col-xs col-large',
              'col-xs'
            ]
          ]"
        />
      </app>
    `
  }))
  .add('Reversing', () => ({
    components: { App, AlpacaGrid },
    template: `
      <app>
        <alpaca-grid
          row-class="reverse"
          :grids="[
            [
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs',
              'col-xs'
            ]
          ]"
        />
      </app>
    `
  }))
