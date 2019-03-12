import { storiesOf } from '@storybook/vue'

import App from '@/components/01-globals/app/App.vue'
import AlpacaPreformatted from './Preformatted.vue'

storiesOf('Global/Preformatted', module)
  .add('Default', () => ({
    components: { App, AlpacaPreformatted },
    template: `
      <app>
        <alpaca-preformatted>
          Aliqua minim incididunt velit enim est et. Sint incididunt eiusmod exercitation culpa in enim ut minim cillum quis sint velit tempor consectetur. Excepteur nostrud ea labore aliqua qui fugiat et dolor reprehenderit reprehenderit laboris. Nisi fugiat do Lorem est mollit commodo aliquip. Consequat incididunt irure laboris enim eiusmod tempor ea esse eu fugiat tempor sint. Ex sunt ullamco laboris adipisicing deserunt quis sunt sint amet.
        </alpaca-preformatted>
      </app>
    `
  }))
  .add('Custom tag', () => ({
    components: { App, AlpacaPreformatted },
    template: `
      <app>
        <alpaca-preformatted
          tag="div"
        >
          Cupidatat consequat irure veniam nulla elit veniam tempor labore ullamco Lorem. Aute do excepteur nulla labore. Velit qui ea nostrud veniam minim ex mollit laborum occaecat cillum nisi anim. Sint esse eu velit irure ad Lorem qui.
        </alpaca-preformatted>
      </app>
    `
  }))
