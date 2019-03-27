import { storiesOf } from '@storybook/vue'

import AlpacaGrid from './Grid.vue'

// Preview styles
import './preview/styles.css'

storiesOf('Global/Grid', module)
  .add('Default', () => ({
    components: { AlpacaGrid },
    template: `
       <div class="wrapper">
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
      </div>
    `
  }))
  .add('Fluid', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
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
      </div>
    `
  }))
  .add('Auto width', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper"> 
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
      </div>  
    `
  }))
  .add('Reordering', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
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
      </div>  
    `
  }))
  .add('Distribution around', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
        <alpaca-grid
          row-class="around-xs"
          :grids="[
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]"
        />
      </div>>  
    `
  }))
  .add('Distribution between', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper"> 
        <alpaca-grid
          row-class="between-xs"
          :grids="[
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]"
        />
      </div>  
    `
  }))
  .add('Alignment start', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
        <alpaca-grid
          row-class="start-xs"
          :grids="[
            ['col-xs-6']
          ]"
        />
      </div>  
    `
  }))
  .add('Alignment center', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
        <alpaca-grid
          row-class="center-xs"
          :grids="[
            ['col-xs-6']
          ]"
        />
      </div>  
    `
  }))
  .add('Alignment end', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
        <alpaca-grid
          row-class="end-xs"
          :grids="[
            ['col-xs-6']
          ]"
        />
      </div>  
    `
  }))
  .add('Alignment top', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper"> 
        <alpaca-grid
          row-class="top-xs"
          :grids="[
            [
              'col-xs col-large',
              'col-xs'
            ]
          ]"
        />
      </div>  
    `
  }))
  .add('Alignment middle', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
        <alpaca-grid
          row-class="middle-xs"
          :grids="[
            [
              'col-xs col-large',
              'col-xs'
            ]
          ]"
        />
      </div>  
    `
  }))
  .add('Alignment bottom', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
        <alpaca-grid
          row-class="bottom-xs"
          :grids="[
            [
              'col-xs col-large',
              'col-xs'
            ]
          ]"
        />
      </div>  
    `
  }))
  .add('Reversing', () => ({
    components: { AlpacaGrid },
    template: `
      <div class="wrapper">
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
      </div>  
    `
  }))
